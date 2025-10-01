

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// import { useEffect, useRef, useState } from "react"

export default function Testign() {
 


  return (
   <></>
  )
}



//check event if any event happend the timer reset



// const [fields, setFields] = useState<string[]>([""]);

// // Update field value
// const handleChange = (index: number, value: string) => {
//   const updated = [...fields];
//   updated[index] = value;
//   setFields(updated);
// };

// // Add new field
// const handleAdd = () => {
//   setFields([...fields, ""]);
// };

// // Remove a field
// const handleRemove = (index: number) => {
//   setFields(fields.filter((_, i) => i !== index));
// };

// return (
//   <div className="space-y-3">
//     {fields.map((field, index) => (
//       <div key={index} className="flex items-center gap-2">
//         <Input
//           placeholder={`Field ${index + 1}`}
//           value={field}
//           onChange={(e) => handleChange(index, e.target.value)}
//         />
//         <Button
//           type="button"
//           variant="destructive"
//           size="sm"
//           onClick={() => handleRemove(index)}
//         >
//           ✕
//         </Button>
//       </div>
//     ))}

//     <Button type="button" variant="outline" onClick={handleAdd}>
//       ➕ Add Field
//     </Button>

//     {/* Debug: Show state */}
//     <pre className="mt-4 p-2 bg-gray-100 rounded">
//       {JSON.stringify(fields, null, 2)}
//     </pre>
//   </div>
// );