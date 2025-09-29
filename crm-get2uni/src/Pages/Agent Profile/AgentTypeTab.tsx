import { Input } from '@/components/ui/input'
import AddStudentHeader from '../AddStudent/AddStudentHeader'
import { Button } from '@/components/ui/button'

function AgentTypeTab() {
    return (
        <>

            <div className="shadow-lg rounded-md flex flex-col gap-12 p-4 w-full">
                <AddStudentHeader
                    title="Agent Type"
                    heading="Basic Information"

                />

                <div>
                    <form action="">

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4">

                                <div className="grid gap-4 w-full">
                                    <label className=" " htmlFor="FirstName">Name</label>
                                    <Input id="FirstName"
                                        className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                               <Button className='w-fit'>
                                Commission Model
                               </Button>

                            </div>
                            
                            <div className='flex gap-4 justify-end'>
                                <Button className='w-fit' >
                                Edit
                               </Button>
                               <Button className='w-fit' disabled>
                                Save
                               </Button>
                            </div>
                            
                            </div>

                    </form>
                </div>


            </div>
        </>
    )
}

export default AgentTypeTab