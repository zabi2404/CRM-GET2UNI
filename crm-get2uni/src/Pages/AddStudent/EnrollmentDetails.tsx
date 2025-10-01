import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { TypeSelect } from "@/components/common/TypeSelect"

import AddStudentHeader from "./AddStudentHeader"

export default function EnrollmentDetails({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (

        <>

            <form className={cn("flex flex-col gap-6     ", className)} {...props}>
                <AddStudentHeader
                    title="Add Student"
                    heading="Enrollment Details Favorite"

                />
                <div className="grid gap-3">

                    <div className="flex flex-1 gap-3">
                        <div className="grid gap-3 w-full">
                            <Label >Select the enrolling university</Label>
                            <TypeSelect
                                value1="Transfer"
                                value2="Change of Status"
                                value3="International"
                                value4="Second Masters"
                            />


                        </div>
                        <div className="grid gap-3 w-full">

                            <Label >Select the course you’d like to enroll to</Label>
                            <TypeSelect
                            placeHolder="Please select a university first"
                                value1="Transfer"
                                value2="Change of Status"
                                value3="International"
                                value4="Second Masters"
                            />
                        </div>
                    </div>








                </div>


            </form>
        </>
    );
}
