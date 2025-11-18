import { useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'

import TestimonyCard from './TestimonyCard'

export interface Testimony {
  id: string
  name: string
  role?: string
  message?: string
  imageUrl?: string
}

function TestimonyCarousel() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([])
  const [index, setIndex] = useState(0)

  // Only show 2 cards and increment index by 2 (Can change if it just needs to be one)
  const visible = testimonies.slice(index, index + 2)
  const next = () =>
    setIndex((prev) => (prev + 2 >= testimonies.length ? 0 : prev + 2))
  const prev = () =>
    setIndex((prev) => (prev - 2 < 0 ? testimonies.length - 2 : prev - 2))

  // Automatically increment the carousel
  useEffect(() => {
    const interval = setInterval(next, 7000)
    return () => clearInterval(interval)
  }, [testimonies])

  // Load Testimonies from Backend on mount
  useEffect(() => {
    fetch("http://localhost:3000/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            testimonies {
              id
              name
              role
              message
              imageUrl
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTestimonies(data.data.testimonies)
      })
      .catch((err) => console.error("Error fetching testimonies:", err))
  }, [])

  return (
    <Box className="text-center mt-12">
      <Typography variant="h4" >
        Success Stories
      </Typography>
      <Typography variant="body1" className="mb-8 text-gray-600">
        Real impact from our training programs
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 mt-10 mt-12">
        {visible.length > 0 ? visible.map((data) => (
          <div key={data.id} className="w-full sm:w-[592px]">
            <TestimonyCard testimony={data} />
          </div>
        )) :
          <Typography>There are no testimonies yet.</Typography>}
      </div>

      <div className="flex justify-center gap-4 mt-6">
<<<<<<< HEAD
        <Button
        variant={"primary" as any}
=======
        <Button variant="gradient"
>>>>>>> main
          onClick={prev}
        >
          Prev
        </Button>
<<<<<<< HEAD
        <Button
        variant={"primary" as any}
=======
        <Button variant="gradient"
>>>>>>> main
          onClick={next}
        >
          Next
        </Button>
      </div>
    </Box>
  )
}

export default TestimonyCarousel
