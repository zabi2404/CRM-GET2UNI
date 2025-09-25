
import { Button } from '../ui/button'
import { Plus, User } from 'lucide-react'

function StudentOverviewCard() {
  return (
  <>
    <div className="border rounded-md p-4  h-full  ">
                        <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                <div className="bg-primary p-2 w-fit rounded-sm text-white"><User /></div>
                            <h1 className="font-semibold">Total Agents</h1>
                                </div>
                                <div >
                                    <Button variant={"outline"}>
                                    <Plus />
                                        Add
                                    </Button>
                                </div>
                        </div>

                        <div className="flex items-center justify-between">
                           
                                <div className='flex flex-col h-full jutfify-between '>
                                <h1 className='font-bold text-[48px]'>145</h1>
                                <div className="flex">
                                    <p>25%</p>
                                    <p>from Last Month</p>
                                </div>
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