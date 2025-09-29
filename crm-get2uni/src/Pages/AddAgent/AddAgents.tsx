import { ProgressDemo } from '@/components/common/ProgressBar';

import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { AgentBasicInfo } from './AgentBasicInfo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import WhiteLabel from './WhiteLabel';
import AgentType from './AgentType';

const array = [<AgentBasicInfo />, <WhiteLabel />, <AgentType />]


const AddAgents = () => {

     const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [progress, setProgress] = useState(33.3333);


 const handleNext = () => {
        if (value < array.length && value !== array.length - 1) {
            setValue(value + 1)
            console.log(value);
            setProgress(progress + 33.3333)
        }
        else {
            console.log("else", value);

            return value;
        }
    }


    const handlePrev = () => {
        if (value > 0) {
            setValue(value - 1)
            console.log(value);
            setProgress(progress - 33.3333)
        }
        else {
            navigate('/')
        }
    }

    const { t } = useTranslation();
    return (
         <>
                 <div className='flex justify-center items-center mb-4'>
                     <ProgressDemo value={progress} />
     
                 </div>
     
                 <div className='border rounded-sm px-3 sm:px-6 py-7  sm:m-8'>
                     {/* <BasicInfo /> */}
                     {array[value]}
                     {/* <StatusDetail/> */}
                     <div className="flex justify-between mt-4 flex-wrap gap-2">
                         <Button type="submit" variant={"outline"} className="w-fit cursor-pointer"
                             onClick={handlePrev}
                         >
                             {value === 0 ? "Cancel" : "Back"}
     
                         </Button>
     
                         <div className="flex justify-center items-center gap-4">
                             <Button type="submit" className="w-fit cursor-pointer">
                                 Save as Draft
                             </Button>
                             <Button type="submit" className="w-fit cursor-pointer"
                                 onClick={handleNext}
                             >
                                 {value === array.length - 1 ? "Submit" : t('auth.next')}
     
                             </Button>
     
                         </div>
                     </div>
     
                 </div>
     
             </>
    );
}

export default AddAgents;
