import MoreReasonsComponent from "./MoreReasonsComponent"
import { moreReasonsData } from "./moreReasonsData"


const MoreReasonsSection = () => {
  return (
    <div className="flex flex-col gap-12 mt-22">
      <h3 className="text-3xl font-semibold text-center">More Reasons to Join</h3>
      {
        moreReasonsData.map(data => (
          <MoreReasonsComponent
            key={ data.description }
            image={data.image}
            description={data.description}
            headerText={data.headerText}
          />
        ))
      }
    </div>
  )

}

export default MoreReasonsSection