import backgroundImage from "./assets/background.png"
import { Card } from "@/components/ui/card"

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative p-16"
    >
      {/* Cards container - 60% of screen height */}
      <div className="h-[70vh] grid grid-cols-[25%_50%_25%] gap-4">
        {/* Left column - 2 cards */}
        <div className="flex flex-col gap-4 h-full">
          <Card className="h-1/2" />
          <Card className="h-1/2" />
        </div>

        {/* Middle column - 1 card */}
        <div className="h-full">
          <Card className="h-full" />
        </div>

        {/* Right column - 2 cards */}
        <div className="flex flex-col gap-4 h-full">
          <Card className="h-1/2" />
          <Card className="h-1/2" />
        </div>
      </div>
    </div>
  )
}

export default App
