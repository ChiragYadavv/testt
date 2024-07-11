import React from 'react'
import Form from '../components/Form'
import "./contactus.css"
const page = () => {
  return (
    <div>
      <div id="backgrounds">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/Urban+Detailing/@28.4014441,77.0158795,17z/data=!3m1!4b1!4m6!3m5!1s0x390d2394bfd50957:0x3660d61e1f17278e!8m2!3d28.4014441!4d77.0184544!16s%2Fg%2F11svvvg25t?entry=ttu">
          <img src="./assets/maps.png" alt="" />
        </a>
      </div>
      <div id="contactholder">
        <div id="contacts">
          <div><h1>Get In Touch</h1></div>
          <div className="contactmethodsss">
            <div className="banners">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Urban+Detailing/@28.4014441,77.0158795,17z/data=!3m1!4b1!4m6!3m5!1s0x390d2394bfd50957:0x3660d61e1f17278e!8m2!3d28.4014441!4d77.0184544!16s%2Fg%2F11svvvg25t?entry=ttu">
                <div className="icon">
                  <img src="./assets/pindrop.svg" alt="" />
                </div>
              </a>
              <div className="details">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Urban+Detailing/@28.4014441,77.0158795,17z/data=!3m1!4b1!4m6!3m5!1s0x390d2394bfd50957:0x3660d61e1f17278e!8m2!3d28.4014441!4d77.0184544!16s%2Fg%2F11svvvg25t?entry=ttu">
                  Sector-71, SPR Road, near M3M Broadway, Gurugram
                </a>
              </div>
            </div>
            <div className="banners" id="phones">
              <a href="tel:8383084878">
                <div className="icon">
                  <img src="./assets/landline.svg" alt="" />
                </div>
              </a>
              <div className="details">
                <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>

                <a href="tel:8383084878">+91-83830 84878</a>
                <a href="tel:9999525297">+91-99995 25297</a>
                </div>
              </div>
            </div>
            <div className="banners" id="emails">
              <a href="mailto:urbandetailing29@gmail.com?subject=Mere%20Dikkat%20Ho%20Rhi%20Hai&body=Message">
                <div className="icon">
                  <img src="./assets/email.svg" alt="" />
                </div>
              </a>
              <div className="details" style={{ textTransform: 'none' }}>
                <a href="mailto:urbandetailing29@gmail.com?subject=Mere%20Dikkat%20Ho%20Rhi%20Hai&body=Message">
                  urbandetailing29@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="socials">
        <h1>Our Socials</h1>
        <div className="contactmethodsss">
          <div className="banners">
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+918383084878">
              <div id="whatsapp" className="icon">
                <img src="./assets/whatsapp.png" alt="" />
              </div>
            </a>
            <div className="details">
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+918383084878">
                8383084878
              </a>
            </div>
          </div>
          <div className="banners">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_urban__detailing/">
              <div className="icon">
                <img src="./assets/instagram.png" alt="" />
              </div>
            </a>
            <div className="details">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_urban__detailing/">
                _urban__detailing
              </a>
            </div>
          </div>
          <div className="banners">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/UrbanDetailing0">
              <div className="icon">
                <img src="./assets/facebook.png" alt="" />
              </div>
            </a>
            <div className="details">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/UrbanDetailing0">
                UrbanDetailing0
              </a>
            </div>
          </div>
        </div>
      </div>
      <Form title="Reach Out To Us" />
    </div>
  )
}

export default page
