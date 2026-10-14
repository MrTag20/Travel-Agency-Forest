# Travel-Agency-Forest

A modern, responsive Sundarban travel agency and eco-tourism platform built with React, Vite, and Tailwind CSS.

## 🌿 Brand Color Palette
The platform strictly follows the custom forest-inspired color system:
- **Primary:** `#2E3A2F` (Deep Forest Olive Pine)
- **Secondary:** `#6B7F5B` (Sage Mangrove Green)
- **Tertiary:** `#D9C9B2` (Warm Sand / Linen)
- **Accent:** `#C96F4F` (Terracotta Sun Clay)
- **Background:** `#F8F6EE` (Warm Ivory Off-White)

## ✨ Features
- **Cinematic Video Hero:** Full-bleed loop video with icon-based audio mute/unmute control.
- **Curated Tour Packages:** 1-Day, 2D/1N, 3D/2N, and 4D/3N mangrove expeditions with detailed itineraries.
- **Bono AI Travel Guide:** Intelligent, interactive chat assistant helping visitors select packages and answer questions.
- **Direct WhatsApp & Online Booking:** Instant booking modal and WhatsApp inquiry routing.
- **Rich Experience & Destination Guides:** Watchtower guides, wildlife notes, packing checklists, and seasonal travel advice.
- **100% Fully Responsive:** Tailored layout for mobile, tablet, and desktop viewports.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## 🤖 Google Gemini AI Setup
To connect Bono AI Assistant to live Google Gemini AI:
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Add your key inside `.env`:
   ```env
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```
4. Restart your development server (`npm run dev`). Bono will automatically switch to live Google Gemini 1.5 Flash with full Sundarban domain context!
*(Note: If no API key is set, Bono automatically and seamlessly uses the built-in delta knowledge base without errors.)*

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v3 + PostCSS + Autoprefixer
- **Routing:** React Router v7
- **Icons:** Lucide React
