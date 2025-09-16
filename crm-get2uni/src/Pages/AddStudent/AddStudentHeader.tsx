
type AddStudentHeader={
    title?:string,
    heading?:string
}
const AddStudentHeader = ({
    title,heading
}:AddStudentHeader) => {
    return (
       <>
         <div className="flex flex-col   text-start">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                       {heading}
                    </p>
                </div>
       </>
    );
}

export default AddStudentHeader;
