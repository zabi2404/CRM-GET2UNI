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

import type { DateRange } from "react-day-picker"

export function DatePicker() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  const formattedDate =
    dateRange?.from && dateRange?.to
      ? `${format(dateRange.from, "LLL dd, y")} - ${format(dateRange.to, "LLL dd, y")}`
      : null

       const [dropdown, setDropdown] =
          useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
            "dropdown"
          )
  return (
    <div className="flex flex-col space-y-2 w-fit">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full pl-3 text-left font-normal cursor-pointer hover:bg-[#f4f4f5] hover:text-black hover:border-primary",
              !formattedDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formattedDate ? (
              formattedDate
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            defaultMonth={dateRange?.from}
              captionLayout={dropdown}
              
            className="rounded-lg border shadow-sm"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
