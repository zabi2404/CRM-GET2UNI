import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AmbassdorProfileTab from "../Ambassdor Profile/AmbassdorProfileTab"
import PerformanceTab from "../Ambassdor Profile/PerformanceTab"
import { StudentListTab } from "../Ambassdor Profile/StudentListTab"
import { CommissionInfoTab } from "../Ambassdor Profile/CommissionInfoTab"



function AgentProfile() {
  return (
     <Tabs defaultValue="profile" className="">
                <TabsList className="mb-4">
                    <TabsTrigger className="px-8 cursor-pointer" value="profile">Profile</TabsTrigger>
                    <TabsTrigger className="px-8 cursor-pointer" value="agentType">Agent Type</TabsTrigger>
                    <TabsTrigger className="px-8 cursor-pointer" value="performance">Performance </TabsTrigger>
                    <TabsTrigger className="px-8 cursor-pointer" value="studentlist">Student List</TabsTrigger>
                    <TabsTrigger className="px-8 cursor-pointer" value="commissionInfo">Commission Info</TabsTrigger>

                </TabsList>
                <TabsContent value="profile">
                    <AmbassdorProfileTab />
                </TabsContent>
                <TabsContent value="performance">
                    <PerformanceTab />
                </TabsContent>
                                <TabsContent value="studentlist">
                <StudentListTab/>
                </TabsContent>
                                <TabsContent value="commissionInfo">
                        <CommissionInfoTab/>
                </TabsContent>
            </Tabs>
  )
}

export default AgentProfile