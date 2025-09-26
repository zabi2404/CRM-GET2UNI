import { CircleArrowUp } from 'lucide-react'
import React from 'react'

function GrowthBadge({ value }: { value: string }) {
    return (
        <div className="flex text-[12px] items-center gap-1">
            <div className='flex items-center '>
                <CircleArrowUp className='size-5 '
                    style={{
                        rotate: '45deg',
                        color: 'green'
                    }}
                />
                <p>{value}</p>
            </div>
            <p>from Last Month</p>
        </div>
    )
}

export default GrowthBadge

