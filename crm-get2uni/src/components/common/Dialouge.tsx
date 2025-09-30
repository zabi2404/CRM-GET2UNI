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
import { FileUp } from "lucide-react"
import { DropDown } from "./DropDown"

export function Dialouge() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="cursor-pointer">
            <FileUp />
            Mass Upload</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Mass Upload</DialogTitle>

          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Upload Document</Label>
              <Input className="cursor-pointer" id="name-1" type="file" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Template Type</Label>
              <DropDown

                value1="Select Template Type"
                value2="Change of Status"
                value3="International"
                value4="Transfer"
                defaultValue="Select Template Type"
                placeHolder="Select Template Type"
                width="100%"
              />
            </div>
          </div>
          <DialogFooter className="flex  justify-center! w-full">
            <div className="flex justify-center items-center flex-col gap-4 w-full">

                <div className="w-full">
                  <label className="text-start text-sm font-semibold" htmlFor="">Download CSV Template</label>
                  <Button className="w-full hover:bg-transparent hover:text-black cursor-pointer" variant="outline">Download Template</Button>
                </div>
             
              <Button className="w-full cursor-pointer" type="submit">Start Uploading</Button>
              
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
