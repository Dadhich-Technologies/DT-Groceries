import React from 'react'
import User from './Images/profile.png'
import facebook from './Images/facebook.png'
import insta from './Images/insta.png'
import './aboutus.css'

export default function Founders() {
    return (
        <>
            <div className="founders">
                <h6 className="text-center mt-[80px] text"><b>Our Features</b></h6>
                <h3 className='text-center flex justify-center my-3'>We're supply chain</h3>
                <div className="profile mt-[50px]">
                    <div>
                        <img style={{ height: 310, width: 310 }} className='user mx-5' src={User} alt="profile" />
                        <p className='text-center mr-[-5] my-5'> Ana Medsen</p>
                        <p style={{ color: "#52AF1F" }} className='text-center mr-[-5] my-5'> Co Founder</p>
                        <div className='facebook'>
                        <img className='mx-2' style={{height:20,width:20}} src={ facebook} alt="" />
                        <img className='mx-2' style={{height:20,width:20}} src={ insta} alt="" />
                        </div>
                    </div>
                    <div>
                        <img style={{ height: 310, width: 310 }} className='user' src={User} alt="profile" />
                        <p className='text-center mr-[-5] my-5'> Terry Kenter</p>
                        <p style={{ color: "#52AF1F" }} className='text-center mr-[-5] my-5'> Desginer</p>
                        <div className='facebook'>
                        <img className='mx-2' style={{height:20,width:20}} src={facebook } alt="" />
                        <img className='mx-2' style={{height:20,width:20}} src={insta} alt="" />
                        </div>
                    </div>
                    <div className='d-flex'>
                        <img style={{ height: 310, width: 310 }} className='user mx-5' src={User} alt="profile" />
                        <div>
                            <p className='text-center mr-[-5] my-5'>Ruben Donin</p>
                            <p style={{ color: "#52AF1F" }} className='text-center mr-[-5] my-5'> Makerter</p>
                            <div className='facebook'>
                            <img className='mx-2' style={{height:20,width:20}} src={facebook} alt="" />
                            <img className='mx-2' style={{height:20,width:20}} src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
