

type OnboardCardProps = {
    title?:string,
    description?:string
}


function OnboardCard({title,description}:OnboardCardProps) {
  return (
   <>

    <div className="border rounded-sm p-4 min-w-[276px]">
        <div>
    <h1>
        {title}
    </h1>
    <p>
        {description}
    </p>
        </div>
        <div className="flex justify-end">
        <p>25%</p>
        </div>
    </div>
   </>
  )
}

export default OnboardCard