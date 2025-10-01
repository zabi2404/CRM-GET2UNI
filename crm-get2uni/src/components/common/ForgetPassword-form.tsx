import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function ForgetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();


  const [formData, setFormData] = useState({});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }


  const SubbmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={SubbmitForm} className={cn("flex flex-col gap-6 ", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t('auth.forgotYourPassword')}</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {t('auth.forgotPasswordDescription')}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Input id="email"
            onChange={handleChange}
            type="email" placeholder="Email" required
            className="p-6"
          />
        </div>
        <Button type="submit" className="w-full cursor-pointer p-6">
          {t('auth.sendResetInstruction')}
        </Button>
      </div>
      <div className="text-center text-sm">
        <p>{t('auth.noAccount')}</p>
        <Link to="/signup" className="text-primary ">
          {t('auth.signupMessage')}
        </Link>
      </div>

    </form>
  )
}
