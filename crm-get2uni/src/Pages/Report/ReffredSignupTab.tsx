import { ChartBarStacked } from '@/components/Charts/BarChart'
import { ChartPieLabelList } from '@/components/Charts/pieChart'
import CheckboxForm from './CheckboxForm'
import { ReffredSignupTable } from '@/components/Tables/ReffredSignupTable'


function ReffredSignupTab() {
  return (
  <>


    <div className='flex gap-4 flex-wrap 
    md:m-4'>
     <CheckboxForm
    title="Agent"
    />
     <CheckboxForm
    title="Ambassdor"
    />
    
    </div>
  <div className='grid  gap-4 
   xl:grid-cols-[30%_auto]
   xsm:grid-cols-1
   '>
  <ChartPieLabelList/>
  <ChartBarStacked/>
  </div>
    <ReffredSignupTable/>
  </>
  )
}

export default ReffredSignupTab