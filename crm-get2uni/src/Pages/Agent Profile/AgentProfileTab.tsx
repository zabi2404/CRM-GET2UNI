import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypeSelect } from "@/components/common/TypeSelect"
import { DatePicker } from "@/components/common/DatePicker"
import { PhoneInput } from "@/components/common/PhoneInput"
import { CountrySelect } from "@/components/common/CountrySelectInput"

import AddStudentHeader from "../AddStudent/AddStudentHeader"

function AgentProfileTab({
    className,
    ...props
}: React.ComponentProps<"form">) {

    return (

        <>
            <div className="shadow-lg rounded-md flex flex-col gap-12 p-4 w-full">
                <AddStudentHeader
                    title="Agent Profile"
                    heading="Basic Information"

                />

                <div className="flex justify-center items-center">
                    
                    <form className={cn("flex flex-col gap-6   max-w-[1099px]   ", className)} {...props}>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between gap-25 w-full">

                                 <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Name</label>
                                    <Input id="FirstName"
                                    className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                                <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Email</label>
                                    <Input id="email"
                                    className="xl:min-w-[350px] "
                                        type="email" required />
                                </div>

                            </div>

                             <div className="flex justify-between gap-25 w-full">

                                 <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto text-nowrap" htmlFor="FirstName">Phone Number</label>
                                    <Input id="FirstName"
                                    className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                                <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Address 1</label>
                                    <Input id="email"
                                    className="xl:min-w-[350px] "
                                        type="email" required />
                                </div>

                            </div>

                             <div className="flex justify-between gap-25 w-full">

                                 <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Address 2</label>
                                    <Input id="FirstName"
                                    className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                                <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Country</label>
                                    <Input id="email"
                                    className="xl:min-w-[350px] "
                                        type="email" required />
                                </div>

                            </div>

                             <div className="flex justify-between gap-25 w-full">

                                 <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">City</label>
                                    <Input id="FirstName"
                                    className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                                <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Country</label>
                                    <Input id="email"
                                    className="xl:min-w-[350px] "
                                        type="email" required />
                                </div>

                            </div>

                             <div className="flex justify-between  gap-25 w-full">

                                 <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Zip Code</label>
                                    <Input id="FirstName"
                                    className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                                <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">University</label>
                                    <Input id="email"
                                    className="xl:min-w-[350px] "
                                        type="email" required />
                                </div>

                            </div>

                             <div className="flex justify-between gap-25 w-full">

                                 <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Status</label>
                                    <Input id="FirstName"
                                    className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                                <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto text-nowrap" htmlFor="FirstName">Date of Birth</label>
                                    <Input id="email"
                                    className="xl:min-w-[350px] "
                                        type="email" required />
                                </div>

                            </div>

                            <div className="flex justify-between gap-25 w-full">

                                 <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Commission Amount</label>
                                    <Input id="FirstName"
                                    className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                                <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Commission Type</label>
                                    <Input id="email"
                                    className="xl:min-w-[350px] "
                                        type="email" required />
                                </div>

                            </div>

                             <div className="flex justify-between gap-25 w-full">

                                 <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto text-nowrap" htmlFor="FirstName">Assigned Staff</label>
                                    <Input id="FirstName"
                                    className="xl:min-w-[350px] "
                                        type="text" required />
                                </div>
                                <div className="grid grid-cols-[100px_auto] gap-4 w-full">
                                    <label className="text-end my-auto" htmlFor="FirstName">Referral link</label>
                                    <Input id="email"
                                    className="xl:min-w-[350px] "
                                        type="email" required />
                                </div>

                            </div>
                        </div>


                    </form>
                </div>

            </div>

        </>

    )
}

export default AgentProfileTab