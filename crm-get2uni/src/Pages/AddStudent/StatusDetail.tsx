import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"
import { TypeSelect } from "@/components/common/TypeSelect"

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
                            <Label >{t('auth.type')}</Label>
                            <TypeSelect
                                value1="Transfer"
                                value2="Change of Status"
                                value3="International"
                                value4="Second Masters"
                            />


                        </div>
                        <div className="grid gap-3 w-full">
                       
                                               <DatePicker />
                                           </div>
                    </div>


                
                   


                 
                    
                </div>
               

            </form>
        </>
    );
}
