import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export default function LoginPage() {
  const {t}=useTranslation();
  return (
    <div className="flex flex-col 
    xsm:px-8
    ">
     
      <div className="flex justify-end p-4 pt-10 pr-10">
        <Button  to="/signup" className="cursor-pointer">{t('auth.signup')}</Button>
      </div>

     
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md min-[1440px]:max-w-[600px] transition-all duration-200">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
