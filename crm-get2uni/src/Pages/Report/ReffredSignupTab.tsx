import { ChartBarStacked } from '@/components/Charts/BarChart'
import { ChartPieLabelList } from '@/components/Charts/pieChart'
import CheckboxForm from './CheckboxForm'
import { TypeSelect } from '@/components/common/TypeSelect'
import { ReffredSignupTable } from '@/components/Tables/ReffredSignupTable'


function ReffredSignupTab() {
  return (
  <>


    <div className='flex gap-4 m-4'>
     <CheckboxForm
    title="Agent"
    />
     <CheckboxForm
    title="Ambassdor"
    />
    
    </div>
  <div className='grid  gap-4 grid-cols-[30%_auto]'>
  <ChartPieLabelList/>
  <ChartBarStacked/>
  </div>
    <ReffredSignupTable/>
  </>
  )
}

export default ReffredSignupTab