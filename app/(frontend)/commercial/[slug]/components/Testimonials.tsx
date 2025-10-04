import React from 'react'
import { CommercialProposal } from '@/payload-types'
import ImageFallback from './ImageFallback'

interface Props {
  data: CommercialProposal['testimonials']
}

export default function Testimonials({ data }: Props) {
  if (!data?.items || data.items.length === 0) return null

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/8 hover:shadow-2xl"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={`w-5 h-5 ${
                      starIndex < (testimonial.rating || 5)
                        ? 'text-yellow-400'
                        : 'text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <ImageFallback
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    fallbackIcon={
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                    }
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  {testimonial.company && (
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
