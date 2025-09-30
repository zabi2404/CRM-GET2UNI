import GrowthBadge2 from "@/components/common/GrowthBadge2"


type OnboardCardProps = {
    title?:string,
    description?:string
}


function OnboardCard({title,description}:OnboardCardProps) {
  return (
   <>

    <div className="border rounded-sm p-4 w-full min-w-[250px] bg-card
   
    ">
        <div>
    <h1 className="font-semibold">
        {title}
    </h1>
    <p className="text-lg text-secondary-foreground font-[500]">
        {description}
    </p>
        </div>
        <div className="flex justify-end">
        <GrowthBadge2 value="12%"/>
        </div>
    </div>
   </>
  )
}

export default OnboardCard