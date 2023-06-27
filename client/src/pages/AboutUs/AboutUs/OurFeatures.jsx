import AboutUs from './Images/AboutUs.jpg'
import './aboutus.css'
export default function OurFeatures() {
  return (
    <>
    <div>
        <h6  className="text-center mt-[80px] text"><b>Our Features</b></h6>
        <h3 className='text-center flex justify-center my-3'>Focusing on Quality Material,Good Design</h3>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum fugit nam eaque sapiente earum maxime culpa aut iusto quam suscipit doloribus totam ipsa sint sed quisquam natus, enim exercitationem!</p>
   <div className='image'>
    <div className='my-5 mx-5'>

        <img className='width' src={AboutUs} alt="" />
    </div>
    <div className='my-5 mx-5'>

        <img className='width' src={AboutUs} alt="" />
    </div>
   </div>
    
    </div>
    </>
  )
}
