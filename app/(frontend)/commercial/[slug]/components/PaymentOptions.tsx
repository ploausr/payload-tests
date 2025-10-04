import React from 'react'
import { CommercialProposal } from '@/payload-types'

interface Props {
  data: CommercialProposal['paymentOptions']
}

export default function PaymentOptions({ data }: Props) {
  if (!data?.options || data.options.length === 0) return null

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.options.map((option, index) => (
            <div 
              key={index} 
              className={`relative bg-white/5 rounded-3xl p-10 backdrop-blur-sm border border-white/10 transition-all duration-300 overflow-hidden group hover:-translate-y-3 hover:bg-white/8 hover:shadow-2xl ${
                option.highlight 
                  ? 'bg-indigo-500/15 border-indigo-500/50 scale-105' 
                  : ''
              }`}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {option.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-indigo-400">
                      {option.price}
                    </span>
                    {option.discount && (
                      <span className="text-lg text-red-400 line-through">
                        {option.discount}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {option.description}
                </p>
                
                {option.features && option.features.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-200">
                        <span className="text-green-400 font-bold text-lg">✓</span>
                        {feature.feature}
                      </li>
                    ))}
                  </ul>
                )}
                
                {option.ctaText && (
                  <a 
                    href={option.ctaLink || '#contact'} 
                    className={`block w-full text-center py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/10 ${
                      option.highlight
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-green-500/25'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-indigo-500/25'
                    } text-white hover:-translate-y-1 hover:shadow-2xl`}
                  >
                    {option.ctaText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
