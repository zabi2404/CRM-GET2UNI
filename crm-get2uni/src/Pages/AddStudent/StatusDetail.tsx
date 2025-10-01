import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"

import AddStudentHeader from "./AddStudentHeader"
import { DatePicker } from "@/components/common/DatePicker"

export default function StatusDetail({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const { t } = useTranslation();
    return (

        <>

            <form className={cn("flex flex-col gap-6     ", className)} {...props}>
              <AddStudentHeader
              title="Add Student"
              heading="Basic Information"
              
              />
                <div className="grid gap-3">

                    <div className="flex flex-1 gap-3
                        xsm:flex-col
                    md:flex-row
                    ">
                        <div className="grid gap-3 w-full">
                            <Label >Current university</Label>
                           <Input
                           type="text"
                           placeholder="Select"
                           />


                        </div>
                        <div className="grid gap-3 w-full">
                       
                                             <Label >Current course</Label>
                           <Input
                           type="text"
                           placeholder="Select"
                           />
                                           </div>
                    </div>


                
                   


                 
                    
                </div>
               

            </form>
        </>
    );
}
