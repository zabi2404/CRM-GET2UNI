
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import GrowthBadge from './GrowthBadge'


type StudentOverviewCardProps = {
    title: string
    count: number
    Icon: React.ComponentType
    path: string
}

function StudentOverviewCard({ title, count, Icon, path }: StudentOverviewCardProps) {

    return (
        <>
            <div className="border rounded-md   h-full bg-card 
            xsm:p-2
            sm:p-4

            ">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-2 w-fit rounded-sm text-white">
                            <Icon />
                        </div>
                        <h1 className="font-medium xsm:text-body sm:text-[16px]">{title}</h1>
                    </div>
                    <div >
                        <Button variant={"outline"}
                            to={path}
                            className='hover:border hover:border-primary hover:bg-secondary hover:text-foreground'
                        >
                            <Plus />
                            Add
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-between">

                    <div className='flex flex-col h-full jutfify-between '>
                        <h1 className='font-bold text-heading'>{count}</h1>

                        <GrowthBadge
                            value="12%"
                        />
                    </div>

                    <div className="flex justify-end ">
                        <img src="/download (1).png"
                            className="w-[48px] h-[78px]"
                            alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default StudentOverviewCard