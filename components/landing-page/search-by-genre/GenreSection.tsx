import SectionHeader from "../shared-components/SectionHeader";
import SearchByGenreSlideShow from "./GenreSlideShow";




export default function SearchByGenreSection() {
  return (
    <div className="mt-36">
      <SectionHeader title="Search by Genre" description="When it comes to discovering new content, searching by genre can be a great way to find something that fits your preferences." buttonText="Find More" />

      <SearchByGenreSlideShow />
    </div>
    
  )
}
