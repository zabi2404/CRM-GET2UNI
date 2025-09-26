
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/Select2"


  type SelectType = {
    value1?: string
    value2?: string
    value3?: string
    value4?: string
    placeHolder?:string
    defaultValue?: string
    onChange?: (value: string) => void
  }
  
  export function DropDown({ value1, value2, value3, value4,placeHolder,defaultValue ,onChange}: SelectType) {
    const items = [value1, value2, value3, value4].filter(Boolean)
  
    return (
      <Select
      onValueChange={(val) => {
      
          onChange?.(val)   
          console.log(val);
      
      }}
      defaultValue={defaultValue}>
        <SelectTrigger className=" w-fit">
          <SelectValue className="hover:text-black" placeholder={placeHolder? placeHolder : "Select"}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item, i) => (
              <SelectItem key={i} value={item!}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }

  
