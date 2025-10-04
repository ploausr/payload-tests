import React from 'react'
import { CommercialProposal } from '@/payload-types'
import { ValuePropImageFallback } from './ImageFallback'

interface Props {
  data: CommercialProposal['valueProposition']
}

export default function ValueProposition({ data }: Props) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-pink-500/10 via-transparent to-transparent bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {data.subtitle}
              </p>
            )}
            {data.description && (
              <div className="text-lg text-gray-200 leading-relaxed bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                {/* Render rich text content here - simplified for now */}
                <p>Descrição detalhada da proposta de valor será exibida aqui</p>
              </div>
            )}
          </div>
          <div className="relative max-w-lg w-full">
            <ValuePropImageFallback
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
