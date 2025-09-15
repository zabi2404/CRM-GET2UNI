
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useTranslation } from "react-i18next"

export function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(undefined)
 const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label className="text-sm font-medium">{t('auth.dob')}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full pl-3 text-left font-normal cursor-pointer hover:bg-[#f4f4f5] hover:text-black hover:border-primary",
              !date && "text-muted-foreground"
            )}
          >
            {date ? (
              format(date, "PPP")
            ) : (
              <span>{t('auth.pickDate')}</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4  hover:text-black " />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(d) =>
              d > new Date() || d < new Date("1900-01-01")
            }
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
     
    </div>
  )
}
