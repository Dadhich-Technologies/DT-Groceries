
import ShopHero from './ShopHero'
import Filter from './Filter'

import Navbar from '../../../Layout/Navbar/Navbar'
import Footer from '../../../Layout/Footer/Footer'

export default function Shop() {
  return (
    <>
        <div>
            <Navbar/>
            <ShopHero/>
            <Filter/>
            <Footer/>
        </div> 
    </>
  )
}
