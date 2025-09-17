import { ChartBarStacked } from '@/components/Charts/BarChart'
import { ChartPieLabelList } from '@/components/Charts/pieChart'
import { CommissionTable } from '@/components/Tables/CommissionTable'
import CheckboxForm from './CheckboxForm'
import { TypeSelect } from '@/components/common/TypeSelect'


function CommissionTab() {
  return (
  <>


    <div className='flex gap-4 m-4'>

    <CheckboxForm
    title="Pending"
    />
     <CheckboxForm
    title="Approved"
    />
     <CheckboxForm
    title="Rejected"
    />
     <CheckboxForm
    title="Paid"
    />
   <div className='w-[150px]'>
   <TypeSelect
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
     <CommissionTable/>
  </>
  )
}

export default CommissionTab