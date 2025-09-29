import { RecentActivityTable } from '@/components/Tables/RecentActivityTable'

function RecentActivitySection() {
  return (
    <>
     <div className="mt-4 border p-4 rounded-md">
                <h1>Recent Activities</h1>
                <div className="sm:m-4">
                    <RecentActivityTable />
                </div>
            </div>
    </>
  )
}

export default RecentActivitySection