import { useState, useEffect } from 'react'
import { Box, Typography, Button, Menu, MenuItem} from '@mui/material'

import ProgramCard from './ProgramCard'

export interface Program {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  location: string
  capacity: string
  cost: string
  variant: string
}

interface ProgramFilterProps {
    programVariant: "cpr" | "wildfire";
    assets: Record<string, string>;
}

function ProgramFilter({programVariant, assets}: ProgramFilterProps) {
  const [programs, setPrograms] = useState<Program[]>([])
  const [amount, setAmount] = useState(5)

  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [levelsFilter, setLevelsFilter] = useState("All Levels")
  const [dateFilter, setDateFilter] = useState("All Future Classes");


function calculateDays(date: Date, days: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}


  const filteredPrograms = programs.filter(program => program.variant === programVariant).filter((program) => {
    if (locationFilter !== "All Locations" && program.location !== locationFilter)
      return false;

    if (programVariant === "cpr") {
      if (courseFilter !== "All Courses" && !program.title.includes(courseFilter))
        return false
    }

    if (programVariant === "wildfire") {
      if (levelsFilter !== "All Levels" && !program.title.includes(levelsFilter))
        return false
    }

    const today = new Date();
    const start = new Date(program.startDate)

    switch (dateFilter) {
      case "Next 30 Days":
      if (start > calculateDays(today, 30)) return false;
      break;
      case "Next 60 Days":
        if (start > calculateDays(today, 60)) return false
        break
      case "Next Year":
        if(start > calculateDays(today, 365)) return false
        break
        default:
          break
    }
    return true
  })

  // Show More Cards on the page
const showMoreCards = () => {
  setAmount(amount + 5)
}

// Reset Amount of Cards seen when changing the filter
useEffect(() => {
  setAmount(5);
}, [locationFilter, courseFilter, dateFilter]);

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
              startDate
              endDate
              startTime
              endTime
              location
              capacity
              cost
              variant
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
    <Box className="text-left mt-12 flex flex-col gap-[24px]">
      {programVariant === "cpr" ? (
        <Typography sx={{lineHeight: "40px", fontWeight: 700, color: "#1F262E", fontSize: "36px" }} >All CPR & First Aid Classes</Typography>
    ) : (
        <Typography sx={{lineHeight: "40px", fontWeight: 700, color: "#1F262E", fontSize: "36px" }}>All Wildland Fire Classes</Typography>
    )}
    <div className="flex gap-[8px] md:hidden">
      <Button variant={"tertiary" as any}>List View</Button>
      <Button variant={"tertiary" as any}>Grid View</Button>
    </div>
      <div className='flex gap-[8px] lg:gap-8 mb-[6px] flex-wrap md:flex-nowrap w-full'>
        <select
        className="w-full md:w-[192px] h-[40px] px-[13px] py-[9px] rounded-[6px] border border-[#E1E7EF] bg-white"
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
            >
            <option>All Locations</option>
            <option>Rancho Cordova</option>
            <option>Fair Oaks</option>
        </select>
        {programVariant === "cpr" ? (
            <select className="w-full md:w-[192px] h-[40px] px-[13px] py-[9px] rounded-[6px] border border-[#E1E7EF] bg-white"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            >
            <option>All Courses</option>
            <option>CPR Courses</option>
            <option>First Aid Courses</option>
        </select>
    ) : (
         <select className="w-full md:w-[192px] h-[40px] px-[13px] py-[9px] rounded-[6px] border border-[#E1E7EF] bg-white"
            value={levelsFilter}
            onChange={(e) => setLevelsFilter(e.target.value)}
            >
            <option>All Levels</option>
            <option>Level 130</option>
            <option>Level 180</option>
            <option>Level 190</option>
         </select>
    )}
        <select className="w-full md:w-[192px] h-[40px] px-[13px] py-[9px] rounded-[6px] border border-[#E1E7EF] bg-white"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            >
            <option>All Future Classes</option>
            <option>Next 30 Days</option>
            <option>Next 60 Days</option>
            <option>Next Year</option>
        </select>
      </div>
      <div className="flex flex-col gap-[16px]">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.slice(0, amount).map((program) => (
            <ProgramCard key={program.id} program={program} assets={assets}/>
          ))

        ) : (
          <Typography variant="h3">
            No classes available at the moment.
          </Typography>
        )}
      </div>
{programs.length > 5 ? (
  <Button variant={"tertiary" as any} className="w-[102px] self-center whitespace-nowrap border-1 border-[#E1E7EF]"
  onClick={()=>{showMoreCards()}}>Show More</Button>
):(
  <></>
)}
    </Box>
  )
}

export default ProgramFilter
