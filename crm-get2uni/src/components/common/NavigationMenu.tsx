import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
  } from "@/components/ui/select"
  import { useNavigate } from "react-router-dom"
  
  type MenuItem = {
    label: string
    path: string
  }
  
  type NavigationMenuProps = {
    items: MenuItem[]
    placeHolder?: string
  }
  
  export function NavigationMenu({ items, placeHolder }: NavigationMenuProps) {
    const navigate = useNavigate()
  
    return (
      <Select
    
        onValueChange={(val) => {
        
          navigate(val) 
        }}
      >
        <SelectTrigger className="w-full bg-primary ">
          <span className="text-white">{placeHolder ?? "Navigate"}</span>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item, i) => (
              <SelectItem
              className="cursor-pointer"
              key={i} value={item.path}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
  