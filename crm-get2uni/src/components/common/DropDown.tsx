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
  placeHolder?: string
  defaultValue?: string
  color1?: string
  color2?: string 
  color3?: string
  color4?: string
  width?:string
  onChange?: (value: string) => void
}

export function DropDown({
  value1,
  value2,
  value3,
  value4,
  color1,
  color2,
  color3,
  color4,
  placeHolder,
  defaultValue,
  width,
  onChange,
}: SelectType) {
  const items = [value1, value2, value3, value4].filter(Boolean)

  const itemClasses = [color1,color2,color3,color4]


  return (
    <Select

       
      onValueChange={(val) => {
        onChange?.(val)
        console.log(val)
      }}
      defaultValue={defaultValue}
    >
      <SelectTrigger className=" text-foreground"
      style={{
        width: width || "fit-content" 
      }}
      >
        <SelectValue placeholder={placeHolder ? placeHolder : "Select"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item, i) => (
            <SelectItem
              key={i}
              value={item!}
              className={itemClasses[i] || 'text-foreground'}
            >
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
