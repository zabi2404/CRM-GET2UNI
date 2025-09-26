import { ChartBarStacked } from '@/components/Charts/BarChart'
import { ChartPieLabelList } from '@/components/Charts/pieChart'
import CheckboxForm from './CheckboxForm'
import { TypeSelect } from '@/components/common/TypeSelect'
import { SignupTable } from '@/components/Tables/SignupTable'
import { DropDown } from '@/components/common/DropDown'


function SignupTab() {
  return (
  <>


    <div className='flex gap-4 m-4'>

    <CheckboxForm
    title="Student"
    />
     <CheckboxForm
    title="Agent"
    />
     <CheckboxForm
    title="Ambassdor"
    />
    
   <div className='w-[150px]'>
   <DropDown
    value1='Agent'
    value2='Ambassdor'
    placeHolder='Type'
    />
   </div>
    </div>
  <div className='grid  gap-4 grid-cols-[30%_auto]'>
  <ChartPieLabelList/>
  <ChartBarStacked/>
  </div>
    <SignupTable/>
  </>
  )
}

export default SignupTab