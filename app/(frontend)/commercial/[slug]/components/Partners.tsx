import React from 'react'
import { CommercialProposal } from '@/payload-types'
import { PartnerLogoFallback } from './ImageFallback'

interface Props {
  data: CommercialProposal['partners']
}

export default function Partners({ data }: Props) {
  if (!data?.logos || data.logos.length === 0) return null

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
          {data.logos.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 text-center hover:-translate-y-2 hover:bg-white/8 hover:shadow-2xl"
            >
              <PartnerLogoFallback
                src={partner.logo && typeof partner.logo === 'object' ? partner.logo.url || undefined : undefined}
                alt={partner.logo && typeof partner.logo === 'object' ? partner.logo.alt || partner.name : partner.name}
                className="w-30 h-20 object-contain mb-4 brightness-75 transition-all duration-300 hover:brightness-100"
              />
              <span className="text-gray-300 text-sm font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
