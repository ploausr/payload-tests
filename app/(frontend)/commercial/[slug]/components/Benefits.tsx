import React from 'react'
import { CommercialProposal } from '@/payload-types'
import { BenefitIconFallback } from './ImageFallback'

interface Props {
  data: CommercialProposal['benefits']
}

export default function Benefits({ data }: Props) {
  if (!data?.items || data.items.length === 0) return null

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/8 via-transparent to-transparent bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-pink-500/8 via-transparent to-transparent bg-[radial-gradient(circle_at_70%_30%,rgba(255,119,198,0.08)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((benefit, index) => (
            <div 
              key={index} 
              className={`relative bg-white/5 rounded-3xl p-10 backdrop-blur-sm border border-white/10 transition-all duration-300 text-center overflow-hidden group hover:-translate-y-3 hover:bg-white/8 hover:shadow-2xl ${
                benefit.highlight 
                  ? 'bg-indigo-500/10 border-indigo-500/30' 
                  : ''
              }`}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <BenefitIconFallback
                    alt={benefit.icon && typeof benefit.icon === 'object' ? benefit.icon.alt : benefit.title}
                    className="w-12 h-12 mx-auto brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
