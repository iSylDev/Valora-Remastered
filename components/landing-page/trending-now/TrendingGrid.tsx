import TrendingCard from "./TrendingCard"
import trendingNowData from "./trendingNowData"


const TrendingGrid = () => {
  return (
    <div className="flex flex-wrap gap-7 justify-center">
      {
        trendingNowData.map(data => (
          <TrendingCard key={data.image} alt={data.image} src={data.image} />
        ))
      }
    </div>
  )
}

export default TrendingGrid