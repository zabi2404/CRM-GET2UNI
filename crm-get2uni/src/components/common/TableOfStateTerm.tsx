import { Trash2 } from 'lucide-react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

function TableOfStateTerm() {
  return (
    <>
    
    <div className="border rounded-md p-4">
            <div>
              <p>Table of terms starts</p>
              <div className="flex gap-3">
                <div className="grid  gap-1 w-full">
                  <Label htmlFor="username-1">Course Name</Label>
                  <Input id="name-1 " type="text" name="name" />
                </div>
                <div className="grid  gap-1 w-full">
                  <Label htmlFor="username-1">Tuition Fee</Label>
                  <Input id="name-1" type="text" name="name" />
                </div>
              </div>
            </div>

            <div>
              <p>
                Start Dates
              </p>
            <div className="flex gap-3">
                <div className="flex gap-4 w-full">
                <label className="text-end my-auto" htmlFor="FirstName">Fall 1</label>
                <Input id="FirstName"
                  className="max-w-[200px] "
                  type="text" required />
              </div>
              <div className="flex gap-4 w-full">
                <label className="my-auto" htmlFor="FirstName">Fall 2</label>
                <Input id="FirstName"
                  className="max-w-[200px] "
                  type="text" required />
              </div>
              <div className="flex gap-4 w-full">
                <label className="text-nowrap my-auto" htmlFor="FirstName">Spring 1</label>
                <Input id="FirstName"
                  className="max-w-[200px] "
                  type="text" required />
              </div>
              <div className="flex gap-4 w-full">
                <label className="text-nowrap  my-auto" htmlFor="FirstName">Spring 2</label>
                <Input id="FirstName"
                  className="max-w-[200px] "
                  type="text" required />
              </div>
            </div>

            </div>

              <div className='mt-4 flex flex-col gap-4 '>
              <p>
                Semester Start Dates
              </p>
              

            <div className="flex gap-3">

                <div className="flex gap-4 w-full">
                <label className="text-end my-auto" htmlFor="FirstName">Semster 1</label>
                <Input id="FirstName"
                  className="max-w-[200px] "
                  type="text" required />
                  <Button className='bg-primary cursor-pointer text-white flex justify-center items-center  rounded-md'>

                  <Trash2  className=''/>
                  </Button>
              </div> 



              
            
            </div>

            </div>

          </div>
    </>
  )
}

export default TableOfStateTerm