import { DatePicker } from '@/components/common/DatePicker2'
import { DropDown } from '@/components/common/DropDown'
import { Input } from '@/components/ui/input'

function HeaderDashboard() {
  return (
<>
    <div className="flex items-center gap-4 mb-4">
                <Input
                    placeholder="Search..."
                    className="max-w-[300px]"
                />
                <DropDown
                    value1="Pending"
                    value2="In Review"
                    value3="Approved"
                    value4="Rejected"
                />
              <DatePicker />


            </div>
</>  )
}

export default HeaderDashboard