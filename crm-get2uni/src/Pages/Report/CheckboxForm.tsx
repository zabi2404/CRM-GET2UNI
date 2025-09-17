import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type CheckboxFormProps = {
 title:string 
}
function CheckboxForm({title}:CheckboxFormProps) {
  return (
   <>
     <div className='flex gap-2 items-center'>
  <Checkbox className='size-5 cursor-pointer' />
  <Label >{title}</Label>
  
  </div>
   </>
  )
}

export default CheckboxForm