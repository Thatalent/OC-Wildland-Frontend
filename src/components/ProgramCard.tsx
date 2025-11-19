import {Card, Button, Typography} from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";

import { Program } from './ProgramFilter'

interface ProgramCardProps {
  program:Program
  assets: Record<string, string>;
}

function ProgramCard({program, assets}: ProgramCardProps) {

    const smallScreen = useMediaQuery("(max-width: 1024px)");


// Format the Start and End Date to match design
   const formatDate = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)

    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' }

    if (
      start.getFullYear() === end.getFullYear() &&
      start.getMonth() === end.getMonth() &&
      start.getDate() === end.getDate()
    ) {
      return start.toLocaleDateString(undefined, options)
    } else if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}-${end.getDate()}, ${end.getFullYear()}`
    } else {
      return `${start.toLocaleDateString(undefined, options)} - ${end.toLocaleDateString(undefined, options)}`
    }
  }

  return (
    <Card className="flex flex-col lg:flex-row p-[25px] text-left min-h-[146px] max-w-[1368px] justify-between">
        <div>
            <div>
                <Typography sx={{ lineHeight: "28px", fontWeight: 600, color: "#F34E1B", fontSize: {lg: "18.75px",
                  md: "18px"
                }, }}>{program.title}</Typography>
                 <Typography sx={{ lineHeight: "24px", fontWeight: 400, color: "#668099", fontSize:{ lg:"15.25px", md:"13.67px"}, }}>{program.description}</Typography>
            </div>
            <div className="flex flex-col lg:flex-row mt-4 text-sm gap-[25px]">
              <div className='flex gap-[4px]'>
                <img className="w-[16px] h-[16px]" src={assets["Date Icon"]} alt="Date Icon"/>
                <Typography noWrap sx={{ lineHeight: "20px", fontWeight: 400, color: "#668099", fontSize: "13.78px" }}>{formatDate(program.startDate, program.endDate)}</Typography>
              </div>
              <div className='flex gap-[4px]'>
                <img className="w-[16px] h-[16px]" src={assets["Time Icon"]} alt="Time Icon"/>
                <Typography noWrap sx={{ lineHeight: "20px", fontWeight: 400, color: "#668099", fontSize: "13.78px" }}>{program.startTime} - {program.endTime}</Typography>
              </div>
              <div className='flex gap-[4px]'>
               <img className="w-[16px] h-[16px]" src={assets["Location Icon"]} alt="Location Icon"/>
                <Typography noWrap sx={{ lineHeight: "20px", fontWeight: 400, color: "#668099", fontSize: "13.78px" }}>{program.location}</Typography>
              </div>
              <div className='flex gap-[4px]'>
                <img className="w-[16px] h-[16px]" src={assets["Capacity Icon"]} alt="Capacity Icon"/>
                <Typography noWrap sx={{ lineHeight: "20px", fontWeight: 400, color: "#668099", fontSize: "13.78px" }}>{program.capacity} spots available</Typography>
              </div>
            </div>
        </div>
        <div className='flex flex-row lg:flex-col justify-between lg:justify-center items-end mt-[20px]'>
            <Typography sx={{ lineHeight: "32px", fontWeight: 700, fontSize: {xs:"19.53px", lg:"23.63px"},color: {
      xs: "#F34E1B",
      lg: "inherit",
    }, }}>${program.cost}</Typography>
            <Button variant={smallScreen ? "gradient" : "secondary" as any} className='whitespace-nowrap'>Add to Cart</Button>
        </div>
    </Card>
  )
}

export default ProgramCard
