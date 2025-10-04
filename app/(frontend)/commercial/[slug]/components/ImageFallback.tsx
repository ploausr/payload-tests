import React from 'react'
import Image from 'next/image'

interface ImageFallbackProps {
  src?: string
  alt?: string
  width: number
  height: number
  className?: string
  fallbackText?: string
  fallbackIcon?: React.ReactNode
}

export default function ImageFallback({ 
  src, 
  alt = '', 
  width, 
  height, 
  className = '',
  fallbackText,
  fallbackIcon
}: ImageFallbackProps) {
  if (src && typeof src === 'string' && src.trim() !== '') {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    )
  }

  return (
    <div 
      className={`bg-gray-800/50 border border-gray-700/50 rounded-2xl flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {fallbackIcon ? (
        fallbackIcon
      ) : (
        <div className="text-center text-gray-400">
          <svg 
            className="w-12 h-12 mx-auto mb-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          {fallbackText && (
            <p className="text-sm font-medium">{fallbackText}</p>
          )}
        </div>
      )}
    </div>
  )
}

// Componentes específicos para diferentes tipos de imagens
export function HeroImageFallback({ src, alt, className = '' }: { src?: string; alt?: string; className?: string }) {
  return (
    <ImageFallback
      src={src}
      alt={alt}
      width={600}
      height={400}
      className={className}
      fallbackText="Imagem do Hero"
      fallbackIcon={
        <div className="text-center text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p className="text-sm font-medium">Imagem Principal</p>
        </div>
      }
    />
  )
}

export function PartnerLogoFallback({ src, alt, className = '' }: { src?: string; alt?: string; className?: string }) {
  return (
    <ImageFallback
      src={src}
      alt={alt}
      width={120}
      height={80}
      className={className}
      fallbackText="Logo Parceiro"
      fallbackIcon={
        <div className="text-center text-gray-400">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <p className="text-xs font-medium">Logo</p>
        </div>
      }
    />
  )
}

export function BenefitIconFallback({ src, alt, className = '' }: { src?: string; alt?: string; className?: string }) {
  return (
    <ImageFallback
      src={src}
      alt={alt}
      width={48}
      height={48}
      className={className}
      fallbackIcon={
        <div className="text-center text-gray-400">
          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      }
    />
  )
}

export function ValuePropImageFallback({ src, alt, className = '' }: { src?: string; alt?: string; className?: string }) {
  return (
    <ImageFallback
      src={src}
      alt={alt}
      width={500}
      height={400}
      className={className}
      fallbackText="Imagem de Valor"
      fallbackIcon={
        <div className="text-center text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="text-sm font-medium">Proposta de Valor</p>
        </div>
      }
    />
  )
}
