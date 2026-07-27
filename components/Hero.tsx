"use client";

import React from "react";
import { ImageWithLoader } from "./ImageWithLoader";
import { Key, Award, Phone, Mail, ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const PortraitCard = () => {
  const { t } = useLanguage();
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Outer structural brick motif frame */}
      <div className="arch-card p-3 sm:p-4 rounded-xl border-2 border-[#C85A32]/40 shadow-2xl relative">
        
        {/* Portrait Image */}
        <div className="relative h-[440px] sm:h-[480px] w-full rounded-lg overflow-hidden border border-[#E8E2D9]">
          <ImageWithLoader
            src="/images/portrait.jpeg"
            alt={t.hero.portraitAlt}
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
            priority
          />
          
          {/* Overlay text at bottom of portrait */}
          <div className="absolute inset-x-0 bottom-0 pt-20 pb-4 px-4 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/50 to-transparent z-10">
            <div className="text-xl font-bold font-sans tracking-tight text-white drop-shadow-md">{t.hero.bioName}</div>
            <div className="text-xs font-mono text-[#E6C594] drop-shadow-md">{t.hero.portraitSpecialist}</div>
          </div>
        </div>

        {/* Contact Card Footnote */}
        <div className="mt-3 pt-3 border-t border-[#E8E2D9] grid grid-cols-2 gap-2 text-xs">
          <a
            href="tel:+201005532941"
            className="flex items-center gap-1.5 p-2 rounded bg-[#FAF8F5] hover:bg-[#FFFDF9] border border-[#E8E2D9] font-mono text-[#1C1917] font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
            +20 100 553 2941
          </a>
          <a
            href="mailto:msharawi@larimar-resort.com"
            className="flex items-center gap-1.5 p-2 rounded bg-[#FAF8F5] hover:bg-[#FFFDF9] border border-[#E8E2D9] font-mono text-[#1C1917] font-semibold truncate"
          >
            <Mail className="w-3.5 h-3.5 text-[#0A8491]" />
            <span className="truncate">msharawi@larimar-resort.com</span>
          </a>
        </div>

      </div>

      {/* Decorative Corner Architectural Blueprint Lines */}
      <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-[#C85A32] pointer-events-none" />
      <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-[#0A8491] pointer-events-none" />
    </div>
  );
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="overview" className="relative pt-8 pb-16 lg:py-20 overflow-hidden bg-blueprint-grid">
      {/* Decorative architectural background element */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C85A32]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0A8491]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Architectural Drafting Tag */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-[#FFFDF9] border border-[#C85A32]/30 text-xs font-mono text-[#C85A32] shadow-sm mb-6">
          <span>{t.hero.specId}</span>
          <span className="text-[#A89F91]">|</span>
          <span className="font-semibold text-[#1C1917]">{t.hero.exclusiveAdvisory}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#0A8491] uppercase font-bold">
                {t.hero.subCategory}
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917] tracking-tight leading-[1.1]">
                {t.hero.titlePrefix}{" "}
                <span className="text-[#C85A32] relative inline-block">
                  Larimar
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C85A32]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Mobile Portrait Card (Visible only on smaller screens, placed before Bio) */}
            <div className="block lg:hidden w-full pt-4 pb-2">
              <PortraitCard />
            </div>

            {/* Official Bio Statement */}
            <div className="arch-card p-6 sm:p-7 rounded-lg border-l-4 border-l-[#C85A32] shadow-md relative">
              <p className="text-base sm:text-lg text-[#36322E] leading-relaxed font-normal">
                {t.hero.bioText1}
              </p>
              <p className="text-sm sm:text-base text-[#575048] leading-relaxed mt-4 font-normal">
                {t.hero.bioText2}
              </p>

              {/* Architectural Brick Motif Stamp */}
              <div className="mt-5 pt-4 border-t border-[#E8E2D9] flex flex-wrap gap-4 items-center justify-between text-xs font-mono text-[#6E6459]">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#C85A32]" />
                  <span>{t.hero.badgeKey}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0A8491]" />
                  <span>{t.hero.badgeRepresentative}</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Badges & Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[#C85A32] hover:bg-[#B44B24] text-white text-sm font-bold tracking-wide uppercase shadow-lg hover:shadow-xl transition-all"
              >
                <span>{t.hero.btnExplore}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[#FFFDF9] border-2 border-[#1C1917] hover:bg-[#1C1917] hover:text-white text-[#1C1917] text-sm font-bold tracking-wide uppercase transition-all shadow"
              >
                <Phone className="w-4 h-4 text-[#C85A32]" />
                {t.hero.btnDirectConsultation}
              </a>
            </div>

          </div>

          {/* Right Column: Sherien ElBahey Portrait Frame with Architectural Elevation Card */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <PortraitCard />
          </div>

        </div>

      </div>
    </section>
  );
}
