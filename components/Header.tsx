"use client";

import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { WhatsappIcon } from "./WhatsappIcon";
import { ImageWithLoader } from "./ImageWithLoader";

import { useLanguage } from "@/context/LanguageContext";

function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  if (compact) {
    return (
      <button
        onClick={() => setLanguage(language === "en" ? "de" : "en")}
        aria-label="Toggle Language"
        className="px-2 py-1 text-sm rounded bg-[#C85A32] text-white shadow-sm hover:bg-[#B44B24] transition-all flex items-center justify-center"
      >
        {language === "en" ? "🇬🇧" : "🇩🇪"}
      </button>
    );
  }

  return (
    <div className="flex items-center bg-[#E8E2D9]/70 p-0.5 rounded border border-[#E8E2D9]">
      <button
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={`px-2 py-1 text-xs font-mono font-bold rounded transition-all ${
          language === "en"
            ? "bg-[#C85A32] text-white shadow-sm"
            : "text-[#6E6459] hover:text-[#1C1917]"
        }`}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => setLanguage("de")}
        aria-label="Switch to German"
        className={`px-2 py-1 text-xs font-mono font-bold rounded transition-all ${
          language === "de"
            ? "bg-[#C85A32] text-white shadow-sm"
            : "text-[#6E6459] hover:text-[#1C1917]"
        }`}
      >
        🇩🇪 DE
      </button>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50">
      <div className="relative z-20 bg-[#FAF8F5] border-b border-[#E8E2D9]">
        {/* Top Architectural Measurement Bar */}
        <div className="bg-[#1C1917] text-[#FAF8F5] text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#D4AF37]">
            {t.header.locationTag}
          </span>
          <span className="hidden md:inline text-[#A89F91]">
            {t.header.exclusivityTag}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="tel:+201019996222"
            className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
          >
            <span>+20 10 19996222</span>
          </a>
          <a
            href="mailto:sherien@larimar.homes"
            className="hidden sm:flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#0A8491]" />
            <span>sherien@larimar.homes</span>
          </a>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Stamp */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 bg-[#FAF8F5] border-2 border-[#C85A32] rounded flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
            <ImageWithLoader
              src="/images/sb-logo.png"
              alt="Sherien ElBahey Logo"
              fill
              className="object-contain"
              loaderVariant="small"
            />
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#C85A32] font-semibold flex items-center gap-1">
              {t.header.role}
            </div>
            <h1 className="text-xl font-bold tracking-tight text-[#1C1917]">
              Sherien ElBahey
            </h1>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A443E]">
          <a href="#overview" className="hover:text-[#C85A32] transition-colors flex items-center gap-1">
            {t.header.navOverview}
          </a>
          <a href="#projects" className="hover:text-[#C85A32] transition-colors flex items-center gap-1">
            {t.header.navProjects}
          </a>
          <a href="#offices" className="hover:text-[#C85A32] transition-colors">
            {t.header.navOffices}
          </a>
        </nav>

        {/* Action CTA & Language Switcher */}
        <div className="hidden sm:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="https://wa.me/201019996222?text=Hello%20Sherien,%20I'm%20interested%20in%20Larimar%20Port%20Ghalib%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#25D366] hover:bg-[#1EBE5A] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <WhatsappIcon className="w-4 h-4 fill-white text-[#25D366]" />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu toggle & switcher */}
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher compact />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1917] hover:text-[#C85A32]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hidden sm:block lg:hidden p-2 text-[#1C1917] hover:text-[#C85A32]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full z-10 bg-[#FFFDF9] border-b border-[#E8E2D9] px-6 py-6 shadow-xl transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
          mobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D9]">
            <span className="text-xs font-mono text-[#6E6459] font-bold uppercase">Language / Sprache:</span>
            <LanguageSwitcher compact />
          </div>
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#1C1917] hover:text-[#C85A32]"
          >
            {t.header.navOverview}
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#1C1917] hover:text-[#C85A32]"
          >
            {t.header.mobileNavProjects}
          </a>

          <a
            href="#offices"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#1C1917] hover:text-[#C85A32]"
          >
            {t.header.mobileNavOffices}
          </a>
          <div className="pt-4 border-t border-[#E8E2D9] flex flex-col gap-3">
            <a
              href="https://wa.me/201019996222?text=Hello%20Sherien,%20I'm%20interested%20in%20Larimar%20Port%20Ghalib%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded bg-[#25D366] text-white font-bold text-sm"
            >
              <WhatsappIcon className="w-5 h-5 fill-white text-[#25D366]" /> {t.header.whatsappConsultation}
            </a>
            <a
              href="tel:+201019996222"
              className="flex items-center justify-center gap-2 py-3 rounded bg-[#1C1917] text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" /> {t.header.callUs}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
