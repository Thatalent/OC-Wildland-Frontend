import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

import ProgramCard from './ProgramCard'

export interface Program {
  id: string
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  location: string
  capacity: string
  cost: string
}

interface ProgramFilterProps {
    programVariant: "cpr" | "wildfire";
}

function ProgramFilter({programVariant}: ProgramFilterProps) {
  const [programs, setPrograms] = useState<Program[]>([])
//   const [index, setIndex] = useState(0)

// Load Programs from Backend on mount
  useEffect(() => {
    fetch("http://localhost:3000/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            programs {
              id
              title
              description
              date
              startTime
              endTime
              location
              capacity
              cost
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data?.programs){
        setPrograms(data.data?.programs)}
        else {
            console.error("No programs found", data)
        }
      })
      .catch((err) => console.error("Error fetching programs:", err))
  }, [])

  return (
    <Box className="text-center mt-12">
      <Typography variant="h4">All CPR & First Aid Classes</Typography>
      <div>
        <select>
            <option>All Locations</option>
            <option>Rancho Cordova</option>
            <option>Fair Oaks</option>
        </select>
        {programVariant === "cpr" ? (
            <select>
            <option>All Courses</option>
            <option>CPR Courses</option>
            <option>First Aid Courses</option>
        </select>
    ) : (
         <select>
            <option>All Levels</option>
            <option>Level 130</option>
            <option>Level 180</option>
            <option>Level 190</option>
         </select>
    )}
        <select>
            <option>All Future Classes</option>
            <option>Next 30 Days</option>
            <option>Next 60 Days</option>
            <option>Next Year</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {programs.length > 0 ? (
          programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            No classes available at the moment.
          </Typography>
        )}
      </div>
    </Box>
  )
}

export default ProgramFilter


// POTENTIAL ISSUES
// - Capacity needs to be an integer, add "spots available on card itself"
// - Date format could be changed in Admin UI to ask for a month, day and year all separately (Unless there is a way to clarify the format)
// - Figure out how to put images on the website the right way (S3?? - ask jonathon)
