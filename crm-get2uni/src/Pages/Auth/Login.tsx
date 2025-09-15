import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen
    xsm:px-8
    ">
     
      <div className="flex justify-end p-4 pt-10 pr-10">
        <Button  to="/signup" className="cursor-pointer">Sign Up</Button>
      </div>

     
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md min-[1440px]:max-w-[600px] transition-all duration-200">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
