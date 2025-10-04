import React from 'react'
import { CommercialProposal } from '@/payload-types'
import { HeroImageFallback } from './ImageFallback'

interface Props {
  data: CommercialProposal['hero']
}

export default function Hero({ data }: Props) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-pink-500/10 via-transparent to-transparent bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {data.title}
            </h1>
            {data.subtitle && (
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {data.subtitle}
              </p>
            )}
            {data.description && (
              <div className="text-lg text-gray-200 mb-8 leading-relaxed">
                {/* Render rich text content here - simplified for now */}
                <p>Descrição do produto/serviço será exibida aqui</p>
              </div>
            )}
            {data.ctaText && (
              <a 
                href={data.ctaLink || '#contact'} 
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-2xl hover:-translate-y-1 hover:shadow-indigo-500/25"
              >
                {data.ctaText}
              </a>
            )}
          </div>
          <div className="relative">
            <HeroImageFallback
              src={data.image && typeof data.image === 'object' ? data.image.url || undefined : undefined}
              alt={data.image && typeof data.image === 'object' ? data.image.alt || '' : ''}
              className="w-full h-auto rounded-3xl shadow-2xl backdrop-blur-sm border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
