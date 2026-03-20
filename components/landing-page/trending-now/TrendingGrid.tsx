import TrendingCard from "./TrendingCard"
import trendingNowData from "./trendingNowData"


const TrendingGrid = () => {
  return (
    <div className="grid grid-cols-1 space-y-7">
      {
        trendingNowData.map(data => (
          <TrendingCard key={data.image} alt={data.image} src={data.image} />
        ))
      }
    </div>
  )
}

export default TrendingGrid