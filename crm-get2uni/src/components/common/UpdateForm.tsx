import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PhoneInput } from "../common/PhoneInput"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export function UpdateForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  return (
    <form className={cn("flex flex-col gap-6     ", className)} {...props}>
      <div className="flex flex-col text-start">
        <h1 className="text-2xl font-bold text-headingColor dark:text-white">{t('settings.title')}</h1>
        <p className="text-muted-foreground text-sm text-balance">
       {t('settings.profileSettings')}
        </p>
      </div>
      <div className="grid gap-4">

     

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
          <Label htmlFor="email">{t('settings.emailAddress')}</Label>
          <Input id="email"

            type="email" placeholder={t('settings.placeholderEmail')} required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">{t('auth.whatsapp')}</Label>

          <PhoneInput />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">{t('auth.phone')}</Label>

          <PhoneInput />
        </div>


        <Button type="submit" className="w-fit cursor-pointer">
          {t('settings.saveUpdate')}
        </Button>

      </div>
   

    </form>
  )
}
