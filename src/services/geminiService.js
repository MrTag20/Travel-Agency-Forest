import { GoogleGenerativeAI } from '@google/generative-ai';
import { COMPANY_INFO, PACKAGES, EXPERIENCES, DESTINATIONS } from '../data/travelData';
import { processUserMessage } from '../data/aiAssistantKnowledge';

// Retrieve API key from environment variables (Vite prefix: VITE_)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GOOGLE_API_KEY || '';

// System instruction providing rich delta expertise, package details, and company tone
const SYSTEM_INSTRUCTION = `
You are "Bono", the warm, professional, eco-conscious AI Delta Naturalist & Travel Specialist for SM Bengal Travel (sundarbantravel).
SM Bengal Travel is a premier eco-tourism company operating licensed boat safaris in the Sundarban Mangrove Delta, West Bengal, India.

Your goals:
1. Warmly answer visitors' questions about Sundarban wildlife, weather, safety, culture, and Bengali food.
2. Recommend the best tour package based on traveler needs (family, photography, weekend, couples, budget).
3. Guide visitors on booking steps, Kolkata pickups, Godkhali departure, and packing advice.
4. Keep answers engaging, natural, concise (2-4 short paragraphs maximum or bullet points), using markdown with emoji accents.

Key Details to Reference:
- Packages:
  * "1-Day Express Tour" (Slug: sundarban-1-day-tour): From ₹1,499 (Godkhali) / ₹1,999 (Kolkata AC Pickup). Visits Sajnekhali Watchtower, Mangrove Museum, Bono Bibi Temple.
  * "1 Night 2 Days Package" (Slug: sundarban-1-night-2-days-package): From ₹3,499 (Godkhali) / ₹3,999 (Kolkata). Popular weekend tour, Sudhanyakhali watchtower, village walk, evening Baul music, eco-resort stay.
  * "2 Nights 3 Days Deep Mangrove Expedition" (Slug: sundarban-2-nights-3-days-package): From ₹5,200 (Godkhali) / ₹5,800 (Kolkata). Flagship tour, famous Dobanki Canopy Walkway (20ft above ground), Pirkhali, Panchamukhani 5-river junction.
  * "3 Nights 4 Days Delta Odyssey" (Slug: sundarban-3-nights-4-days-package): From ₹7,800 (Godkhali) / ₹8,500 (Kolkata). Core buffer, Netidhopani ancient temple ruins, birdwatching.
- Food: 100% fresh Bengali dishes cooked onboard by local cooks (Luchi, Alur Dom, Bhetki fish, Chingri/Prawn Malai curry, Basmati rice, Beguni, Dal, Chutney, Rosogolla). Veg and Jain meals available upon request.
- Transport: AC pickup from Kolkata (Science City, Priya Cinema, Ruby, Airport) or direct boarding at Godkhali Ferry Ghat.
- Wildlife: Royal Bengal Tigers (best spotted basking Oct-Mar), saltwater estuarine crocodiles, spotted deer, monitor lizards, Irrawaddy dolphins, kingfishers.
- Contact: Phone ${COMPANY_INFO.phone}, WhatsApp ${COMPANY_INFO.whatsapp}, Departure Hub: ${COMPANY_INFO.departureHub}.

Always be polite, honest, and enthusiastic. Never make false guarantees about tiger sightings (they are wild in their natural habitat).
`;

let genAIInstance = null;
let geminiModel = null;

function getGeminiModel() {
  if (!GEMINI_API_KEY || GEMINI_API_KEY.trim() === '') {
    return null;
  }

  if (!geminiModel) {
    try {
      genAIInstance = new GoogleGenerativeAI(GEMINI_API_KEY.trim());
      // Use gemini-1.5-flash for ultra-fast, low-latency, and cost-effective responses
      geminiModel = genAIInstance.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: SYSTEM_INSTRUCTION
      });
    } catch (err) {
      console.warn('Failed to initialize Google Generative AI client:', err);
      return null;
    }
  }

  return geminiModel;
}

