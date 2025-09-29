import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { TypeSelect } from "@/components/common/TypeSelect"
import { DatePicker } from "@/components/common/DatePicker"
import { PhoneInput } from "@/components/common/PhoneInput"
import { CountrySelect } from "@/components/common/CountrySelectInput"
import AddStudentHeader from "../AddStudent/AddStudentHeader"


export function AmbassddorBasicInfo({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const { t } = useTranslation();
    return (

        <>

            <form className={cn("flex flex-col gap-6     ", className)} {...props}>
                <AddStudentHeader
                    title="Add Ambassador"
                    heading="Basic Information"

                />
                <div className="grid gap-3">

                    <div className="flex flex-1 gap-3
                        xsm:flex-col
                    md:flex-row
                    ">

                        <div className="grid gap-3 w-full">
                            <Label htmlFor="FirstName">{t('auth.firstName')}</Label>
                            <Input id="FirstName"

                                type="text" required />
                        </div>

                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">{t('auth.lastName')}</Label>
                            <Input id="LastName"

                                type="text" required />
                        </div>

                    </div>


                    <div className="flex flex-1 gap-3
                        xsm:flex-col
                    md:flex-row
                    ">


                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email"

                                type="email" placeholder="m@example.com" required />
                        </div>


                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">{t('auth.whatsapp')}</Label>

                            <PhoneInput />
                        </div>
                    </div>

                    <div className="flex flex-1 gap-3
                        xsm:flex-col
                    md:flex-row
                    ">


                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">{t('auth.phone')}</Label>

                            <PhoneInput />
                        </div>
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">Address Line 1</Label>
                            <Input id="LastName"

                                type="text" required />
                        </div>


                    </div>

                    <div className="flex flex-1 gap-3
                        xsm:flex-col
                    md:flex-row
                    ">


                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">Address Line 2</Label>
                            <Input id="email"

                                type="email" required />
                        </div>

                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">County</Label>
                            <Input id="LastName"

                                type="text" required />
                        </div>
                    </div>


                    <div className="flex flex-1 gap-3
                        xsm:flex-col
                    md:flex-row
                    ">


                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">City</Label>
                            <Input id="email"

                                type="email" required />
                        </div>
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">Country</Label>
                            <CountrySelect />
                        </div>
                    </div>

                    <div className="flex flex-1 gap-3
                        xsm:flex-col
                    md:flex-row
                    ">


                        <div className="grid gap-3 w-full">
                            <Label htmlFor="email">Address Line 1</Label>
                            <Input id="email"

                                type="email" required />
                        </div>
                        <div className="grid gap-3 w-full">
                            <Label htmlFor="LastName">Country</Label>
                            <CountrySelect />
                        </div>
                    </div>
                    <div className="flex flex-1 gap-3">

                        <div className="grid gap-3 w-full md:w-[50%]">

                            <DatePicker />
                        </div>

                    </div>




                </div>


            </form>
        </>
    );
}
