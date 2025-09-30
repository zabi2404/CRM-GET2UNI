import { CircleArrowUp } from 'lucide-react'

function GrowthBadge({ value }: { value: string }) {
    return (
        <div className="flex text-[12px] items-center gap-1">
            <div className='flex items-center '>
                <CircleArrowUp className='size-5 '
                    style={{
                        rotate: '45deg',
                        color: '#28A745'
                    }}
                />
                <p className='text-body'
                style={{
                    color: '#28A745'
                }}
                >{value}</p>
            </div>
            <p className='text-body text-secondary-foreground'>from last month</p>
        </div>
    )
}

export default GrowthBadge

