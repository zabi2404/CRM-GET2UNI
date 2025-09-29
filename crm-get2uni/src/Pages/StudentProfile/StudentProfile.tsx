import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PerformanceTab from "../Ambassdor Profile/PerformanceTab"
import { StudentListTab } from "../Ambassdor Profile/StudentListTab"
import AgentProfileTab from "../Agent Profile/AgentProfileTab"
import StudentProfileTab from "./StudentProfileTab"
import { StudentCommissionTab } from "./StudentCommissionTab"
import { Button } from "@/components/ui/button"
import { ProgressDemo } from "@/components/common/ProgressBar"
import { Check, Minus, X } from "lucide-react"




function StudentProfile() {
  return (

    <>

      <div className="min-[1441px]:max-w-[1200px] mt-4  min-[1441px]:mx-auto rounded-md shadow-md p-8 h-[253px]  mb-8">
        <div className="flex justify-end">
          <Button> Aambassador Profile Exists</Button>
        </div>
        <div>
          Application Timeline

        </div>
        <div className="flex items-center justify-center">
          <div className="size-[31px] rounded-full bg-primary text-white flex justify-center items-center">
            <Check />
          </div>
          <ProgressDemo width="20%" height="10px" value={50} />
          <div className="size-[31px] rounded-full bg-primary text-white flex justify-center items-center">
            <X />
          </div>
          <ProgressDemo width="20%" height="10px" value={0} />
          <div className="size-[31px] rounded-full bg-primary text-white flex justify-center items-center">

            <Minus />
          </div>
        </div>
        <div className="flex max-w-[607px] mx-auto w-[100%]  gap-3 mt-4  items-center justify-between">
          <p>
            Application Submitted
          </p>
          <p>Document Unverified</p>
          <p>Pending</p>
        </div>
      </div>


      <div className="min-[1441px]:max-w-[1200px] mt-4  min-[1441px]:mx-auto">
        <Tabs defaultValue="profile" className="">
          <TabsList className="mb-4">
            <TabsTrigger className="px-8 cursor-pointer" value="profile">Profile</TabsTrigger>
            <TabsTrigger className="px-8 cursor-pointer" value="document">Document</TabsTrigger>
            <TabsTrigger className="px-8 cursor-pointer" value="notes">Notes</TabsTrigger>
            <TabsTrigger className="px-8 cursor-pointer" value="commission">Commission </TabsTrigger>

          </TabsList>
          <TabsContent value="profile">
            <AgentProfileTab />
          </TabsContent>
          <TabsContent value="agentType">
            <StudentProfileTab />
          </TabsContent>
          <TabsContent value="performance">
            <PerformanceTab />
          </TabsContent>
          <TabsContent value="studentlist">
            <StudentListTab />
          </TabsContent>
          <TabsContent value="commission">
            <StudentCommissionTab />
          </TabsContent>
        </Tabs>
        <div className="flex justify-end gap-4 my-4">
          <Button className="cursor-pointer">Reject Enrollment</Button>
          <Button className="cursor-pointer">Approve Enrollment</Button>
        </div>
      </div>
    </>

  )
}

export default StudentProfile