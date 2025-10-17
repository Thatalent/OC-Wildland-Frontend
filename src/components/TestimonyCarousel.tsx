import { Box, Typography } from '@mui/material'
import { useState } from 'react'

import TestimonyCard, { Testimony } from './TestimonyCard'

const testimonies: Testimony[] = [
  {
    id: '1',
    imageUrl: '/Overlay.svg',
    name: 'Scott Smith',
    role: 'Fire Equipment Expert',
    message:
      'The wildland fire training I received was instrumental in preparing me for the 2023 fire season.',
  },
  {
    id: '2',
    imageUrl: '/Overlay.svg',
    name: 'Maria Lopez',
    role: 'Community Volunteer',
    message:
      "Our entire staff completed OC Wildland Fire's CPR training — highly recommend.",
  },
  {
    id: '3',
    imageUrl: '/Overlay.svg',
    name: 'Derek Chen',
    role: 'Wildfire Analyst',
    message:
      'The data tools from OC Wildland have revolutionized how we monitor fire risk conditions.',
  },
  {
    id: '4',
    imageUrl: '/Overlay.svg',
    name: 'Jessica Nguyen',
    role: 'Safety Coordinator',
    message:
      'Hands-on instruction gave me the confidence to handle real wildfire scenarios.',
  },
]

function TestimonyCarousel() {
  const [index, setIndex] = useState(0)
  const visible = testimonies.slice(index, index + 2)
  const next = () =>
    setIndex((prev) => (prev + 2 >= testimonies.length ? 0 : prev + 2))
  const prev = () =>
    setIndex((prev) => (prev - 2 < 0 ? testimonies.length - 2 : prev - 2))

  return (
    <Box className="text-center mt-12">
      <Typography variant="h4" >
        Success Stories
      </Typography>
      <Typography variant="body1" className="mb-8 text-gray-600">
        Real impact from our training programs
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 mt-10 max-w-5xl mx-auto">
        {visible.map((t) => (
          <div key={t.id} className="w-full md:w-[45%]">
            <TestimonyCard testimony={t} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </Box>
  )
}

export default TestimonyCarousel
