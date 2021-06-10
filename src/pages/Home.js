import React from "react"
import FeaturedBanner from "../components/HomeComponents/FeaturedBanner"
import NewReleases from "../components/HomeComponents/NewReleases"
import "../styles/pages/Home.css"

function Home() {
    return (
        <div>
            <FeaturedBanner />
            <NewReleases />
        </div>
    )
}

export default Home