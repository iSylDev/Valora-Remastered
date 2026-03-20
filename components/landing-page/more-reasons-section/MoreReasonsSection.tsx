import MoreReasonsComponent from "./MoreReasonsComponent"
import { moreReasonsData } from "./moreReasonsData"


const MoreReasonsSection = () => {
  return (
    <div className="mt-30 z-50">
      <h3 className="text-3xl font-semibold text-center lg:text-left mb-12 lg:text-4xl">More Reasons to Join</h3>
      <div className="flex flex-col gap-12  lg:flex-row">
        {
          moreReasonsData.map(data => (
            <MoreReasonsComponent
              key={data.description}
              image={data.image}
              description={data.description}
              headerText={data.headerText}
            />
          ))
        }
      </div>
    </div >
  )

}

export default MoreReasonsSection