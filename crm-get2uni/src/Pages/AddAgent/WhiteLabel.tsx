import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import AddStudentHeader from "../AddStudent/AddStudentHeader"
import { Input } from "@/components/ui/input"

export default function WhiteLabel({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (

        <>

            <form className={cn("flex flex-col gap-6     ", className)} {...props}>
                <AddStudentHeader
                    title="Add Agent"
                    heading="White Label"

                />
                <div className="grid gap-3">

                    <div className="flex flex-1 gap-3">
                        <div className="grid gap-3 w-full">
                            <Label >Subdomain</Label>
                            <div className="flex items-center">
                                <Input
                                type="text"
                                placeholder="get2uni.com
"
                            />
                            <div className="flex items-center gap-2 bg-secondary p-1.5 border rounded-sm">
                                <p className="text-secondary-foreground">
                                    .get2uni.com

                                </p>
                            </div>

                            </div>
                        </div>
                        <div className="grid gap-3 w-full">
                        <Label >Custom Domain</Label>

                            <Input
                                type="text"
                                placeholder="e.g. google.com"
                            />
                        </div>
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
