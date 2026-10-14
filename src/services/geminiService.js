import { GoogleGenerativeAI } from '@google/generative-ai';
import { COMPANY_INFO, PACKAGES, EXPERIENCES, DESTINATIONS, FAQS } from '../data/travelData';

// Retrieve API key from environment variables (Vite prefix: VITE_)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GOOGLE_API_KEY || '';

// Priority order of models supported by the Google Generative Language API
const SUPPORTED_MODELS = [
  'gemini-3.1-flash-lite',
  'gemini-flash-latest',
  'gemini-3.7-flash',
  'gemini-3.8-flash',
  'gemini-2.5-flash-lite',
  'gemini-pro-latest'
];

// Rich, comprehensive context about SM Bengal Travel and Sundarban
const SYSTEM_INSTRUCTION = `
You are "Bono", the real-time AI Delta Naturalist & Tour Consultant for "SM Bengal Travel" (sundarbantravel.com).
Your mission is to dynamically assist visitors with authentic advice, package recommendations, itineraries, pricing, wildlife sightings, and booking details.

ABOUT SM BENGAL TRAVEL:
- Premier licensed Sundarban tour operator based in West Bengal, India.
- Phone: ${COMPANY_INFO.phone}
- WhatsApp: ${COMPANY_INFO.whatsapp} (${COMPANY_INFO.whatsappNumberDigits})
- Email: ${COMPANY_INFO.email}
- Main Departure Hub: ${COMPANY_INFO.departureHub} (Godkhali Ferry Ghat)
- Pickups in Kolkata: Science City Main Gate, Priya Cinema (South Kolkata), Ruby Hospital / EM Bypass, Netaji Subhash Chandra Bose Airport. Canning Railway Station pickup also available.

AVAILABLE TOUR PACKAGES:
1. "1-Day Express Sundarban Tour"
   - ID: sundarban-1-day-tour
   - Starting Price: ₹1,499 per person (boarding at Godkhali) or ₹1,999 (with Kolkata AC vehicle transfer)
   - Duration: 1 Day (Same-day return, ~12-14 hours total)
   - Key Spots: Sajnekhali Watchtower, Mangrove Interpretation Museum, Bono Bibi Temple, river cruise in core buffer.
   - Ideal For: Day-trippers, business travelers, families with tight schedules.

2. "1 Night 2 Days Weekend Mangrove Escape"
   - ID: sundarban-1-night-2-days-package
   - Starting Price: ₹3,499 per person (Godkhali) or ₹3,999 (Kolkata AC transfer)
   - Duration: 2 Days / 1 Night
   - Stay: Riverside eco-resort at Pakhiralay/Dayapur (attached modern baths).
   - Key Spots: Sajnekhali & Sudhanyakhali Watchtowers, village life walk, live evening Baul folk performance, 5 authentic Bengali meals.
   - Ideal For: Weekend getaways, couples, families seeking a balanced taste of the jungle.

3. "2 Nights 3 Days Deep Mangrove Expedition" (FLAGSHIP TOUR)
   - ID: sundarban-2-nights-3-days-package
   - Starting Price: ₹5,200 per person (Godkhali) or ₹5,800 (Kolkata AC transfer)
   - Duration: 3 Days / 2 Nights
   - Stay: Premium riverside cottage / eco-resort with AC/Non-AC options.
   - Key Spots: Famous Dobanki Canopy Walkway (walk 20 feet above the mangrove canopy in protected netting), Pirkhali, Gazikhali creeks, Panchamukhani (5-river confluence), Sudhanyakhali, Sajnekhali.
   - Highlights: Highest probability of wildlife observation (tigers, crocodiles, spotted deer, monitor lizards).
   - Ideal For: Nature enthusiasts, wildlife lovers, photographers, complete family vacations.

4. "3 Nights 4 Days Delta Odyssey"
   - ID: sundarban-3-nights-4-days-package
   - Starting Price: ₹7,800 per person (Godkhali) or ₹8,500 (Kolkata AC transfer)
   - Duration: 4 Days / 3 Nights
   - Key Spots: Deep wilderness, ancient Netidhopani 400-year-old temple ruins, Dobanki, Sajnekhali, Sudhanyakhali, Burirdabri mud walk and timber watchtower.
   - Ideal For: Serious wildlife photographers, birders, writers, deep slow-travel.

FOOD & DINING EXPERIENCE:
- 100% fresh, locally procured Bengali food cooked fresh onboard our vessels.
- Breakfast: Luchi, Alur Dom, Boiled Eggs / Sweets, Tea / Coffee.
- Lunch: Fine Basmati rice, Sona Moong Dal, Beguni, seasonal vegetable curry, Bhetki fish curry or Prawn/Chingri Malai curry, Chutney, Papad, Rosogolla.
- Evening: Tea/Coffee with hot Pakoras or Muri-Telebhaja.
- Dinner: Rice/Roti, Chicken/Mutton curry, seasonal vegetable, salad, dessert.
- Vegetarian, Jain, and child-friendly meal options are gladly accommodated upon advance request.

SAFETY & BOAT PROTOCOLS:
- Forest Department registered and licensed wooden safari vessels with covered decks and onboard modern toilets.
- Certified ISI-marked life jackets provided for every passenger.
- Certified local naturalists and government-licensed forest guides accompany every safari.
- Strict eco-code: No single-use plastics, no loud sound, no smoking on safari.

CONVERSATION & RESPONSE STYLE:
- ALWAYS generate real-time, thoughtful, helpful answers dynamically. Never repeat rigid templates.
- Be friendly, respectful, and authoritative on Sundarban ecology.
- Format responses cleanly with Markdown: use bullet points and bolding for readability.
- When answering questions about packages, mention the exact package name, duration, and starting price.
- If the user shows interest in booking or dates, warmly offer to assist with booking, or direct them to the booking button or WhatsApp.
- Keep responses concise (around 2 to 4 short paragraphs or bulleted lists) so it's easy to read in a mobile chat window.
`;

