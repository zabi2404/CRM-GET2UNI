import { ProgressDemo } from '@/components/common/ProgressBar';


import { useTranslation } from 'react-i18next';
import { AmbassddorBasicInfo } from './AmbassddorBasicInfo';
import EnviornmentDetail from './EnviornmentDetail';


 const AddAmbasddar = () => {

    const { t } = useTranslation();
    return (
        <>
          

            <div className='border rounded-sm px-3 sm:px-6 py-7  sm:m-8'>
                {/* <BasicInfo /> */}
                <AmbassddorBasicInfo/>
              
            </div>
            <EnviornmentDetail/>
              


        </>
    );
}

export default AddAmbasddar;
