import { SignUpForm } from "@/components/SignUp-form"
import { Button } from "@/components/ui/button"

export default function SignUp() {
  return (
    <div className="flex relative flex-col h-screen
    xsm:px-8
    ">
     <div className="absolute right-0 p-4">
        <Button  to="/login" className="cursor-pointer">Log In</Button>
      </div>
      

     
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md min-[1440px]:max-w-[600px] transition-all duration-200">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}


