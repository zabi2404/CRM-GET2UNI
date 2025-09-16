import { UpdateForm } from '@/components/common/UpdateForm';
import { Button } from '@/components/ui/button';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Setting = () => {

    const input = useRef<null|HTMLInputElement>(null)
      const { t } = useTranslation();
    return (
      <>
      
      <div className='grid lg:grid-cols-[60%_40%] gap-4 px-8
      xsm:grid-cols-1
      '>

      <UpdateForm/>
      <div className='flex items-center justify-center flex-col gap-4 
      xsm:-order-1 
      lg:order-1
      '>
       <div className='max-w-[300px] rounded-sm overflow-hidden object-cover'>
        <img src="/b2e6927ed540da897e8cd5465aac6a30.jpg" alt="" />
       </div>
       <input ref={input} type="file" className='hidden'/>
       <Button className="w-fit cursor-pointer"
       onClick={()=>{
        if(input.current){
            input.current.click()
            
        }
       }}
       >
         {t('settings.uploadProfile')}
        </Button>
      </div>

      </div>
      </>
    );
}

export default Setting;
