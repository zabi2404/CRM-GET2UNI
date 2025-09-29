import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PerformanceTab from "../Ambassdor Profile/PerformanceTab"
import { StudentListTab } from "../Ambassdor Profile/StudentListTab"
import { CommissionInfoTab } from "../Ambassdor Profile/CommissionInfoTab"
import AgentProfileTab from "./AgentProfileTab"
import AgentTypeTab from "./AgentTypeTab"



function AgentProfile() {
  return (
    <div className="min-[1441px]:max-w-[1200px] mt-4  min-[1441px]:mx-auto">
 <Tabs defaultValue="profile" className="">
                <TabsList className="mb-4">
                    <TabsTrigger className="px-8 cursor-pointer" value="profile">Profile</TabsTrigger>
                    <TabsTrigger className="px-8 cursor-pointer" value="agentType">Agent Type</TabsTrigger>
                    <TabsTrigger className="px-8 cursor-pointer" value="performance">Performance </TabsTrigger>
                    <TabsTrigger className="px-8 cursor-pointer" value="studentlist">Student List</TabsTrigger>
                    <TabsTrigger className="px-8 cursor-pointer" value="document">Document</TabsTrigger>

                </TabsList>
                <TabsContent value="profile">
                    <AgentProfileTab />
                </TabsContent>
                 <TabsContent value="agentType">
                    <AgentTypeTab />
                </TabsContent>
                <TabsContent value="performance">
                    <PerformanceTab />
                </TabsContent>
                                <TabsContent value="studentlist">
                <StudentListTab/>
                </TabsContent>
                                <TabsContent value="document">
                        <CommissionInfoTab/>
                </TabsContent>
            </Tabs>
    </div>
    
  )
}

export default AgentProfile