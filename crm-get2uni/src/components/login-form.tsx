import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {


  const {t}=useTranslation();

  return (
    <form className={cn("flex flex-col gap-6 ", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t("auth.title")}</h1>
        <p className="text-muted-foreground text-sm text-balance">
         {t("auth.subtitle")}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">{t('auth.email')}</Label>
          <Input id="email"
        
          type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">{t('auth.password')}</Label>
            <Link
              to="/forget-password"
              className="ml-auto text-primary text-sm underline-offset-4 underline"
            >
              {t("auth.forgotPassword")}
            
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          {t("auth.button")}
        </Button>
 
      </div>
      <div className="text-center text-sm">
      <p>{t("auth.noAccount")}</p>
        <Link to="/signup" className="text-primary ">
          {t("auth.signupMessage")}
        </Link>
      </div>
     
    </form>
  )
}
