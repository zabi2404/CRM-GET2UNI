import { ProgressDemo } from '@/components/common/ProgressBar';
import React from 'react';
import { BasicInfo } from './BasicInfo';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import StatusDetail from './StatusDetail';

const AddStudent = () => {

    const { t } = useTranslation();
    return (
        <>
            <div className='flex justify-center items-center'>
                <ProgressDemo value={35} />

            </div>

            <div className='border rounded-sm px-6 py-7  m-8'>
                {/* <BasicInfo /> */}
                <StatusDetail/>
                <div className="flex justify-between mt-4">
                    <Button type="submit" variant={"outline"} className="w-fit cursor-pointer">
                        Cancel
                    </Button>

                    <div className="flex justify-center items-center gap-4">
                        <Button type="submit" className="w-fit cursor-pointer">
                            Save as Draft
                        </Button>
                        <Button type="submit" className="w-fit cursor-pointer">
                            {t('auth.next')}
                        </Button>

                    </div>
                </div>

            </div>

        </>
    );
}

export default AddStudent;
