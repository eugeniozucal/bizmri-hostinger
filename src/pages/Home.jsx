import React from 'react'
import { Hook } from '../components/Hero'
import { AICure } from '../components/AICure'
import { HowItWorks } from '../components/HowItWorks'
import { Benefits } from '../components/Benefits'
import { Credibility } from '../components/Credibility'
import { FinalCTA } from '../components/FinalCTA'

export function Home({ onOpenModal }) {
  return (
    <main>
      <Hook />
      <AICure onOpenModal={onOpenModal} />
      <HowItWorks />
      <Benefits />
      <Credibility />
      <FinalCTA onOpenModal={onOpenModal} />
    </main>
  )
}
