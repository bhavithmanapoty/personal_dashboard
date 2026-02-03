import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function YearlyProgressCard({ className }: { className?: string }) {
  // Calculate year progress percentage
  const now = new Date()
  const currentYear = now.getFullYear()
  const startOfYear = new Date(currentYear, 0, 1)
  const endOfYear = new Date(currentYear + 1, 0, 1)
  
  const totalDays = Math.floor((endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24))
  const daysElapsed = Math.floor((now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24))
  const percentage = (daysElapsed / totalDays) * 100

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-white">Yearly Progress</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center flex-1">
        <div style={{ width: "80%", maxWidth: "200px" }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage.toFixed(1)}%`}
            styles={{
              root: {},
              path: {
                stroke: "#3D5739",
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke: "rgba(61, 87, 57, 0.2)",
              },
              text: {
                fill: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default YearlyProgressCard
