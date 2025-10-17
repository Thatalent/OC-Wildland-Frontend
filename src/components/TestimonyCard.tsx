import {Card} from '@mui/material'

import { Testimony } from './TestimonyCarousel'

interface TestimonyCardProps {
  testimony:Testimony
}

function TestimonyCard({testimony}: TestimonyCardProps) {
  return (
     <Card className="p-8">
      <div className="flex items-center mb-4">
        <img
          className="w-20 h-20 rounded-full mr-6"
          src={testimony.imageUrl}
          alt={testimony.name}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{testimony.name}</h3>
          <p className="text-gray-600">{testimony.role}</p>
        </div>
      </div>
      <em className="text-gray-700 block">"{testimony.message}"</em>
    </Card>
  )
}

export default TestimonyCard
