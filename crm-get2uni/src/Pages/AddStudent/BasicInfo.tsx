import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"
import { TypeSelect } from "@/components/common/TypeSelect"
import { DatePicker } from "@/components/common/DatePicker"
import { PhoneInput } from "@/components/common/PhoneInput"
import { CountrySelect } from "@/components/common/CountrySelectInput"
import AddStudentHeader from "./AddStudentHeader"

export function BasicInfo({
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

                    <div className="flex  flex-1 gap-3
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
                        <div className="grid gap-3 w-full 
                          xsm:flex-col
                    md:flex-row
                        ">
                            <Label htmlFor="FirstName">{t('auth.firstName')}</Label>
                            <Input id="FirstName"

                                type="text" required />
                        </div>
                    </div>


                    <div className="flex flex-1 gap-3
                      xsm:flex-col
                    md:flex-row
                    ">
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">{t('auth.lastName')}</Label>
                            <Input id="LastName"

                                type="text" required />
                        </div>

                        <div className="grid gap-3 w-full
                          xsm:flex-col
                    md:flex-row
                        ">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email"

                                type="email" placeholder="m@example.com" required />
                        </div>

                    </div>

                    <div className="flex flex-1 gap-3
                      xsm:flex-col
                    md:flex-row
                    ">
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">{t('auth.whatsapp')}</Label>

                            <PhoneInput />
                        </div>

                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">{t('auth.phone')}</Label>

                            <PhoneInput />
                        </div>
                    </div>

                    <div className="flex flex-1 gap-3
                      xsm:flex-col
                    md:flex-row
                    ">
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
                    

                    <div className="flex flex-1 gap-3
                      xsm:flex-col
                    md:flex-row
                    ">
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

                    <div className="flex flex-1 gap-3
                      xsm:flex-col
                    md:flex-row
                    ">
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
                    <div className="flex flex-1 gap-3
                      xsm:flex-col
                    md:flex-row
                    ">
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
        </>
    );
}
