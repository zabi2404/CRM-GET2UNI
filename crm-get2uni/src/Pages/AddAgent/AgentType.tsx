import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypeSelect } from "@/components/common/TypeSelect"
import { Button } from "@/components/ui/button"
import AddStudentHeader from "../AddStudent/AddStudentHeader"

export default function AgentType({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (

        <>

            <form className={cn("flex flex-col gap-6     ", className)} {...props}>
              <AddStudentHeader
              title="Add Agent"
              heading="Agent Type"
              
              />
                <div className="grid gap-3">

                    <div className="flex flex-1 gap-3">
                        <div className="grid gap-3 w-full">
                            <Label >Agent Type</Label>
                            <TypeSelect
                                value1="Transfer"
                                value2="Change of Status"
                                value3="International"
                                value4="Second Masters"
                            />


                        </div>
                       
                    </div>
                    <div className="my-4">
                        <Button >
                Commission Model
                        </Button>


                    </div>
                     <div className="grid gap-3 w-full"> 
                            <Label className="text-secondary-foreground">Upload Logo</Label>

                        <Input
                            type="file"
                        />
                    </div>

                </div>
            </form>
        </>
    );
}
