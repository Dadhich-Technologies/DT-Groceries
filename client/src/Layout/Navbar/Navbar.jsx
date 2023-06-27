import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartI';
import { LoginContext } from '../../Contexts/Login';
import './Navbar.css'


const Navbar = ({bgcolor='white', logocolor='green', linkscolor='black'}) => {
  const { open, setOpen } = useContext(CartContext);
  const { open:loginOpen, handleClickOpen } = useContext(LoginContext);
  const [mobilemenu, setmobilemenu] = useState(false)


  const handleCartClick = () => {
    console.log(open)
    setOpen(!open);
  };

  const mobiletoggle = () =>{
    setmobilemenu(!mobilemenu)
  }

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
    <>

    <motion.section 
          className={`w-full h-[80px] fixed top-0 left-0 z-30 Navbar backdrop-filter backdrop-blur-sm bg-opacity-90 ${`bg-${bgcolor}`}   ${!isscrolled?"backdrop-filter backdrop-blur-xl bg-opacity-90 bg-primary-green shadow-lg ":""}`}
          animate={{ opacity: [0,1], y:['-100px','0px']}}
          transition={{ duration: 0.5 }}>
      <div className=" container px-4 justify-between lg:px-4   flex items-center  mx-auto  h-full">
        <div className=" flex gap-5 md:gap-7 lg:gap-9">
          <h4 className={`  font-bold  ${`text-${logocolor}`} ${!isscrolled?" text-white ":""}`}>DT:Grocery</h4>
          <ul className={` gap-3 items-center hidden md:flex ${`text-${linkscolor}`} ${!isscrolled?" !text-black   ":""}`}>
            <li>
              <NavLink to={"/"} >Home</NavLink>
            </li>
            <li>
              <NavLink to="">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
        
        <div className= {`hidden md:flex gap-2 ${!isscrolled?" !text-black ":""}  ${`text-${linkscolor}`}`}>
         
          
          <a href="" aria-label='SearchIcon' className=' cursor-pointer hover:text-primary-green transition-transform'><SearchIcon/></a> 
          <a href=""  aria-label='Account' className=' cursor-pointer hover:text-primary-green transition-transform'><PersonOutlineIcon/></a>
          <a href="" aria-label='Favorites' className=' cursor-pointer hover:text-primary-green transition-transform'><FavoriteBorderIcon/></a>
          <a onClick={()=>{handleCartClick()}} aria-label='Your Cart' className=' cursor-pointer hover:text-primary-green transition-transform'><LocalMallIcon/></a>
        </div>
        <div onClick={mobiletoggle} aria-label='Menu' className=' block md:hidden text-white z-30 cursor-pointer '>
            <a>
            <MenuIcon/>
            </a>
        </div>
      </div>
      <div className={`${!mobilemenu?'clip-hidden':'clip-visible'} md:hidden absolute flex w-full backdrop-filter mobile_menu  backdrop-blur-2xl top-0 bg-opacity-97 bg-primary-green shadow-lg  h-screen  justify-center `}>
    <ul className={` gap-3 items-center  md:flex flex-col text-white p-5 `}>
            <li className=' h-5 text-3xl mt-7 '>
              <NavLink onClick={()=>{setmobilemenu(false)}} to={"/"} >Home</NavLink>
            </li>
            <li className=' h-5 text-3xl mt-7 '>
              <NavLink to="" onClick={()=>{setmobilemenu(false)}}>Shop</NavLink>
            </li>
            <li className=' h-5 text-3xl mt-7 '>
              <NavLink to="/contact" onClick={()=>{setmobilemenu(false)}}>Contact Us</NavLink>
            </li>
            <li className=' h-5 text-3xl mt-7'>
              <NavLink to="/about" onClick={()=>{setmobilemenu(false)}}>About Us</NavLink>
            </li>
            <li className=' h-5 text-3xl mt-7'>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li className=' h-5 text-3xl mt-7 flex gap-2'>
          <a href="" className=' cursor-pointer hover:text-primary-green transition-transform'><FavoriteBorderIcon/></a>
          <a href=""className=' cursor-pointer hover:text-primary-green transition-transform'><SearchIcon/></a> 
              
          <a onClick={()=>{handleCartClick()}} className=' cursor-pointer transition-transform'><LocalMallIcon/></a>
            </li>
          </ul>
    </div>
    </motion.section>
   
    </>
  );
};

export default Navbar;
