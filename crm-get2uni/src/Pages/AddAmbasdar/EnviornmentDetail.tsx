import React from 'react'
import AddStudentHeader from '../AddStudent/AddStudentHeader'
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CountrySelect } from '@/components/common/CountrySelectInput';
import { useNavigate } from 'react-router-dom';
function EnviornmentDetail() {

    const navigate = useNavigate();
    return (
        <>


            <div className='border rounded-sm px-6 py-7  m-8'>

                <AddStudentHeader
                    heading='Environment details'
                />
                <div className="grid gap-3 w-full">
                    <Label htmlFor="LastName">Country</Label>
                    <CountrySelect />
                </div>

                <div className="flex justify-between mt-4">
                    <Button type="submit" variant={"outline"} className="w-fit cursor-pointer"
                    onClick={()=>{
                        navigate('/')
                    }}
                    >
                        Cancel
                    </Button>


                    <Button type="submit" className="w-fit cursor-pointer">
                        Save Ambassddor
                    </Button>



                </div>

            </div>
        </>
    )
}

export default EnviornmentDetail