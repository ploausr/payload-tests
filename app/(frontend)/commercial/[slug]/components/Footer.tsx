import React from 'react'
import { CommercialProposal } from '@/payload-types'

interface Props {
  data: CommercialProposal['footer']
}

export default function Footer({ data }: Props) {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {data.companyName}
            </h3>
            {data.description && (
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                {data.description}
              </p>
            )}
            
            {/* Contact Info */}
            {data.contact && (
              <div className="space-y-2">
                {data.contact.email && (
                  <div className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href={`mailto:${data.contact.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                )}
                {data.contact.phone && (
                  <div className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a 
                      href={`tel:${data.contact.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {data.contact.phone}
                    </a>
                  </div>
                )}
                {data.contact.address && (
                  <div className="flex items-start text-gray-400">
                    <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{data.contact.address}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Social Links */}
          {data.socialLinks && data.socialLinks.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="space-y-3">
                {data.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon && typeof social.icon === 'object' ? (
                      <img
                        src={social.icon.url || ''}
                        alt={social.icon.alt || social.platform}
                        className="w-5 h-5 mr-3"
                      />
                    ) : (
                      <div className="w-5 h-5 mr-3 bg-gray-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </div>
                    )}
                    <span className="text-sm">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Informações</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>© 2024 {data.companyName}</p>
              <p>Todos os direitos reservados</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-500 text-sm">
            <p>Desenvolvido com ❤️ para nossos clientes</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