let activeGenAI = null;
let activeModel = null;
let activeModelName = 'gemini-3.1-flash-lite';

function initializeGemini() {
  if (!GEMINI_API_KEY || GEMINI_API_KEY.trim() === '') {
    return null;
  }
  if (!activeGenAI) {
    activeGenAI = new GoogleGenerativeAI(GEMINI_API_KEY.trim());
  }
  return activeGenAI;
}

/**
 * Checks whether a Google Gemini API key is configured.
 */
export function isGeminiConfigured() {
  return Boolean(GEMINI_API_KEY && GEMINI_API_KEY.trim().length > 5);
}

/**
 * Identifies if a specific package card should be rendered alongside the AI response.
 */
function detectMatchingPackage(userText, botReply) {
  const combined = (userText + ' ' + botReply).toLowerCase();
  if (combined.includes('1-day') || combined.includes('1 day') || combined.includes('same day') || combined.includes('one day')) {
    return PACKAGES.find(p => p.id === 'sundarban-1-day-tour');
  }
  if (combined.includes('1 night') || combined.includes('2 day') || combined.includes('weekend')) {
    return PACKAGES.find(p => p.id === 'sundarban-1-night-2-days-package');
  }
  if (combined.includes('2 night') || combined.includes('3 day') || combined.includes('dobanki') || combined.includes('flagship')) {
    return PACKAGES.find(p => p.id === 'sundarban-2-nights-3-days-package');
  }
  if (combined.includes('3 night') || combined.includes('4 day') || combined.includes('netidhopani') || combined.includes('odyssey')) {
    return PACKAGES.find(p => p.id === 'sundarban-3-nights-4-days-package');
  }
  return null;
}

/**
 * Sends conversation to Google Gemini API.
 * 100% of responses are generated dynamically via the API.
 */
export async function sendMessageToAssistant({ message, history = [] }) {
  const genAI = initializeGemini();

  if (!genAI) {
    return {
      reply: "Google Gemini API key is not configured. Please add your `VITE_GEMINI_API_KEY` in the `.env` file to enable live AI conversation.",
      packageCard: null,
      suggestions: ["What are your package prices?", "How do I reach from Kolkata?"],
      isGeminiPowered: false
    };
  }

  // Format previous messages for multi-turn chat history
  const chatHistory = history
    .filter(item => item.sender === 'user' || item.sender === 'bot')
    .slice(-8)
    .map(item => ({
      role: item.sender === 'user' ? 'user' : 'model',
      parts: [{ text: item.text }]
    }));

  // Attempt generation across supported models
  let lastError = null;
  const modelsToTry = [activeModelName, ...SUPPORTED_MODELS.filter(m => m !== activeModelName)];

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_INSTRUCTION
      });

      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          maxOutputTokens: 750,
          temperature: 0.75,
        }
      });

      const result = await chat.sendMessage(message);
      const replyText = result.response.text();

      // Remember successful model for subsequent turns
      activeModelName = modelName;

      const matchedPackage = detectMatchingPackage(message, replyText);

      // Context-aware dynamic suggestions
      const suggestions = [];
      const lowerReply = replyText.toLowerCase();
      if (lowerReply.includes('book') || lowerReply.includes('price') || lowerReply.includes('cost') || lowerReply.includes('₹')) {
        suggestions.push("📅 Book This Package", "💬 Chat on WhatsApp");
      }
      if (matchedPackage) {
        suggestions.push(`View ${matchedPackage.title} details`);
      } else {
        suggestions.push("Tell me about Dobanki Canopy Walk", "What meals are provided on the boat?");
      }

      return {
        reply: replyText,
        packageCard: matchedPackage,
        suggestions: suggestions.slice(0, 3),
        isGeminiPowered: true
      };
    } catch (err) {
      console.warn(`Attempt with ${modelName} failed:`, err.message || err);
      lastError = err;
      // Continue to next model in list
    }
  }

  // If all models failed, provide real error details directly rather than pre-text templates
  console.error('All Google Gemini API models failed:', lastError);
  return {
    reply: `⚠️ **Google Gemini API Notice**: Unable to generate a response at this moment (${lastError?.message || 'Connection timeout'}). Please verify your internet connection or check your Google Gemini API quota at [Google AI Studio](https://aistudio.google.com/). You can also message our team directly on WhatsApp!`,
    packageCard: null,
    suggestions: ["Chat on WhatsApp", "View tour packages"],
    isGeminiPowered: false
  };
}
