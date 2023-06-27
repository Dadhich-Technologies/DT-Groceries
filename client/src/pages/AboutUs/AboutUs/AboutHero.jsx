import background from './Images/AboutUs.jpg'
import './aboutus.css'
const AboutHero = () => {
  return (
    <div className=" w-full h-screen items-center flex bg-cover bg-center bg-fixed " style={{ backgroundImage:`url(${background})` }}>
        <div className="overlay w-screen h-screen absolute left-0 top-0 bg-black opacity-40 z-1"></div>  
        <div className="about">
          <h1 className='text-center'>AboutUs</h1>
          </div> 
    </div>
  )
}

export default AboutHero