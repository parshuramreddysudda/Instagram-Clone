import Stories from "./Stories"
import Posts from './Posts'
import MiniProfile from "./MiniProfile"
import Suggestions from "./Suggestions"

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">


            {/* Section */}
            <section className="col-span-2">
                {/* {Stories} */}
                <Stories />
                <Posts />
            </section>


            {/* Section */}
            <section className=" hidden xl:inline-grid md:col-span-1 ">
                {/* Mini Profile */}
                <div className="fixed">
                    <MiniProfile />
                    <Suggestions />
                </div>
            </section>

            {/* Suggestion  */}
        </main>
    )
}

export default Feed
