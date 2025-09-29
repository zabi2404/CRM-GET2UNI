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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef } from "react"
import TableOfStateTerm from "./TableOfStateTerm"
import { Plus } from "lucide-react"


export function AddUniversityModal() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="cursor-pointer"><Plus/>Add University</Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle > Add University</DialogTitle>

          </DialogHeader>
          <div className="flex flex-col gap-8">
            <div className="grid gap-4">
              <div className="grid  gap-1">
                <Label htmlFor="name-1">Upload ( Logo )</Label>
                <Input type="file" />
              </div>

            </div>
            <div className="flex gap-3">
              <div className="grid  gap-1 w-full">
                <Label htmlFor="username-1">University Name</Label>
                <Input id="name-1 " type="file" name="name" />
              </div>
              <div className="grid  gap-1 w-full">
                <Label htmlFor="username-1">Website</Label>
                <Input id="name-1" type="file" name="name" />
              </div>

            </div>
            <div className="flex gap-3">
              <div className="grid  gap-1 w-full">
                <Label htmlFor="username-1">Name of contact (optional)</Label>
                <Input id="name-1 " type="file" name="name" />
              </div>
              <div className="grid  gap-1 w-full">
                <Label htmlFor="username-1">Phone number of contact (optional)</Label>
                <Input id="name-1" type="file" name="name" />
              </div>

            </div>
            <div className="flex gap-3">
              <div className="grid  gap-1 w-full">
                <Label htmlFor="username-1">Assigned Get2Uni staff</Label>
                <Input id="name-1 " type="file" name="name" />
              </div>
              <div className="grid  gap-1 w-full">
                <Label htmlFor="username-1">Assign Lead Staff (Optional)</Label>
                <Input id="name-1" type="file" name="name" />
              </div>

            </div>
          </div>


          <div>
            <p>Documents</p>
            <div className="border rounded-md p-4">
              <div className="border-2 hover:border-black cursor-pointer border-dashed rounded-md p-4 flex flex-col items-center"
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.click()
                  }
                }}
              >
                <input ref={inputRef} type="file" className="hidden" name="" id="" />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <p>
                  (Supports PDF, DOC, DOCX, XLS, XLSX, PNG, GIF, JPEG, JPG)
                </p>
              </div>
            </div>
          </div>


          <TableOfStateTerm/>

          <DialogFooter className="flex  justify-center! w-full !flex-col">
            <div className="flex gap-4 justify-center">
              <DialogClose asChild>
                <Button className="w-fit cursor-pointer" type="submit">Cancel </Button>
              </DialogClose>
              <Button className="w-fit cursor-pointer" type="submit">Save </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
