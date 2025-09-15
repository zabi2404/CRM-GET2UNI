import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ForgetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6 ", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p className="text-muted-foreground text-sm text-balance">
        No problem! Enter your email address below, and we'll send you instructions to reset your password.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
      
          <Input id="email"
        
          type="email" placeholder="Email" required 
           className="p-6"
          />
        </div>
    
        <Button type="submit" className="w-full cursor-pointer p-6">
          Send Reset Instruction
        </Button>
 
      </div>
      <div className="text-center text-sm">
      <p>Don't have an account yet?</p>
        <a href="/signup" className="text-primary ">
        Sign up and join us today!
        </a>
      </div>
     
    </form>
  )
}
