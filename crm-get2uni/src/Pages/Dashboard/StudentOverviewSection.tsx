import GrowthBadge from '@/components/common/GrowthBadge'
import SmallCard from '@/components/common/SmallCard'
import StudentOverviewCard from '@/components/common/StudentOverviewCard'
import { User, GraduationCap } from "lucide-react";

function StudentOverviewSection() {
    return (
        <>


            <div className="grid xl:grid-cols-[2fr_1fr] gap-4 mb-4 
            xsm:grid-cols-1
            ">
                <div className="border p-4 rounded-md  ">

                    <h1 className="text-lg font-medium mb-4 ">Students Overview</h1>
                    <div className="border mb-4 rounded-md p-6 bg-card">
                        <div>
                            <h1 className='text-sm font-medium text-secondary-foreground'>Total Students</h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className=" font-medium text-heading  ">145</h1>
                                <GrowthBadge value="12%" />
                            </div>
                            <div className="flex justify-end ">
                                <img src="/download (1).png"
                                    className="size-16"
                                    alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="border  rounded-md p-6 bg-card">
                        <div>
                            <h1 className='text-sm text-secondary-foreground'>
                                Applications
                            </h1>
                        </div>
                        <div className="flex
                    max-[506px]:flex-col
                    ">
                            <div className="mr-30
                        max-[506px]:mr-0 max-[506px]:text-center max-[506px]:flex max-[506px]:flex-col justify-center items-center
                        ">
                                <h1 className="text-subHeading font-500  mb-2
                            
                            ">0</h1>
                                <li className="text-body text-success">Approved</li>
                            </div>
                            <div className="flex flex-1 justify-evenly flex-wrap">
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
                    <StudentOverviewCard
                        title="Total Agents"
                        count={123}
                        Icon={User}
                        path="/add-agent"
                    />
                    <StudentOverviewCard
                        title="Total Ambassadors"
                        count={145}
                        Icon={GraduationCap}
                        path="/add-ambassador"
                    />

                </div>


            </div>
        </>
    )
}

export default StudentOverviewSection