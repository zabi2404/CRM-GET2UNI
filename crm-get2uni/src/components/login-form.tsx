import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import z from 'zod'
import toast from "react-hot-toast"
import { Eye } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {



  // const loginSchema = z.object(
  //   {
  //     email: z.email("Invalid Email Address"),
  //     password: z.string().min(8, "Password must be at least 8 characters").uppercase().lowercase().regex(/(?=.*[0-9])/, "Password must contain at least one number").regex(/(?=.*[!@#$%^&*])/, "Password must contain at least one special character")
  //   }
  // )





  const { t } = useTranslation();

  const [formData, setFormData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
    console.log(formData);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form Subbmitted' ,formData);
    // const result = loginSchema.safeParse(formData);
    // if (result.success) {
    //   console.log("✅ Valid data", result.data);
    //   // proceed with login
    // } else {
    //   result.error.issues.forEach((issue) => {
    //     const field = String(issue.path[0]); 
    //     console.log(field, issue.message);
    //     toast.error(`${field}: ${issue.message}`);
    //   });
    // }

 

  }



  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6 ", className)} {...props}>
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
            onChange={handleChange}
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
          <Input id="password" type="password" required
            onChange={handleChange}
           
          />
        
        </div>
        <Button className="w-full cursor-pointer">
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
