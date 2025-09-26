import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypeSelect } from "@/components/common/TypeSelect"
import { DatePicker } from "@/components/common/DatePicker"
import { PhoneInput } from "@/components/common/PhoneInput"
import { CountrySelect } from "@/components/common/CountrySelectInput"
import { useTranslation } from "react-i18next"
import AddStudentHeader from "../AddStudent/AddStudentHeader"

function AmbassdorProfileTab({
    className,
    ...props
}: React.ComponentProps<"form">)  {
    const { t } = useTranslation();
  return (
    
<>
<div className="shadow-lg rounded-md flex flex-col gap-12 p-4 w-full">
 <AddStudentHeader
              title="Add Student"
              heading="Basic Information"
              
              />

            <div className="flex justify-center items-center">
                 <form className={cn("flex flex-col gap-6   max-w-[1099px]   ", className)} {...props}>
              
                <div className="grid gap-3">

                    <div className="flex flex-1 gap-3">
                        <div className="flex items-center gap-3 w-full">
                            <Label >Name</Label>
                            <TypeSelect
                                value1="Transfer"
                                value2="Change of Status"
                                value3="International"
                                value4="Second Masters"
                            />


                        </div>
                        <div className="flex items-center gap-3 w-full">
                            <Label htmlFor="FirstName">Email</Label>
                            <Input id="FirstName"
                            className="min-w-[200px]"
                                type="text" required />
                        </div>
                    </div>


                    <div className="flex flex-1 gap-3">
                        <div className="flex items-center gap-3 w-full">
                            <Label htmlFor="LastName " className="text-nowrap">Phone Number</Label>
                            <Input id="LastName"

                                type="text" required />
                        </div>

                        <div className="flex items-center gap-3 w-full">
                            <Label htmlFor="email" className="text-nowrap">Email Address</Label>
                            <Input id="email"
                             className="min-w-[350px]"
                                type="email" placeholder="m@example.com" required />
                        </div>

                    </div>

                    <div className="flex flex-1 gap-3">
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">{t('auth.whatsapp')}</Label>

                            <PhoneInput />
                        </div>

                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">{t('auth.phone')}</Label>

                            <PhoneInput />
                        </div>
                    </div>

                    <div className="flex flex-1 gap-3">
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">Address Line 1</Label>
                            <Input id="LastName"

                                type="text" required />
                        </div>

                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">Address Line 1</Label>
                            <Input id="email"

                                type="email"  required />
                        </div>

                    </div>
                    

                    <div className="flex flex-1 gap-3">
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">County</Label>
                            <Input id="LastName"

                                type="text" required />
                        </div>

                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">City</Label>
                            <Input id="email"

                                type="email"  required />
                        </div>

                    </div>

                    <div className="flex flex-1 gap-3">
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">Country</Label>
                            <CountrySelect />
                        </div>

                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">Address Line 1</Label>
                            <Input id="email"

                                type="email"  required />
                        </div>

                    </div>
                    <div className="flex flex-1 gap-3">
                    <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">Country</Label>
                            <CountrySelect />
                        </div>
                    <div className="grid gap-3 w-full">

                        <DatePicker />
                    </div>

                    </div>


                 
                    
                </div>
               

            </form>
            </div>

</div>

</>

)
}

export default AmbassdorProfileTab