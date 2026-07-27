"use client";

import React, { useState } from "react";
import { ImageWithLoader } from "./ImageWithLoader";

import { WhatsappIcon } from "./WhatsappIcon";

import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const [selectedSuiteUnit, setSelectedSuiteUnit] = useState<string>("Studio");
  const { t } = useLanguage();

  const SUITES_UNITS = [
    { key: "Studio", name: t.projects.units.studio.name, indoorArea: "55 m²", outdoorArea: "—", totalArea: "55 m²", description: t.projects.units.studio.description },
    { key: "1-Bedroom", name: t.projects.units.oneBed.name, indoorArea: "64 m²", outdoorArea: "—", totalArea: "64 m²", description: t.projects.units.oneBed.description },
    { key: "Garden Studio", name: t.projects.units.gardenStudio.name, indoorArea: "55 m²", outdoorArea: "24 m² Garden", totalArea: "79 m² Total", description: t.projects.units.gardenStudio.description },
    { key: "Roof Studio", name: t.projects.units.roofStudio.name, indoorArea: "55 m²", outdoorArea: "50 m² Rooftop", totalArea: "105 m² Total", description: t.projects.units.roofStudio.description },
    { key: "Garden 1-Bed", name: t.projects.units.gardenOneBed.name, indoorArea: "64 m²", outdoorArea: "24 m² Garden", totalArea: "88 m² Total", description: t.projects.units.gardenOneBed.description },
    { key: "Roof 1-Bed", name: t.projects.units.roofOneBed.name, indoorArea: "64 m²", outdoorArea: "50 m² Rooftop", totalArea: "114 m² Total", description: t.projects.units.roofOneBed.description },
  ];

  return (
    <section id="projects" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#1C1917] text-[#D4AF37] font-mono text-xs font-bold uppercase tracking-widest">
            {t.projects.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1C1917] tracking-tight">
            {t.projects.title}
          </h2>

        </div>

        {/* PROJECT 1: LARIMAR VILLAS */}
        <div className="arch-card rounded-2xl overflow-hidden border-2 border-[#C85A32]/30 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Side (Left 6 cols) */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px]">
              <ImageWithLoader
                src="/images/larimar-villas.jpg"
                alt="Larimar Villas Port Ghalib"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-[#1C1917]/90 text-white font-mono text-xs px-3 py-1.5 rounded backdrop-blur border border-white/20">
                {t.projects.villasBadge}
              </div>
            </div>

            {/* Content Side (Right 6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="text-xs font-mono text-[#0A8491] font-bold uppercase tracking-wider mb-1">
                  {t.projects.villasTag}
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
                  {t.projects.villasTitle}
                </h3>
                <p className="text-base text-[#4A443E] leading-relaxed mb-6">
                  {t.projects.villasDesc1} <strong className="text-[#C85A32]">{t.projects.villasDescVillas}</strong> {t.projects.villasDescAnd} <strong className="text-[#0A8491]">{t.projects.villasDescIVillas}</strong>{t.projects.villasDesc2} <strong className="text-[#1C1917]">{t.projects.villasDescGreen}</strong>{t.projects.villasDesc3}
                </p>

                {/* Key Features Bullet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-[#1C1917] mb-6">
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>{t.projects.bulletVillas}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>{t.projects.bulletIVillas}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>{t.projects.bulletSerenity}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>{t.projects.bulletClubhouse}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>{t.projects.bulletAccess}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>{t.projects.bulletSecured}</span>
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap gap-4 items-center justify-end">
                <a
                  href="https://wa.me/201019996222?text=Hello%20Sherien,%20I'm%20interested%20in%20Larimar%20Villas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#C85A32] hover:bg-[#B44B24] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  {t.projects.btnInquireVillas}
                </a>
              </div>

            </div>

          </div>
        </div>


        {/* PROJECT 2: LARIMAR SUITES */}
        <div id="suites-specs" className="arch-card rounded-2xl overflow-hidden border-2 border-[#0A8491]/30 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Content Side (Left 6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6 order-2 lg:order-1">
              
              <div>
                <div className="text-xs font-mono text-[#C85A32] font-bold uppercase tracking-wider mb-1">
                  {t.projects.suitesTag}
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
                  {t.projects.suitesTitle}
                </h3>
                <p className="text-base text-[#4A443E] leading-relaxed mb-6">
                  {t.projects.suitesDesc1} <strong className="text-[#C85A32]">{t.projects.suitesDescHighlight}</strong>{t.projects.suitesDesc2}
                </p>

                {/* Unit Types Table / Selector */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono font-bold text-[#1C1917] uppercase tracking-wider flex items-center justify-between">
                    <span>{t.projects.turnkeyHeader}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SUITES_UNITS.map((unit) => {
                      const isSelected = selectedSuiteUnit === unit.key;
                      return (
                        <button
                          key={unit.key}
                          onClick={() => setSelectedSuiteUnit(unit.key)}
                          className={`p-3 rounded border text-left transition-all ${
                            isSelected
                              ? "bg-[#0A8491] text-white border-[#0A8491] shadow-md"
                              : "bg-[#FAF8F5] text-[#1C1917] border-[#E8E2D9] hover:border-[#0A8491]"
                          }`}
                        >
                          <div className="text-xs font-bold font-mono">{unit.name}</div>
                          <div className={`text-xs font-mono mt-0.5 ${isSelected ? "text-white/90" : "text-[#C85A32]"}`}>
                            {unit.totalArea}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Selected Unit Breakdown Box */}
                  {selectedSuiteUnit && (
                    <div className="mt-4 p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E2D9]">
                      {(() => {
                        const unitObj = SUITES_UNITS.find((u) => u.key === selectedSuiteUnit);
                        if (!unitObj) return null;
                        return (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[#1C1917] text-sm">{unitObj.name} {t.projects.specLabel}</span>
                              <span className="px-2 py-0.5 bg-[#0A8491]/10 text-[#0A8491] font-mono text-xs font-bold rounded">
                                {unitObj.totalArea}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E6459] pt-1">
                              <div>{t.projects.indoorLiving} <strong className="text-[#1C1917]">{unitObj.indoorArea}</strong></div>
                              <div>{t.projects.outdoorLiving} <strong className="text-[#C85A32]">{unitObj.outdoorArea}</strong></div>
                            </div>
                            <p className="text-xs text-[#4A443E] pt-1 border-t border-[#E8E2D9]">{unitObj.description}</p>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap gap-4 items-center justify-end">
                <a
                  href="https://wa.me/201019996222?text=Hello%20Sherien,%20I'm%20interested%20in%20Larimar%20Suites."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#0A8491] hover:bg-[#086F7A] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  {t.projects.btnInquireSuites}
                </a>
              </div>

            </div>

            {/* Image Side (Right 6 cols) */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px] order-1 lg:order-2">
              <ImageWithLoader
                src="/images/larimar-suites.jpg"
                alt="Larimar Suites Port Ghalib"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-[#1C1917]/90 text-white font-mono text-xs px-3 py-1.5 rounded backdrop-blur border border-white/20">
                {t.projects.suitesBadge}
              </div>
            </div>

          </div>
        </div>


        {/* PROJECT 3: LARIMAR 3 */}
        <div className="arch-card rounded-2xl overflow-hidden border-2 border-[#1C1917]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Side (Left 6 cols) */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px]">
              <ImageWithLoader
                src="/images/larimar-3.jpg"
                alt="Larimar 3 Port Ghalib"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-[#FFFDF9]/90 text-[#1C1917] font-mono text-xs px-3 py-1.5 rounded backdrop-blur border border-[#1C1917]/20 font-bold">
                {t.projects.l3Badge}
              </div>
            </div>

            {/* Content Side (Right 6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="text-xs font-mono text-[#C85A32] font-bold uppercase tracking-wider mb-1">
                  {t.projects.l3Tag}
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
                  {t.projects.l3Title}
                </h3>
                <p className="text-base text-[#4A443E] leading-relaxed mb-6">
                  {t.projects.l3Desc1} <strong className="text-[#1C1917]">{t.projects.l3DescArea}</strong> {t.projects.l3Desc2}
                </p>

                {/* Typologies List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono font-bold text-[#1C1917] uppercase tracking-wider">
                    {t.projects.typologiesHeader}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                      <div className="font-bold text-[#1C1917]">{t.projects.typeIVillas}</div>
                      <div className="text-xs text-[#6E6459]">{t.projects.typeIVillasSub}</div>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                      <div className="font-bold text-[#C85A32]">{t.projects.typeCorner}</div>
                      <div className="text-xs text-[#6E6459]">{t.projects.typeCornerSub}</div>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                      <div className="font-bold text-[#0A8491]">{t.projects.typeMid}</div>
                      <div className="text-xs text-[#6E6459]">{t.projects.typeMidSub}</div>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                      <div className="font-bold text-[#1C1917]">{t.projects.typeVillas3Bed}</div>
                      <div className="text-xs text-[#6E6459]">{t.projects.typeVillas3BedSub}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap gap-4 items-center justify-end">
                <a
                  href="https://wa.me/201019996222?text=Hello%20Sherien,%20I'm%20interested%20in%20Larimar%203."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#1C1917] hover:bg-[#36322E] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  {t.projects.btnInquireL3}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
