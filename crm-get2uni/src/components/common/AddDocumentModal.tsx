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


export function AddDocumentModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button >Add</Button>
        </DialogTrigger>
        <DialogContent className="w-[300px]">
          <DialogHeader>
            <DialogTitle>Edit Document</DialogTitle>
           
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-[80px_auto] gap-3">
              <Label htmlFor="name-1">Name</Label>
           <Input type="text" placeholder="Document name will appear here" disabled/> 
            </div>
            <div className="grid grid-cols-[80px_auto] gap-3">
              <Label htmlFor="username-1">Document</Label>
               <Input  id="name-1" type="file" name="name"  />
            </div>
          </div>
          <DialogFooter className="flex  justify-center! w-full !flex-col">
            <div className="flex justify-center items-center flex-col gap-4 ">

              <Button className="w-full opacity-50 cursor-pointer" >Request Document</Button>
          
            </div>
            <div className="flex gap-4 justify-end">
            <DialogClose asChild>
                  <Button className="w-fit cursor-pointer"  type="submit">Cancel </Button>
            </DialogClose>
                    <Button className="w-fit cursor-pointer"  type="submit">Save </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
