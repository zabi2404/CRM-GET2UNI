import { ChartLineMultiple } from "@/components/Charts/LineChart";
import { ChartRadialStacked } from "@/components/Charts/RadialChart";
import OnboardCard from "./OnboardCard";
import { RecentActivityTable } from "@/components/Tables/RecentActivityTable";
import Line from "@/components/common/Line";
import { Button } from "@/components/ui/button";
import { Plus, User } from "lucide-react";
import StudentOverviewCard from "@/components/common/StudentOverviewCard";
import SmallCard from "@/components/common/SmallCard";


const Dashboard = () => {
    return (
        <>

            <div className="grid xl:grid-cols-[2fr_1fr] gap-4 mb-4
            xsm:grid-cols-1
            ">
                <div className="border p-4 rounded-md ">
                    <h1 className="text-subheading2 font-medium mb-4">Students Overview</h1>
                    <div className="border mb-4 rounded-md p-6">
                        <div>
                            <h1>Total Students</h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className=" font-medium text-[48px] ">145</h1>
                                <div className="flex">
                                    <p>25%</p>
                                    <p>from Last Month</p>
                                </div>
                            </div>
                            <div className="flex justify-end ">
                                <img src="/download (1).png" 
                                 className="size-16"
                                alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="border  rounded-md p-6">
                    <div>
                        <h1>
                        Applications
                        </h1>
                    </div>
                    <div className="flex">
                        <div className="mr-30">
                            <h1 className="text-[36px] font-500 text-textBlack mb-2">0</h1>
                          <li className="text-[12px] text-green-400">Approved</li>
                        </div>
                        <div className="flex flex-1 justify-evenly ">
                           <SmallCard
                           title="In rewiew"
                           count={4}
                           color="orange"
                           />
                            <SmallCard
                            title="Pending"
                            count={45}
                            color="green"
                            />
                             <SmallCard
                             title="Rejected"
                             count={19}
                             color="purple"
                             />
                           

                        </div>
                    </div>
                    </div>

                </div>

                <div className="border p-4 rounded-md flex flex-col gap-4 w-full">
                  <StudentOverviewCard/>
                  <StudentOverviewCard/>
                    
                </div>


            </div>


            <div className="flex gap-4 
            xl:flex-row
            xsm:flex-col
            ">
                <ChartLineMultiple />
                <div className="flex width-full gap-4
                xl:flex-col
                xsm:flex-row
                ">
                    <OnboardCard
                        title="Agent Onboard"
                        description="45"
                    />
                    <OnboardCard
                        title="Ambassdor Onboard"
                        description="45"
                    />
                    <OnboardCard
                        title="Directs Onboard"
                        description="45"
                    />

                </div>
            </div>

            <div className="flex gap-4 mt-4 items-center  flex-wrap
            xl:justify-between
            
            ">

                <div className=" flex min-w-[280px] w-full
                 sm:w-[100%] 
                 md:w-[380px] 
                 xl:w-[32%] 
                 max-[887px]:!w-[380px]">
                    <ChartRadialStacked
                    title="Ambassadors Overview"
                />
                </div>
                <div className=" flex min-w-[280px] w-full sm:w-[100%] md:w-[380px] xl:w-[32%] max-[887px]:!w-[380px]">

                <ChartRadialStacked
                    title="Application Conversion"
                />
                </div>
                <div className=" flex min-w-[280px] w-full sm:w-[100%] md:w-[380px] xl:w-[32%] max-[887px]:!w-[380px]">

                <ChartRadialStacked
                    title='Agent Overview'
                />
                </div>

            </div>

            <div className="mt-4 border p-4 rounded-md">
                <h1>Recent Activities</h1>
                <div className="m-4">
                    <RecentActivityTable />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
