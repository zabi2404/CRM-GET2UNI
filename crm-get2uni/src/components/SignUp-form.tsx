import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypeSelect } from "./common/TypeSelect"
import { DatePicker } from "./common/DatePicker"
import { PhoneInput } from "./common/PhoneInput"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6     ", className)} {...props}>
      <div className="flex flex-col items-center  text-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-muted-foreground text-sm text-balance">
        Create your account to get started
        </p>
      </div>
      <div className="grid gap-2">

      <div className="grid gap-3">
         
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">First Name</Label>
          <Input id="FirstName"
        
          type="text"  required />
        </div>
        <DatePicker/>
        <div className="grid gap-3">
          <Label htmlFor="email">Last Name</Label>
          <Input id="LastName"
        
          type="text"  required />
        </div>
        <div className="grid gap-3">
        <Label >Type</Label>
        <TypeSelect />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email"
        
          type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">WhatsApp number</Label>
 
        <PhoneInput/>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Phone number</Label>
 
        <PhoneInput/>
        </div>

        
        <Button type="submit" className="w-full cursor-pointer">
          Next
        </Button>
 
      </div>
      <div className="text-center text-sm">
      <p>Already have an Account?</p>
        <a href="/login" className="text-primary hover:underline">
        Log In
        </a>
      </div>
     
    </form>
  )
}
