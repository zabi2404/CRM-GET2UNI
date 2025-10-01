import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"
import { TypeSelect } from "@/components/common/TypeSelect"

import AddStudentHeader from "./AddStudentHeader"
import { DatePicker } from "@/components/common/DatePicker"

export default function StartTerm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const { t } = useTranslation();
    return (

        <>

            <form className={cn("flex flex-col gap-6     ", className)} {...props}>
                <AddStudentHeader
                    title="Add Student"
                    heading="Start Term"

                />
                <div className="grid gap-3">

                    <div className="flex flex-1 gap-3   xsm:flex-col
                    md:flex-row">
                        <div className="grid gap-3 w-full
                        
                        ">
                            <Label >Starting term</Label>
                            <TypeSelect
                                value1="Transfer"
                                value2="Change of Status"
                                value3="International"
                                value4="Second Masters"
                            />


                        </div>
                        <div className="grid gap-3 w-full">

                            
                            <Label >University Start Year</Label>
                            <TypeSelect
                            placeHolder="Pick a Year"
                                value1="2024"
                                value2="2025"
                                value3="2026"
                                value4="2027"
                            />
                        </div>
                    </div>








                </div>


            </form>
        </>
    );
}
