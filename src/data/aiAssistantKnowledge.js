// AI Knowledge Base & Conversational Engine for SM Bengal Travel
import { COMPANY_INFO, PACKAGES, FAQS, EXPERIENCES, DESTINATIONS } from './travelData';

export const INITIAL_SUGGESTIONS = [
  "🧭 Recommend the best package for me",
  "💰 What are your package prices?",
  "🐅 What are the chances of seeing a tiger?",
  "🍲 What meals are provided on the boat?",
  "📍 Where are the Kolkata pickup points?",
  "📅 Help me plan & book a safari"
];

// Contextual knowledge for the assistant
export const AI_KNOWLEDGE = {
  company: COMPANY_INFO,
  packages: PACKAGES,
  faqs: FAQS,
  experiences: EXPERIENCES,
  destinations: DESTINATIONS
};

// Generates response based on visitor message and history
export function processUserMessage(userText, currentFlowState = null) {
  const text = userText.toLowerCase().trim();

  // 1. Interactive Booking Flow Handlers
  if (currentFlowState && currentFlowState.step) {
    if (currentFlowState.step === 'ask_duration') {
      if (text.includes('1 day') || text.includes('same day') || text.includes('one day')) {
        const pkg = PACKAGES.find(p => p.id === 'sundarban-1-day-tour');
        return {
          reply: `Great choice! For a **1-Day Express Tour**, here are the details:
- **Price**: Starting from **₹1,499** (Godkhali) or **₹1,999** (Kolkata Pickup with AC transport).
- **Highlights**: Sajnekhali Watchtower, Mangrove Museum, Bono Bibi Temple, and delicious fresh Bengali meals cooked onboard.

Would you like to start from **Kolkata** or **Godkhali Ghat**?`,
          nextStep: 'ask_origin_1day',
          selectedPackageId: pkg.id,
          packageCard: pkg,
          suggestions: ["From Kolkata (Pickup included)", "From Godkhali (Direct boat)", "Book this package now"]
        };
      } else if (text.includes('2') || text.includes('1 night') || text.includes('weekend')) {
        const pkg = PACKAGES.find(p => p.id === 'sundarban-1-night-2-days-package');
        return {
          reply: `The **1 Night 2 Days Package** is our most popular weekend escape!
- **Price**: Starting from **₹3,499** (Godkhali) or **₹3,999** (Kolkata AC transfer).
- **Stay**: Riverside eco-resort in Pakhiralay/Dayapur with private attached baths.
- **Highlights**: Sajnekhali & Sudhanyakhali Watchtowers, evening live Baul folk music, and 5 full meals.

Where would you like to depart from?`,
          nextStep: 'ask_origin_2day',
          selectedPackageId: pkg.id,
          packageCard: pkg,
          suggestions: ["Depart from Kolkata", "Board at Godkhali", "Book this package now"]
        };
      } else if (text.includes('3') || text.includes('2 night') || text.includes('deep')) {
        const pkg = PACKAGES.find(p => p.id === 'sundarban-2-nights-3-days-package');
        return {
          reply: `Our flagship **2 Nights 3 Days Deep Mangrove Expedition** offers the ultimate wilderness experience!
- **Price**: Starting from **₹5,200** (Godkhali) or **₹5,800** (Kolkata AC transfer).
- **Unique Highlight**: Includes the famous **Dobanki Canopy Walkway** (walk 20 ft above ground!), Panchamukhani 5-river confluence, and deep core buffer waterways where wildlife sightings are highest.

Would you like AC or Non-AC resort accommodation?`,
          nextStep: 'ask_room_3day',
          selectedPackageId: pkg.id,
          packageCard: pkg,
          suggestions: ["AC Resort Room", "Non-AC Standard Room", "Book this package now"]
        };
      } else if (text.includes('4') || text.includes('3 night') || text.includes('bird')) {
        const pkg = PACKAGES.find(p => p.id === 'sundarban-3-nights-4-days-package');
        return {
          reply: `The **3 Nights 4 Days Delta Odyssey** is crafted for photography, birdwatching, and deep tranquility!
- **Price**: Starting from **₹7,800** (Godkhali) / **₹8,500** (Kolkata).
- **Highlights**: Remote Netidhopani 400-year-old temple ruins, dawn birding safaris for rare kingfishers, and Dobanki Canopy Walkway.

Ready to check dates and reserve?`,
          nextStep: 'ready_to_book',
          selectedPackageId: pkg.id,
          packageCard: pkg,
          suggestions: ["Open booking form", "Talk to reservation team on WhatsApp", "Ask about meal menu"]
        };
      }
    }

    if (currentFlowState.step.startsWith('ask_origin') || currentFlowState.step.startsWith('ask_room')) {
      const pkg = PACKAGES.find(p => p.id === currentFlowState.selectedPackageId) || PACKAGES[1];
      return {
        reply: `Awesome! I have noted your preference for the **${pkg.title}**. 

I can open our quick booking form for you with this package pre-selected, or connect you directly with our reservation team on WhatsApp!`,
        nextStep: 'ready_to_book',
        selectedPackageId: pkg.id,
        packageCard: pkg,
        action: 'open_booking',
        suggestions: ["Open Booking Form Now", "Enquire on WhatsApp", "Tell me about cancellation policy"]
      };
    }
  }

  // 2. Booking / Reservation Intent
  if (
    text.includes('book') || 
    text.includes('reservation') || 
    text.includes('reserve') || 
    text.includes('how to book') || 
    text.includes('plan & book') ||
    text.includes('plan and book')
  ) {
    return {
      reply: `I'd love to help you book your Sundarban journey! 🌿

Booking with **SM Bengal Travel** is quick and hassle-free:
1. Choose your preferred package duration.
2. Select your pickup point (Kolkata AC transfer or Godkhali Ghat).
3. We confirm your permits, boat, and sanitized riverside resort.

Which tour duration fits your schedule best?`,
      nextStep: 'ask_duration',
      suggestions: [
        "1 Day Express (₹1,499+)", 
        "1 Night 2 Days (₹3,499+)", 
        "2 Nights 3 Days (₹5,200+)", 
        "3 Nights 4 Days (₹7,800+)"
      ]
    };
  }

  // 3. Price / Cost / Tariff Intent
  if (
    text.includes('price') || 
    text.includes('cost') || 
    text.includes('tariff') || 
    text.includes('rate') || 
    text.includes('how much') ||
    text.includes('charge')
  ) {
    return {
      reply: `Here is our transparent, all-inclusive tour tariff for **SM Bengal Travel**:

• **Sundarban 1 Day Express**: From **₹1,499 / guest** (Godkhali) | **₹1,999** (Kolkata AC car)
• **1 Night 2 Days Weekend Trip**: From **₹3,499 / guest** (Godkhali) | **₹3,999** (Kolkata)
• **2 Nights 3 Days Deep Expedition**: From **₹5,200 / guest** (Godkhali) | **₹5,800** (Kolkata)
• **3 Nights 4 Days Delta Odyssey**: From **₹7,800 / guest** (Godkhali) | **₹8,500** (Kolkata)

*All packages include safari boat hire, certified forest guides, Forest Department permits, and 100% freshly cooked Bengali meals.*

Which package would you like to explore?`,
      suggestions: [
        "Details on 1N/2D Weekend", 
        "Details on 2N/3D Expedition", 
        "What is included in the price?", 
        "Help me book a package"
      ]
    };
  }

  // 4. Package Specific Queries: 1 Day
  if (text.includes('1 day') || text.includes('one day') || text.includes('day trip') || text.includes('same day')) {
    const pkg = PACKAGES.find(p => p.id === 'sundarban-1-day-tour');
    return {
      reply: `The **${pkg.title}** is tailor-made for travelers with limited time who want a rich delta experience in a single day.

• **Cost**: Starting at ${pkg.startingPrice} per person.
• **Schedule**: Kolkata pickup at 5:30 AM (or Godkhali boarding at 8:30 AM). Return to Kolkata by ~8:30 PM.
• **What you see**: Sajnekhali Watchtower, Mangrove Interpretation Museum, Bono Bibi Temple, and boat safari through tidal creeks.
• **Food**: Morning tea, Luchi & Alur Dom breakfast, warm Bengali lunch (Fish/Chicken), and evening snacks.`,
      packageCard: pkg,
      selectedPackageId: pkg.id,
      suggestions: ["Book 1 Day Express", "Is 1 day enough?", "Compare with 1N/2D package"]
    };
  }

  // 5. Package Specific Queries: 1 Night 2 Days
  if (text.includes('1 night') || text.includes('2 day') || text.includes('weekend') || text.includes('two day')) {
    const pkg = PACKAGES.find(p => p.id === 'sundarban-1-night-2-days-package');
    return {
      reply: `The **${pkg.title}** is our most popular weekend tour!

• **Duration**: 1 Night / 2 Days.
• **Cost**: Starting at ${pkg.startingPrice} per person.
• **Stay**: Riverside eco-resort or island cottage with attached modern washroom.
• **Key Highlights**: Sajnekhali & Sudhanyakhali Watchtowers, river sunset cruise, evening Baul folk music, and village heritage walk.
• **Meals**: 2 Breakfasts, 2 Lunches, 1 Dinner, evening tea & hot snacks.`,
      packageCard: pkg,
      selectedPackageId: pkg.id,
      suggestions: ["Book 1N/2D Package", "What room types are there?", "Compare with 2N/3D Package"]
    };
  }

  // 6. Package Specific Queries: 2 Nights 3 Days
  if (text.includes('2 night') || text.includes('3 day') || text.includes('deep mangrove') || text.includes('flagship') || text.includes('three day')) {
    const pkg = PACKAGES.find(p => p.id === 'sundarban-2-nights-3-days-package');
    return {
      reply: `The **${pkg.title}** is our most recommended safari for nature lovers and families!

• **Duration**: 2 Nights / 3 Days.
• **Cost**: Starting at ${pkg.startingPrice} per person.
• **The Dobanki Highlight**: Includes the famous **Dobanki 500-meter Canopy Walkway** raised 20 feet above the mangrove canopy!
• **Watchtowers**: Sudhanyakhali, Sajnekhali, and Dobanki.
• **Confluence**: Cruise through Panchamukhani (where 5 mighty rivers meet).
• **Wildlife Odds**: Highest boat safari hours in core and buffer waterways.`,
      packageCard: pkg,
      selectedPackageId: pkg.id,
      suggestions: ["Book 2N/3D Expedition", "Tell me about Dobanki Walkway", "Tiger sighting chances"]
    };
  }

  // 7. Package Specific Queries: 3 Nights 4 Days
  if (text.includes('3 night') || text.includes('4 day') || text.includes('four day') || text.includes('odyssey') || text.includes('photography')) {
    const pkg = PACKAGES.find(p => p.id === 'sundarban-3-nights-4-days-package');
    return {
      reply: `The **${pkg.title}** is our premium slow-travel safari, ideal for wildlife photographers and avid birdwatchers!

• **Duration**: 3 Nights / 4 Days.
• **Cost**: Starting at ${pkg.startingPrice} per person.
• **Exclusive Destinations**: Netidhopani 400-year-old temple ruins, remote birding creeks, Dobanki Canopy Walkway, Sudhanyakhali, and Sajnekhali.
• **Birding**: Dawn & dusk boat positioning for 8 kingfisher species, White-bellied Sea Eagles, and Masked Finfoot.`,
      packageCard: pkg,
      selectedPackageId: pkg.id,
      suggestions: ["Book 3N/4D Odyssey", "Bird species to spot", "Kolkata pickup options"]
    };
  }

  // 8. Tiger Sightings
  if (text.includes('tiger') || text.includes('royal bengal') || text.includes('pugmark') || text.includes('sightings') || text.includes('animal')) {
    return {
      reply: `🐅 **Royal Bengal Tigers in the Sundarban:**

The Sundarban delta is home to wild, free-roaming tigers that are expert swimmers in saline tidal channels. 

**Honest Naturalist Fact:** 
Because the mangrove forest is dense and tigers move silently, no ethical operator can guarantee a sighting. However, our multi-day safaris (**2N/3D** and **3N/4D**) spend extended hours inside high-activity zones like **Sudhanyakhali, Dobanki, Pirkhali, and Gazikhali**, maximizing your chances!

You will also frequently observe:
• Estuarine saltwater crocodiles basking on mudbanks
• Spotted chital deer herds
• Water monitor lizards and wild boars
• Playful smooth-coated otters and dolphins`,
      suggestions: [
        "View 2N/3D Deep Expedition", 
        "Best season for tiger sightings", 
        "Book a wildlife safari"
      ]
    };
  }

  // 9. Food / Meals / Cuisine
  if (text.includes('food') || text.includes('meal') || text.includes('lunch') || text.includes('dinner') || text.includes('breakfast') || text.includes('veg') || text.includes('jain') || text.includes('fish') || text.includes('chicken') || text.includes('menu')) {
    return {
      reply: `🍲 **Fresh Delta Culinary Experience on Boat & Resort:**

One of the highlights guests rave about is our freshly prepared Bengali food:
• **Breakfast**: Piping hot Luchi, Alur Dom, boiled eggs/sweets, and morning Darjeeling tea.
• **Lunch (Boat/Resort)**: Fragrant Rice, Dal, Begun Bhaja/Jhuri Alu Bhaja, seasonal delta vegetables, **Katla or Bhetki fish curry**, fresh salad, Papad, and Chutney.
• **Evening**: Tea/coffee with freshly fried Onion Pakoras or local Singara/biscuits.
• **Dinner**: Chicken Kasha/curry (or paneer for veg), hot rotis or rice, mixed vegetable sabzi, and sweets.

*Pure Vegetarian, Jain, and special dietary meals are cheerfully catered with advance notice!*`,
      suggestions: ["Are meals included in tariff?", "Book tour with meal plan", "Ask about resort stay"]
    };
  }

  // 10. Kolkata Pickup & Travel Route
  if (text.includes('pickup') || text.includes('kolkata') || text.includes('how to reach') || text.includes('reach') || text.includes('distance') || text.includes('route') || text.includes('transport') || text.includes('car') || text.includes('train')) {
    return {
      reply: `🚗 **How to Reach & Pickup Information:**

• **From Kolkata by AC Vehicle**: We arrange comfortable AC transport with pickups from central spots:
  - **Science City Main Gate** (5:30 AM / 7:30 AM)
  - **Indian Museum (Park Street)**
  - **Ruby General Hospital / EM Bypass**
  - Drive time to Godkhali Ghat is approx **2.5 to 3 hours** (85-95 km) via the scenic Basanti Highway.

• **Direct at Godkhali Ghat**: If driving your own vehicle, secure parking is available at Godkhali harbor where our captain boards you directly.

• **By Train**: Local suburban train from Sealdah to Canning (1h 15m), followed by a 45-minute shared auto/bus to Godkhali.`,
      suggestions: ["Kolkata to Kolkata Package", "Godkhali Boarding Package", "Help me book transport"]
    };
  }

  // 11. Best Time to Visit & Weather
  if (text.includes('best time') || text.includes('weather') || text.includes('season') || text.includes('month') || text.includes('monsoon') || text.includes('winter')) {
    return {
      reply: `🗓️ **Best Time to Visit the Sundarbans:**

• **Peak Winter (October to March)**: ⭐ *Highly Recommended!*
  - Mild, pleasant weather (15°C to 26°C).
  - Animals and giant crocodiles love basking on sunny mudbanks.
  - Thousands of migratory birds arrive.

• **Monsoon (July to September)**:
  - Lush, dramatic emerald greenery, thundering rain clouds, and quiet waterways. Recommended for nature purists and rain lovers.

• **Summer (April to June)**:
  - Warmer days, but water safaris remain breezy with fewer tourists.`,
      suggestions: ["Recommend a package for this season", "Check upcoming dates", "Book a winter safari"]
    };
  }

  // 12. Safety, Family, Seniors & Children
  if (text.includes('safe') || text.includes('family') || text.includes('senior') || text.includes('child') || text.includes('elderly') || text.includes('kids') || text.includes('toilet') || text.includes('washroom')) {
    return {
      reply: `🛡️ **Safety & Family Comfort at SM Bengal Travel:**

Our tours are 100% safe and loved by families with children and senior citizens:
• **Vessels**: Equipped with certified life jackets, sturdy guard rails, shaded sundecks, and clean Western-style onboard washrooms.
• **Guides**: Every boat is accompanied by an experienced, government-certified Forest Department naturalist.
• **Resorts**: Sanitized, enclosed cottages with 24/7 staff and backup power.
• **Medical Care**: Comprehensive onboard first aid and tie-ups with local delta medical officers for emergency doctor-on-call.

We recommend wearing comfortable flat walking shoes for smooth embarkation!`,
      suggestions: ["Best package for families", "Book 2N/3D family tour", "Contact team on WhatsApp"]
    };
  }

  // 13. Cancellation & Refund Policy
  if (text.includes('cancel') || text.includes('refund') || text.includes('policy')) {
    return {
      reply: `📋 **Cancellation & Refund Summary:**

• **7+ Days Before Departure**: Partial refund after deducting forest permit clearance and advance reservation charges.
• **3 to 6 Days Before Departure**: 50% refund on the tour value.
• **Under 48 Hours / No-show**: Non-refundable due to non-transferable Forest Department boat and passenger permits.
• **Extreme Weather / Govt Red Alert**: Full date rescheduling or refund as per safety directives.

We keep our terms clear and transparent with zero hidden conditions!`,
      suggestions: ["View full Refund Policy", "How to book safely", "Talk to reservation specialist"]
    };
  }

  // 14. What to carry / pack
  if (text.includes('carry') || text.includes('pack') || text.includes('clothes') || text.includes('id') || text.includes('documents')) {
    return {
      reply: `🎒 **Essential Packing Checklist for Sundarban:**

1. **Government Photo ID** (Aadhaar Card, Voter ID, or Passport) — *Mandatory for Forest Department permits!*
2. **Clothing**: Comfortable light cottons. Earthy tones (khaki, olive green, brown, beige) are best so as not to startle wildlife.
3. **Sun Protection**: Wide-brim hat, sunglasses, and sunscreen.
4. **Gear**: Binoculars (highly recommended!), camera with zoom lens, and a power bank.
5. **Cash**: Island ATMs have limited connectivity; carry sufficient cash for personal expenses.
6. **Medications**: Personal prescription medicines and mosquito repellent cream.`,
      suggestions: ["Help me plan & book", "Package details", "Kolkata pickup points"]
    };
  }

  // 15. Recommendation / Advice Intent
  if (text.includes('recommend') || text.includes('which package') || text.includes('suggest') || text.includes('best package') || text.includes('choose')) {
    return {
      reply: `Here is our honest naturalist recommendation based on your travel style:

🌟 **For a Quick Weekend Break**: Choose **1 Night 2 Days** (₹3,499+). Covers Sajnekhali, Sudhanyakhali, evening Baul music, and village walk.
🏆 **For the Complete Wildlife Experience**: Choose **2 Nights 3 Days** (₹5,200+). Includes the sensational **Dobanki Canopy Walkway**, Panchamukhani 5 rivers, and maximum safari hours.
⚡ **For Tight Schedules**: Choose **1 Day Express** (₹1,499+). Same-day return from Kolkata with meals on the boat.
📸 **For Birders & Photographers**: Choose **3 Nights 4 Days** (₹7,800+). Exclusive Netidhopani ruins & dawn estuaries.

Which of these matches your travel plans?`,
      suggestions: [
        "I want the 1N/2D Weekend", 
        "I want the 2N/3D Expedition", 
        "I want 1 Day Express", 
        "Help me book right now"
      ]
    };
  }

  // 16. Fallback / Default Conversational Response
  return {
    reply: `Hello! I am your **Sundarban AI Travel Assistant** at **SM Bengal Travel** 🌿

I'm here to help you plan the perfect mangrove wilderness tour:
• **Packages & Pricing** (1 Day, 2 Days, 3 Days, or 4 Days)
• **Wildlife & Safaris** (Dobanki Canopy Walk, watchtowers & tiger tracking)
• **Logistics** (Kolkata pickups, Godkhali ghat, food & eco-resorts)
• **Instant Bookings** & reservations

What would you like to know or explore?`,
    suggestions: [
      "🧭 Recommend the best package",
      "💰 Check all tour tariffs",
      "🐅 Chances of seeing tigers",
      "📅 Help me book a tour"
    ]
  };
}