/**
 * Checks whether a valid Google Gemini API key is configured.
 */
export function isGeminiConfigured() {
  return Boolean(GEMINI_API_KEY && GEMINI_API_KEY.trim().length > 5);
}

/**
 * Detects if a user message or response corresponds to a specific package
 * to attach an interactive card in the chat.
 */
function findRelatedPackage(userText, botReply) {
  const combined = (userText + ' ' + botReply).toLowerCase();
  if (combined.includes('1 day') || combined.includes('one day') || combined.includes('sundarban-1-day')) {
    return PACKAGES.find(p => p.id === 'sundarban-1-day-tour');
  }
  if (combined.includes('1 night') || combined.includes('2 day') || combined.includes('weekend')) {
    return PACKAGES.find(p => p.id === 'sundarban-1-night-2-days-package');
  }
  if (combined.includes('2 night') || combined.includes('3 day') || combined.includes('dobanki') || combined.includes('canopy')) {
    return PACKAGES.find(p => p.id === 'sundarban-2-nights-3-days-package');
  }
  if (combined.includes('3 night') || combined.includes('4 day') || combined.includes('netidhopani')) {
    return PACKAGES.find(p => p.id === 'sundarban-3-nights-4-days-package');
  }
  return null;
}

/**
 * Sends a message to the AI Assistant.
 * Uses Google Gemini API when configured, otherwise falls back smoothly to
 * the local rule-based knowledge engine.
 */
export async function sendMessageToAssistant({ message, history = [], flowState = null }) {
  const model = getGeminiModel();

  // If Gemini is not configured, seamlessly use local knowledge engine
  if (!model) {
    const fallbackResponse = processUserMessage(message, flowState);
    return {
      reply: fallbackResponse.reply,
      packageCard: fallbackResponse.packageCard,
      suggestions: fallbackResponse.suggestions || [
        "What are your package prices?",
        "How do I reach from Kolkata?",
        "Open Booking Form"
      ],
      nextStep: fallbackResponse.nextStep,
      selectedPackageId: fallbackResponse.selectedPackageId,
      isGeminiPowered: false
    };
  }

  try {
    // Format previous messages for multi-turn chat
    const chatHistory = history
      .filter(item => item.sender === 'user' || item.sender === 'bot')
      .slice(-6) // Keep last 6 messages for context
      .map(item => ({
        role: item.sender === 'user' ? 'user' : 'model',
        parts: [{ text: item.text }]
      }));

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 600,
        temperature: 0.7,
      }
    });

    const result = await chat.sendMessage(message);
    const replyText = result.response.text();
    const relatedPkg = findRelatedPackage(message, replyText);

    // Dynamic suggestions based on conversation context
    const suggestions = [];
    if (replyText.toLowerCase().includes('book') || message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
      suggestions.push("📅 Open Booking Form", "💬 Inquire on WhatsApp");
    }
    if (relatedPkg) {
      suggestions.push(`Tell me more about ${relatedPkg.title}`);
    } else {
      suggestions.push("🧭 Compare all 4 packages", "🍲 What is the onboard food menu?");
    }

    return {
      reply: replyText,
      packageCard: relatedPkg,
      suggestions: suggestions.slice(0, 3),
      isGeminiPowered: true
    };
  } catch (error) {
    console.error('Google Gemini API call failed, falling back to local engine:', error);
    // Graceful fallback on API error / quota limit / network blip
    const fallbackResponse = processUserMessage(message, flowState);
    return {
      reply: fallbackResponse.reply,
      packageCard: fallbackResponse.packageCard,
      suggestions: fallbackResponse.suggestions,
      nextStep: fallbackResponse.nextStep,
      selectedPackageId: fallbackResponse.selectedPackageId,
      isGeminiPowered: false
    };
  }
}
