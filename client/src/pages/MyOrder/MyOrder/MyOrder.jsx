import React from 'react'
import './myorder.css'
import Footer from '../../Layout/Footer/Footer'
import OrderNav from './OrderNav'
import image from '../Shop/Image/Rectangle.jpg'

export default function MyOrder() {
  return (
    <>
      <div className="all">
        <OrderNav />
        <div className="myorder">
          <div className="first-page">
            <h1 className='text-white font-serif font'>My Order</h1>
          </div>
          <div className="list">
            <div className="list-item">
              <div className="items">
                <div className="photo-item">
                  <img className='img2' style={{ height: 380, width: 300 }} src={image} />
                </div>
                <div className="item-features">
                  <h2 className='color'>Red Chilies</h2>
                  <h4 className='my-2 color2'>Amazing Spices of India with beutiful texture of taste</h4>
                </div>
              </div>
              <div className='transit'>
                <h3 className='color3' >Status</h3>
                <b><h4 className='my-3'>In Transit</h4></b>
                <b><h4 className='my-2'>Quantity:3kg | Price:300 Rs</h4></b>
              </div>
              <div className="subscribe">
              <h3 className='color3'>Exepted Date of Dilivery</h3>
                  <b><h3 className='my-2'>2 July 2023</h3></b>
                  <button className='track my-10 text-white'><b>Track My Order</b></button>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="list-item">
              <div className="items">
                <div className="photo-item">
                  <img className='img2' style={{ height: 380, width: 300 }} src={image} />
                </div>
                <div className="item-features">
                  <h2 className='color'>Red Chilies</h2>
                  <h4 className='my-2 color2'>Amazing Spices of India with beutiful texture of taste</h4>
                </div>
              </div>
              <div>
                <div className='transit'>
                  <h3 className='color3' >Status</h3>
                  <b><h4 className='my-3'>In Transit</h4></b>
                  <b><h4 className='my-2'>Quantity:3kg | Price:300 Rs</h4></b>
                </div>
              </div>
              <div className="subscribe1">
                  <h3 className='color3'>Exepted Date of Dilivery</h3>
                  <b><h3 className='my-2'>2 July 2023</h3></b>
                  <button className='track my-10 text-white'><b>Track My Order</b></button>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
