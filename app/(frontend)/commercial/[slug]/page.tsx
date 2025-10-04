
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import React from 'react'

import config from '@/payload.config'
import { CommercialProposal } from '@/payload-types'
import {
  Hero,
  Partners,
  ValueProposition,
  Benefits,
  PaymentOptions,
  Testimonials,
  Footer
} from './components'


export default async function CommercialProposalPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const proposals = await payload.find({
    collection: 'commercial-proposals',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: 'published',
          },
        },
      ],
    },
  })

  const proposal = proposals.docs[0] as CommercialProposal

  if (!proposal) {
    notFound()
  }

  return (
    <div>
      <Hero data={proposal.hero} />
      <Partners data={proposal.partners} />
      <ValueProposition data={proposal.valueProposition} />
      <Benefits data={proposal.benefits} />
      <PaymentOptions data={proposal.paymentOptions} />
      <Testimonials data={proposal.testimonials} />
      <Footer data={proposal.footer} />
    </div>
  )
}

export async function generateStaticParams() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const proposals = await payload.find({
    collection: 'commercial-proposals',
    where: {
      status: {
        equals: 'published',
      },
    },
    limit: 100,
  })

  return proposals.docs.map((proposal) => ({
    slug: proposal.slug,
  }))
}
