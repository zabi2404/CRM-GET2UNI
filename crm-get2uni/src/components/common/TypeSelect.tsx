
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TypeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Transfer</SelectItem>
          <SelectItem value="banana">Change of status</SelectItem>
          <SelectItem value="blueberry">International</SelectItem>
          <SelectItem value="grapes">Second Masters</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
