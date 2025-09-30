import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./common/DatePicker"
import { PhoneInput } from "./common/PhoneInput"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { DropDown } from "./common/DropDown"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  return (
    <form className={cn("flex flex-col gap-6     ", className)} {...props}>
      <div className="flex flex-col items-center  text-center">
        <h1 className="text-2xl font-bold">{t("auth.signup")}</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {t('auth.createAccount')}
        </p>
      </div>
      <div className="grid gap-2">

      <div className="grid gap-3">
          <Label >{t('auth.type')}</Label>
          <DropDown
            value1="Transfer"
            value2="Change of Status"
            value3="International"
            value4="Second Masters"
            width="100%"
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="FirstName">{t('auth.firstName')}</Label>
          <Input id="FirstName"

            type="text" required />
        </div>



        <div className="grid gap-3">
          <Label htmlFor="LastName">{t('auth.lastName')}</Label>
          <Input id="LastName"

            type="text" required />
        </div>

    
        <div className="grid gap-3">

          <DatePicker />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email"

            type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">{t('auth.whatsapp')}</Label>

          <PhoneInput />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">{t('auth.phone')}</Label>

          <PhoneInput />
        </div>


        <Button type="submit" className="w-full cursor-pointer">
          {t('auth.next')}
        </Button>

      </div>
      <div className="text-center text-sm">
        <p>{t('auth.alreadyAccount')}</p>
        <Link to="/login" className="text-primary hover:underline">
          {t('auth.login')}
        </Link>
      </div>

    </form>
  )
}
