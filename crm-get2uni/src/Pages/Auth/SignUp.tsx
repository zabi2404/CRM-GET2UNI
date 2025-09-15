import { SignUpForm } from "@/components/SignUp-form"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next";

export default function SignUp() {
  const { t } = useTranslation();
  return (
    <div className="flex relative flex-col 
    xsm:px-8
    ">
     <div className="absolute right-0 p-4">
        <Button  to="/login" className="cursor-pointer">{t('auth.login')}</Button>
      </div>
      

     
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md min-[1440px]:max-w-[600px] transition-all duration-200">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}


