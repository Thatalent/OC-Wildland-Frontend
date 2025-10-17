import {Card} from '@mui/material'

export interface Testimony {
  id: string;
  imageUrl: string;
  name: string;
  role: string;
  message: string;
}

interface TestimonyCardProps {
  testimony:Testimony
}

function TestimonyCard({testimony}: TestimonyCardProps) {
  return (
  //  <Card className="p-8" >
  //   <div className="flex items-center ">
  //     <img className="bg-red w-20 h-20 rounded-full mr-16" />
  //   <div>
  //     <h3>Scott Smith</h3>
  //     <p>Fire Equipment Expert</p>
  //   </div>
  //   </div>
  //   <em>"The wildland fire training I received was instrumental in preparing me for the 2023 fire season. The hands-on approach and expert instruction made all the difference when I faced real emergency situations."</em>
  //   </Card>
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
