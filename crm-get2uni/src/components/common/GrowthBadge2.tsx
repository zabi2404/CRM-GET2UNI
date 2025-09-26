import { ArrowUpRight } from 'lucide-react'
import React from 'react'

type GrowthBadge2Props = {
value:string    
}

function GrowthBadge2({value}:GrowthBadge2Props) {
  return (
<>
<div className='bg-green-100 rounded-sm  p-1 flex text-[12px] items-center gap-1 text-green-900' >

 <ArrowUpRight  className='size-4'/>
<p>{value}</p>
</div>
</>
)
}

export default GrowthBadge2