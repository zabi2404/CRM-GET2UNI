

function Line({color}:{color:string}) {
    return (
        <div className="flex flex-col items-center space-y-0 p-2 px-4 -mb-1">
            <div className="h-[6px] w-[6px] rounded-full opacity-80 "
            style={{
                backgroundColor: `${color}`
            }}
            >
            </div>
            <div className="h-13 w-px bg-gradient-to-b "
              style={{
                backgroundColor: `${color}`
            }}
            >
            </div>
            <div className="h-[6px] w-[6px] rounded-full opacity-80"
              style={{
                backgroundColor: `${color}`
            }}
            >
            </div>
        </div>
    )
}

export default Line