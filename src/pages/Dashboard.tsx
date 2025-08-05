import { SectionCards } from "@/components/Dashboard/SectionCards"
import { ChartAreaInteractive } from "@/components/Dashboard/ChartAreaInteractive"
import { DataTable } from "@/components/Dashboard/DataTable"
import data from "../data/data.json"

export default function DashboardPage() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data} />
      </div>
    </div>
  )
}
