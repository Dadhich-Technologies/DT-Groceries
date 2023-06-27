import background from '../../../assets/Home/bg.webp'
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion'
const ShopHero = () => {
    return (
        <>
        <div className=" w-full h-screen items-center flex bg-cover bg-center bg-fixed " style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay w-screen h-screen absolute left-0 top-0 bg-black opacity-30 z-1"></div>
            <div className="container mx-auto mt-[80px]  ">
                <div className="content max-w-[600px] flex flex-col gap-5    px-7 lg:px-12 z-20">
                    <motion.h1
                        initial={{ opacity: 0, x: '-100px' }}
                        animate={{ opacity: 1, x: '0px' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-white font-medium z-20 ">Shop</motion.h1>
                    <div className="menu flex items-center">
                        <div>
                            <p className="text-white z-20 2xl:text-step-0 text-step--1">Shop</p>
                        </div>
                        <div className="flex items-center ml-2">
                            <IoIosArrowForward className="text-white z-20 2xl:text-step-0 text-step--1" aria-hidden="true" />
                            <p className="text-white z-20 2xl:text-step-0 text-step--1 ml-2">Home</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default ShopHero