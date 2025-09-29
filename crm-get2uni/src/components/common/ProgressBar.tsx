
import * as React from "react"

import { Progress } from "@/components/ui/progress"

type progressProps = {
  value: number,
  height?:string
  width?:string
}

export function ProgressDemo({value,height,width}:progressProps) {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={value} className="w-[40%] h-4"
  style={{height:height||"16px",
width:width||"40%"

  }}
  />
}


// import React, { useState } from "react"

// const Step1 = () => <div className="p-4">👉 Step 1: Add Basic Info</div>
// const Step2 = () => <div className="p-4">👉 Step 2: Add Student Details</div>
// const Step3 = () => <div className="p-4">👉 Step 3: Review & Submit</div>

// const AddStudent = () => {
//   const [step, setStep] = useState(0)

//   // all steps in an array
//   const steps = [<Step1 key="1" />, <Step2 key="2" />, <Step3 key="3" />]

//   return (
//     <div className="w-full max-w-md mx-auto p-6 border rounded-md">
//       {/* show current step */}
//       {steps[step]}

//       {/* navigation buttons */}
//       <div className="flex justify-between mt-6">
//         <button
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//           onClick={() => setStep((s) => s - 1)}
//           disabled={step === 0}
//         >
//           Previous
//         </button>

//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//           onClick={() => setStep((s) => s + 1)}
//           disabled={step === steps.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   )
// }

// export default AddStudent
