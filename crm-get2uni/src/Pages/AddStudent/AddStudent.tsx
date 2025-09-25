import { ProgressDemo } from '@/components/common/ProgressBar';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import StatusDetail from './StatusDetail';
import { BasicInfo } from './BasicInfo';
import { useState } from 'react';
import EnrollmentDetails from './EnrollmentDetails';
import StartTerm from './StartTerm';
import { useNavigate } from 'react-router-dom';



const array = [<BasicInfo />, <StatusDetail />, <EnrollmentDetails />, <StartTerm />]

const AddStudent = () => {



    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [progress, setProgress] = useState(25);

    const handleNext = () => {
        if (value < array.length && value !== array.length - 1) {
            setValue(value + 1)
            console.log(value);
            setProgress(progress + 25)
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
            setProgress(progress - 25)
        }
        else {
            navigate('/')
        }
    }

    const { t } = useTranslation();
    return (
        <>
            <div className='flex justify-center items-center'>
                <ProgressDemo value={progress} />

            </div>

            <div className='border rounded-sm px-6 py-7  m-8'>
                {/* <BasicInfo /> */}
                {array[value]}
                {/* <StatusDetail/> */}
                <div className="flex justify-between mt-4">
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
                            {value === 3 ? "Submit" : t('auth.next')}

                        </Button>

                    </div>
                </div>

            </div>

        </>
    );
}

export default AddStudent;
