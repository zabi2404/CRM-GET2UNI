import { ChartRadialStacked } from '@/components/Charts/RadialChart'
import React from 'react'

function RadialCardSection() {
  return (
  <>
   <div className="flex gap-4 mb-4 items-center  flex-wrap
            xl:justify-between
            sm:justify-center
            ">

                <div className=" flex min-w-[250px] w-full
                 sm:w-[100%] 
                 md:w-[380px] 
                 xl:w-[32%] 
                 max-[887px]:!w-[380px]">
                    <ChartRadialStacked
                    title="Ambassadors Overview"
                    heading='Total Commission'
                    subTitle1='Owed'
                    subTitle2='Pending'
                    value1='$90'
                    value2='$50'
                />
                </div>
                <div className=" flex min-w-[250px] w-full sm:w-[100%] md:w-[380px] xl:w-[32%] max-[887px]:!w-[380px]">

                <ChartRadialStacked
                    title="Application Conversion"
                    heading='Total Application'
                    subTitle1='Pending'
                    subTitle2='Enrolled'
                    value1='90'
                    value2='54'
                />
                </div>
                <div className=" flex min-w-[250px] w-full sm:w-[100%] md:w-[380px] xl:w-[32%] max-[887px]:!w-[380px]">

                <ChartRadialStacked
                    title='Agent Overview'
                    heading='Total Commission'
                    subTitle1='Owed'
                    subTitle2='Pending'
                    value1='$1320'
                    value2='$1005'
                />
                </div>

            </div>
  </>
  )
}

export default RadialCardSection