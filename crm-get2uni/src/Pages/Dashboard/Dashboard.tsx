import { ChartLineMultiple } from "@/components/Charts/LineChart";
import { ChartRadialStacked } from "@/components/Charts/RadialChart";
import OnboardCard from "./OnboardCard";
import { RecentActivityTable } from "@/components/Tables/RecentActivityTable";
import Line from "@/components/common/Line";
import { Button } from "@/components/ui/button";
import { Plus, User } from "lucide-react";


const Dashboard = () => {
    return (
        <>

            <div className="grid grid-cols-[2fr_1fr] gap-4 mb-4">
                <div className="border p-4 rounded-md">
                    <h1>Students Overview</h1>
                    <div className="border m-4 rounded-md p-4">
                        <div>
                            <h1>Total Students</h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1>145</h1>
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

                    <div className="border m-4 rounded-md p-4">
                    <div>
                        <h1>
                        Applications
                        </h1>
                    </div>
                    <div className="flex">
                        <div>
                            <h1 className="text-subheading">0</h1>
                           <li>Approved</li>
                        </div>
                        <div className="flex">
                            <div className="flex"> 
                                <div><Line/></div>
                                <div className="flex flex-col justify-between">
                                    <h1 className="text-subheading">0</h1>
                                    <li>In Reviews</li>
                                </div>
                            </div>
                            {/* <div>
                                <div><Line/></div>
                                <div>
                                    <h1>0</h1>
                                    <li>Pending</li>
                                </div>
                            </div>
                            <div>
                                <div><Line/></div>
                                <div>
                                    <h1>0</h1>
                                    <li>Rejected</li>
                                </div>
                            </div>
                            <div>
                                <div><Line/></div>
                                <div>
                                    <h1>0</h1>
                                    <li></li>
                                </div>
                            </div> */}

                        </div>
                    </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div className="border p-4 rounded-md">
                    <h1>Students Overview</h1>
                    <div className="border rounded-md p-4 mb-4">
                        <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                <div className="bg-primary p-2 w-fit rounded-sm text-white"><User /></div>
                            <h1>Total Agents</h1>
                                </div>
                                <div >
                                    <Button variant={"outline"}>
                                    <Plus />
                                        Add
                                    </Button>
                                </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1>145</h1>
                                <div className="flex">
                                    <p>25%</p>
                                    <p>from Last Month</p>
                                </div>
                            </div>
                            <div className="flex justify-end ">
                                <img src="/download (1).png" 
                                 className="w-[48px] h-[78px]"
                                alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-md p-4">
                        <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                <div className="bg-primary p-2 w-fit rounded-sm text-white"><User /></div>
                            <h1>Total Agents</h1>
                                </div>
                                <div >
                                    <Button variant={"outline"}>
                                    <Plus />
                                        Add
                                    </Button>
                                </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1>145</h1>
                                <div className="flex">
                                    <p>25%</p>
                                    <p>from Last Month</p>
                                </div>
                            </div>
                            <div className="flex justify-end ">
                                <img src="/download (1).png" 
                                 className="w-[48px] h-[78px]"
                                alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex gap-4 ">
                <ChartLineMultiple />
                <div className="flex flex-col gap-4">
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

            <div className="flex gap-4 mt-4 items-center justify-between">

                <ChartRadialStacked
                    title="Ambassadors Overview"
                />
                <ChartRadialStacked
                    title="Application Conversion"
                />
                <ChartRadialStacked
                    title='Agent Overview'
                />

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
