import { ChartLineMultiple } from '@/components/Charts/LineChart'
import { ChartRadialStacked } from '@/components/Charts/RadialChart'
import OnboardCard from '../Dashboard/OnboardCard'

function PerformanceTab() {
    return (
        <>
            <ChartLineMultiple />
           <div className='flex gap-4 mt-4'>
             <div className=' w-[365px]'>
                <ChartRadialStacked
                    title="Commission Overview"
                    heading='Total Application'
                    subTitle1='Pending'
                    subTitle2='Enrolled'
                    value1='90'
                    value2='54'
                />
            </div>

            <div className='flex flex-col gap-2'>
                <OnboardCard
            title='Recruited Students'
            description='0'
            />
            <OnboardCard
            title='Conversion Students'
            description='0'
            />
            </div>
           </div>
        </>
    )
}

export default PerformanceTab