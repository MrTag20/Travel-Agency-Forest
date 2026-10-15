import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Sparkles, 
  Send, 
  X, 
  RotateCcw, 
  MessageSquare, 
  Calendar, 
  Clock, 
  Phone,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';
import { INITIAL_SUGGESTIONS } from '../data/aiAssistantKnowledge';
import { sendMessageToAssistant, isGeminiConfigured } from '../services/geminiService';

export default function AiChatAssistant({ onOpenBooking, isOpen, onClose, onToggle }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Hello and welcome to **SM Bengal Travel**! 🌿\n\nI am **Bono**, your AI Delta Naturalist & Travel Specialist. Whether you want to explore the **Dobanki Canopy Walk**, find the right safari for your budget, or book an upcoming trip, I am here to help.\n\nHow may I assist you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: INITIAL_SUGGESTIONS
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom whenever messages update or typing starts
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowTooltip(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen]);

  const handleSendMessage = async (customText = null) => {
    const textToSend = typeof customText === 'string' ? customText : inputText;
    if (!textToSend || !textToSend.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await sendMessageToAssistant({
        message: textToSend,
        history: [...messages, userMessage]
      });

      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        packageCard: response.packageCard,
        suggestions: response.suggestions || [],
        selectedPackageId: response.selectedPackageId,
        isGeminiPowered: response.isGeminiPowered
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error getting AI reply:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "I am having a moment of delta static! 🌊 Please feel free to ask again or reach our team directly via WhatsApp.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestions: ["Chat on WhatsApp", "View tour packages"]
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: 'bot',
        text: `Chat reset! Let's start fresh. What would you like to know about our **Sundarban tour packages**, schedules, or booking? 🐅`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: INITIAL_SUGGESTIONS
      }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to format basic markdown (bold, lists, paragraphs)
  const renderFormattedText = (rawText) => {
    const paragraphs = rawText.split('\n\n');
    return paragraphs.map((para, pIdx) => {
      const lines = para.split('\n');
      return (
        <div key={pIdx} className={pIdx === paragraphs.length - 1 ? 'mb-0' : 'mb-2.5'}>
          {lines.map((line, lIdx) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
              <div key={lIdx} className="leading-relaxed">
                {parts.map((part, partIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={partIdx} className="text-primary font-bold">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Widget (Raised on mobile to stay clear of Netlify badge & WhatsApp button) */}
      <div className="fixed bottom-32 right-4 sm:bottom-24 sm:right-6 z-40 flex flex-col items-end gap-2">
        {/* Subtle Welcome Tooltip Banner */}
        {showTooltip && !isOpen && (
          <div className="bg-white text-primary px-3.5 py-2.5 rounded-2xl shadow-xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 border border-accent/30 max-w-[280px] animate-fade-in">
            <span className="text-accent shrink-0">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="flex-grow leading-tight">
              Need help choosing a Sundarban tour? Ask our AI!
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              aria-label="Dismiss AI tooltip"
              className="text-primary/50 hover:text-primary transition-colors cursor-pointer p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Circular Floating Trigger Button */}
        <button
          onClick={onToggle}
          aria-label="Open Ask AI Assistant"
          className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-[#1f2720] text-ivory border border-accent/60 shadow-[0_8px_24px_rgba(46,58,47,0.35)] hover:shadow-[0_12px_28px_rgba(201,111,79,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer outline-none"
        >
          {/* Pulsing Green Online Indicator */}
          <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366] inline-block" />
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-bold tracking-wide">
            Ask AI
          </span>

          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white">
              1
            </span>
          )}
        </button>
      </div>

      {/* Main AI Chat Window Modal / Drawer (Lifted with pb-16 so Netlify badge never covers input/send button) */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Sundarban AI Chat Assistant"
          className="fixed inset-0 z-50 flex items-end justify-center sm:justify-end p-2 pb-16 sm:p-6 bg-black/40 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div
            className="w-full sm:max-w-[430px] h-[78vh] sm:h-[620px] max-h-[84vh] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#d9c9b2]/70 animate-scale-up"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-[#1f2720] text-white flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent">
                  <Bot className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-primary" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm text-ivory">
                      Bono AI Assistant
                    </h4>
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-accent/25 text-accent tracking-wider">
                      {isGeminiConfigured() ? 'Gemini AI' : 'Naturalist'}
                    </span>
                  </div>
                  <div className="text-xs text-white/70">
                    {isGeminiConfigured() ? 'Google Gemini Powered • Online' : 'SM Bengal Travel • Online & Instant'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={onClose}
                  title="Close Assistant"
                  aria-label="Close Assistant"
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-accent/40 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-grow overflow-y-auto p-4 sm:p-5 flex flex-col gap-4 bg-gradient-to-b from-ivory to-[#f3efe6]">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col w-full ${isBot ? 'items-start' : 'items-end'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[90%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Bot Avatar */}
                      {isBot && (
                        <div className="w-7 h-7 rounded-full bg-primary text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                      )}

                      {/* Bubble */}
                      <div
                        className={`p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed shadow-sm ${
                          isBot
                            ? 'bg-white text-primary rounded-2xl rounded-tl-sm border border-sand/60'
                            : 'bg-accent text-white rounded-2xl rounded-tr-sm shadow-md'
                        }`}
                      >
                        {renderFormattedText(msg.text)}

                        {/* Interactive Package Card */}
                        {msg.packageCard && (
                          <div className="mt-3 p-3 bg-ivory rounded-xl border border-accent/30 shadow-sm">
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="text-[10px] font-bold text-accent uppercase">
                                {msg.packageCard.badge || 'Recommended'}
                              </span>
                              <span className="text-xs text-primary/60 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {msg.packageCard.duration}
                              </span>
                            </div>

                            <h5 className="font-bold text-sm text-primary mb-1">
                              {msg.packageCard.title}
                            </h5>

                            <div className="flex items-baseline gap-1 mb-3">
                              <span className="text-base font-extrabold text-primary">
                                {msg.packageCard.startingPrice}
                              </span>
                              <span className="text-xs text-primary/60">/ guest</span>
                            </div>

                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  onOpenBooking(msg.packageCard.id);
                                  onClose();
                                }}
                                className="flex-1 py-1.5 px-3 rounded-lg bg-accent text-white text-xs font-bold shadow hover:bg-[#b35d3e] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Book This Tour</span>
                              </button>

                              <Link
                                to={`/${msg.packageCard.slug}`}
                                onClick={onClose}
                                className="py-1.5 px-3 rounded-lg bg-white border border-primary/20 text-primary text-xs font-semibold hover:bg-sand/20 transition-colors flex items-center gap-1"
                              >
                                <span>Itinerary</span>
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        )}

                        <div className={`text-[10px] mt-1.5 text-right ${isBot ? 'text-primary/50' : 'text-white/80'}`}>
                          {msg.timestamp}
                        </div>
                      </div>
                    </div>

                    {/* Quick Suggestion Chips */}
                    {isBot && msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5 pl-9 max-w-full">
                        {msg.suggestions.map((suggestion, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => {
                              if (suggestion.toLowerCase().includes('open booking') || suggestion.toLowerCase().includes('book now')) {
                                onOpenBooking(msg.selectedPackageId || 'sundarban-2-nights-3-days-package');
                                onClose();
                              } else if (suggestion.toLowerCase().includes('whatsapp')) {
                                const waMsg = encodeURIComponent(
                                  `Hello SM Bengal Travel! I'd like to book a Sundarban tour package. Please share available dates and pricing.`
                                );
                                window.open(`https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=${waMsg}`, '_blank');
                              } else {
                                handleSendMessage(suggestion);
                              }
                            }}
                            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-ivory text-primary hover:text-accent border border-sand/80 hover:border-accent shadow-xs transition-all duration-200 cursor-pointer text-left"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 pl-1">
                  <div className="w-6 h-6 rounded-full bg-primary text-accent flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-sm border border-sand/60 shadow-xs flex items-center gap-1.5 text-xs text-primary/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    <span>Bono is writing...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Dock Bar */}
            <div className="px-4 py-2 bg-white border-t border-sand/40 flex items-center justify-between text-xs text-primary/70 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onOpenBooking();
                    onClose();
                  }}
                  className="font-bold text-accent hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Booking Form</span>
                </button>
                <span>•</span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumberDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#25D366] hover:underline flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="font-semibold text-primary hover:text-accent flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-3.5 bg-white border-t border-sand/50 flex items-center gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about packages, prices, food, tiger safaris..."
                className="flex-grow px-4 py-2.5 rounded-full border border-sand/80 focus:border-accent bg-ivory text-xs sm:text-sm text-primary outline-none transition-colors"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                aria-label="Send message"
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 transition-all ${
                  inputText.trim() 
                    ? 'bg-accent hover:bg-[#b35d3e] hover:scale-105 active:scale-95 cursor-pointer shadow-sm' 
                    : 'bg-sand/60 cursor-not-allowed opacity-60'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
