import {Card, Button, Typography} from '@mui/material'

import { Program } from './ProgramFilter'

interface ProgramCardProps {
  program:Program
}

function ProgramCard({program}: ProgramCardProps) {
  return (
    <Card className="flex p-[25px] text-left min-h-[218px] max-w-[592px]">
        <div>
            <div>
                <h3 className="text-xl font-semibold">{program.title}</h3>
                 <Typography variant="h6" className="mt-2 text-gray-600">{program.description}</Typography>
            </div>
            <div className="flex mt-4 text-sm ">
                <Typography className='text-azure-50'>Date: {program.date}</Typography>
                <Typography>{program.startTime} - {program.endTime}</Typography>
                <Typography>{program.location}</Typography>
                <Typography>{program.capacity}</Typography>
            </div>
        </div>
        <div>
            <p>${program.cost}</p>
            <Button variant={"secondary" as any}>Add to Cart</Button>
        </div>
    </Card>
  )
}

export default ProgramCard
