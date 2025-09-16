import * as React from "react"

import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <>
    <div
     className={cn(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary pl-2 selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
     "focus-visible:border-primary",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      className
    )}
    >

       <Search className="w-4" />
    <input
      type={type}
      data-slot="input"
      className={cn(
        "focus:border-none outline-0  px-1 ",
        className
      )}
      {...props}
    />
    </div>
   
    </>
  )
}

export { Input }
