import React, { useState } from 'react'
import Hero_section from '../components/hero_section/Hero_section'
import Job_description_section from '../components/discover_limitless/Job_description_section'
import CandidatesScore from '../components/b2b_solutions/CandidatesScore'
import Summary from '../components/summary_cv_jd_match/Summary'
import Workflow from '../components/workflow/Workflow'
import Flexible_approval from '../components/flexible_approval/Flexible_approval'
import CustomerSlider from '../components/slider_section/CustomerSlider'
import Footer from '../components/footer_section/Footer'
import Curve from '../components/curve/Curve'
import Curve3 from '../components/curve3_for_demo/Curve3'

const Home = () => {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <Hero_section showVideo={showVideo} setShowVideo={setShowVideo} />
            <Curve showVideo={showVideo} setShowVideo={setShowVideo} />
            <Job_description_section />
            <CandidatesScore />
            {/* <Summary /> */}
            {/* <Workflow /> */}
            {/* <Flexible_approval /> */}
            {/* <CustomerSlider /> */}
            <Footer />
        </>
    )
}

export default Home