import React from 'react'
import Line from './Line'


type Props = {
    title: string,
    count : number
    color: string
}

function SmallCard({title,count,color}:Props) {
    return (
        <div className="flex">
            <div className='mr-2'><Line 
            color={color}
            /></div>
            <div className="flex flex-col justify-between">
                <h1 className="text-[36px] font-500 text-textBlack">{count}</h1>
                <li className='text-[12px]' style={{color: `${color}`}}>{title}</li>
            </div>
        </div>
    )
}

export default SmallCard