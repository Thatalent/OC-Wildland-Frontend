import {Card} from '@mui/material'

import { Testimony } from './TestimonyCarousel'

interface TestimonyCardProps {
  testimony:Testimony
}

function TestimonyCard({testimony}: TestimonyCardProps) {
  return (
    <Card className="p-[25px] text-left min-h-[218px] max-w-[592px]">
  <div className="flex items-center mb-4">
    <img
      className="w-[48px] h-[48px] rounded-full mr-6"
      src={testimony.imageUrl}
      alt={testimony.name}
    />
    <div>
      <h3 className="text-lg font-semibold text-gray-800 m-0">{testimony.name}</h3>
      <p className="text-gray-600 m-0">{testimony.role}</p>
    </div>
  </div>
  <em className="text-gray-700 block">{testimony.message}</em>
</Card>

  )
}

export default TestimonyCard
