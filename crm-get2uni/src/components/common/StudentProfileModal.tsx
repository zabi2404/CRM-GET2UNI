import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { StudentProfileViewTable } from "../Tables/StudentProfileViewTable"

export function StudentProfileModal() {
  return (
    <Dialog >
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className=" max-w-[1200px]  max-h-full min-h-[600px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Student Profile</DialogTitle>

          </DialogHeader>
          <div className="rounded-sm border p-4 grid  gap-4
          xl:grid-cols-4 grid-rows-2
          ">

            <div>
              <p>
                Student Full Name
              </p>
              <p>
                Zohaib Ali
              </p>
            </div>

            <div>
              <p>
                Type
              </p>
              <p>
                Change_of_Status
              </p>
            </div>

            <div>
              <p>
                Student's Email

              </p>
              <p>
                student542@get2uni.com
              </p>
            </div>

            <div>
              <p>
                University

              </p>
              <p>
                Oxford University
              </p>
            </div>

            <div>
              <p>
                Course Tuition fees


              </p>
              <p>
                $500.0
              </p>
            </div>
            <div>
              <p>
                Agent / Ambassador’s Email

              </p>
              <p>
                agent1@get2uni.com


              </p>
            </div>
            <div>
              <p>
                Payment Term
              </p>
              <p>
                Per Semester
              </p>
            </div>
            <div>
              <p>
                Percentage/USD


              </p>
              <p>
                Percentage
              </p>
            </div>
            <div>
              <p>
                Course

              </p>
              <p>
                Computer Science
              </p>
            </div>

          </div>
 <div className="rounded-sm border p-4 grid  gap-4">
  <StudentProfileViewTable/>

          </div>
          <DialogFooter className="">
          

              <DialogClose asChild>
                <Button className=" cursor-pointer" >Back</Button>
              </DialogClose>
            
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
