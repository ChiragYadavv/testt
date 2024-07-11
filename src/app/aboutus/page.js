import React from 'react'
import Form from '../components/Form'
import './aboutus.css'
const page = () => {
  return (
    <div>
      <div className="bgcontainer"><h1>About Us</h1></div>
      {/* <div style={{position: 'fixed', zIndex: -10, top: '-5px'}}><img src="/assets/servicebg.jpg" style={{width: '100%'}} alt="" /></div> */}
      {/* <div className="aboutus"><div className="about">ABOUT</div><div className="us"> US</div></div> */}
      <div className="whatareweheading"><h1>What Are We ?</h1></div>
      <div className="whatarewe">
        <div className="whatareweimg">
          <img src="/assets/bg-image.jpg" alt="" />
        </div>
        <div className="whatarewetext">
          Welcome to our detailing studio, where precision meets passion. We specialize in restoring and enhancing the beauty of your vehicle, inside and out. From meticulous exterior paint correction to luxurious interior rejuvenation, our expert team utilizes the latest techniques and premium products to ensure your car leaves looking better than the day it rolled off the lot. Experience the ultimate in automotive care and attention to detail at our studio.
        </div>
      </div>

      <div className="why">
        <div className="text">
          <h1>Why Choose Us ?</h1>
        </div>
        <div className="grid">
          <div className="gridbox">
            <div className="gridimg"><img src="/assets/medal.png" alt="" /></div>
            <div className="gridtext">
              <h2>Premium Quality<br />Service</h2>
            </div>
          </div>
          <div className="gridbox">
            <div className="gridimg"><img src="/assets/elite.png" alt="" /></div>
            <div className="gridtext">
              <h2>Trained Professionals</h2>
            </div>
          </div>
          <div className="gridbox">
            <div className="gridimg"><img src="/assets/carinsured.png" alt="" /></div>
            <div className="gridtext">
              <h2>Licensed And <br /> Insured</h2>
            </div>
          </div>
          <div className="gridbox">
            <div className="gridimg"><img src="/assets/moneycar.png" alt="" /></div>
            <div className="gridtext">
              <h2>Flexible Packages</h2>
            </div>
          </div>
          <div className="gridbox">
            <div className="gridimg"><img style={{filter: 'invert(0)'}} src="/assets/clean.png" alt="" /></div>
            <div className="gridtext">
              <h2>Quality Products</h2>
            </div>
          </div>
          <div className="gridbox">
            <div className="gridimg"><img src="/assets/toptier.png" alt="" /></div>
            <div className="gridtext">
              <h2>Top Tier Service <br /> Guaranteed</h2>
            </div>
          </div>
          <div className="gridbox">
            <div className="gridimg"><img src="/assets/transparency.png" alt="" /></div>
            <div className="gridtext">
              <h2>Transparency</h2>
            </div>
          </div>
          <div className="gridbox">
            <div className="gridimg"><img src="/assets/advanced.png" alt="" /></div>
            <div className="gridtext">
              <h2>Advance Technology</h2>
            </div>
          </div>
          <div className="gridbox">
            <div className="gridimg"><img src="/assets/aftersales.png" alt="" /></div>
            <div className="gridtext">
              <h2>After Sales <br /> Support</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
