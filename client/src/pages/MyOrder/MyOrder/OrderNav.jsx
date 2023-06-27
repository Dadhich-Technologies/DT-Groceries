import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const OrderNav = () => {

  
  const [isscrolled, setisscrolled] = useState(true);

  const changeColor = () => {
    if (window.scrollY <= 1) {
      setisscrolled(true);
      
    } else {
      setisscrolled(false);
    }
  };
  window.addEventListener("scroll", changeColor, true);

  return (
    <section 
          className={`w-full h-[80px]  z-30 Navbar  `}
          // initial={{ opacity: 0, y:'-100px',backgroundColor:'transparent'}} 
          >
      <div className=" bg-white container px-4 justify-between lg:px-4   flex items-center  mx-auto  h-full">
        <div className=" flex gap-5 md:gap-7 lg:gap-9">
          <h4 className={`  font-bold `}>DT:Grocery</h4>
          <ul className={` gap-3 items-center hidden md:flex text-black`}>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/MyOrder">Contact Us</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
          </ul>
        </div>
        <div className= {`hidden md:flex gap-2 mx-10 `}>
          {/* <a href=""><SearchIcon/></a> */}
          {/* <a href=""><PersonOutlineIcon/></a> */}
          <a className='mx-4' href=""><FavoriteBorderIcon/></a>
          <a href=""><LocalMallIcon/></a>
        </div>
        <div className=' block md:hidden'>
            <a>
            <MenuIcon/>
            </a>
        </div>
      </div>
    </section>
  );
};

export default OrderNav;
