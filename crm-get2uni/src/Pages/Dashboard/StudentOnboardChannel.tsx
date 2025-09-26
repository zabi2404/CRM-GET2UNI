import { ChartLineMultiple } from '@/components/Charts/LineChart'
import React from 'react'
import OnboardCard from './OnboardCard'

function StudentOnboardChannel() {
  return (
    <>
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
    
    </>
  )
}

export default StudentOnboardChannel