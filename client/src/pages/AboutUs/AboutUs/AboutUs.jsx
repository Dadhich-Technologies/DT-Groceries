import AboutHero from './AboutHero'

import OurFeatures from './OurFeatures'

import OurQuality from './OurQuality'
import Founders from './Founders'
import Review from './Review'
import Navbar from '../../../Layout/Navbar/Navbar'
import Footer from '../../../Layout/Footer/Footer'

export default function AboutUs() {
  return (
    <>
    <div>
        <Navbar/>
        <AboutHero/>
        <OurFeatures/>
        <OurQuality/>
        <Review/>
        <Founders/>
    </div>
    <Footer/>
    </>
  )
}
