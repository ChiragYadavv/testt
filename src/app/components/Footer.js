"use client"
import React from 'react'
const Footer = () => {
    function queryHBhaiKo() {
        let query = document.getElementById('formdiv');
    
        if(query){
            window.scrollTo({
                top: query.offsetTop - 300,
                behavior: 'smooth' // Optional: smooth scrolling effect
            });
        } else {
            openBlur();
        }
    
        // query.style.scale = 1.4
    }
  return (
    <div >
        <footer >
        <div id="flexrow">
            <div className="flexcol">
                <div id="footericon"><img src="./assets/pixelcut-export.png" alt=""/></div>
                <div id="footersocials">
                    <div className="footersocial"><a target="_blank" href="https://www.instagram.com/_urban__detailing/"><img src="./assets/instagram.png" alt=""/></a></div>
                    <div className="footersocial"><a target="_blank" href="https://wa.me/+918383084878"><img src="./assets/whatsapp.png" alt=""/></a></div>
                    <div className="footersocial"><a target="_blank" href="https://www.facebook.com/UrbanDetailing0"><img src="./assets/facebook.png" alt=""/></a></div>
                    <div className="footersocial"><a target="_blank" href="https://www.google.com/maps/place/Urban+Detailing/@28.4014441,77.0158795,17z/data=!3m1!4b1!4m6!3m5!1s0x390d2394bfd50957:0x3660d61e1f17278e!8m2!3d28.4014441!4d77.0184544!16s%2Fg%2F11svvvg25t?entry=ttu"><img src="./assets/pdcopy.svg" alt=""/></a></div>
                </div>
            </div>
            <div className="flexcol">
                    <div className="footerheading">Contact Us:</div>
                    <div className="contactmethods">
                        <div className="contacticon"><img src="./assets/landline.svg" alt=""/></div>
                        <div className="contactText"><a href="tel:83830 84878">Call Us: 8383084878</a></div>
                    </div>
                    <div className="contactmethods">
                        <div className="contacticon"><img src="./assets/whatsapp.svg" alt=""/></div>
                        <div className="contactText" id="phones"> <a target="_blank" href="https://wa.me/+919999525297">Text Us: 9999525297</a></div>
                    </div>
                    <div className="contactmethods">
                        <div className="contacticon"><img src="./assets/email.svg" alt=""/></div>
                        <div className="contactText" id="emails"><a target="_blank" href="mailto:urbandetailing29@gmail.comsubject=Mere%20Dikkat%20Ho%20Rhi%20Hai&body=Message" >Email Us: urbandetailing29@gmail.com</a></div>
                    </div>
                    <div className="contactmethods">
                        <div className="contacticon"><img src="./assets/pindrop.svg" alt=""/></div>
                        <div className="contactText"><a target="_blank" href="https://www.google.com/maps/place/Urban+Detailing/@28.4014441,77.0158795,17z/data=!3m1!4b1!4m6!3m5!1s0x390d2394bfd50957:0x3660d61e1f17278e!8m2!3d28.4014441!4d77.0184544!16s%2Fg%2F11svvvg25t?entry=ttu">Sector-71, SPR Road, near M3M Broadway, Gurugram</a></div>
                    </div>
                    <div className="contactmethods" >
                        <div className="contacticon" ><img src="./assets/enquire.svg" alt=""/></div>
                        <div className="contactText" onClick={queryHBhaiKo}>Have An Enquiry?</div>
                    </div>
            </div>

            <div className="flexcol">
                    <div className="footerheading">Our Services:</div>
                    <div className="servicemethods">
                        <div className="contacticon"><img src="./assets/side.svg" alt=""/></div>
                        <div className="contactText">Paint Protection Film</div>
                    </div>
                    <div className="servicemethods">
                        <div className="contacticon"><img src="./assets/side.svg" alt=""/></div>
                        <div className="contactText">Ceramic Coating</div>
                    </div>
                    <div className="servicemethods">
                        <div className="contacticon"><img src="./assets/side.svg" alt=""/></div>
                        <div className="contactText">Engine Dressing</div>
                    </div>
                    <div className="servicemethods">
                        <div className="contacticon"><img src="./assets/side.svg" alt=""/></div>
                        <div className="contactText">Wrapping</div>
                    </div>
                    <div className="servicemethods">
                        <div className="contacticon"><img src="./assets/side.svg" alt=""/></div>
                        <div className="contactText">Maintenance Wash</div>
                    </div>
                    <div className="servicemethods">
                        <div className="contacticon"><img src="./assets/side.svg" alt=""/></div>
                        <div className="contactText">Other Services</div>
                    </div>
            </div>
            <div className="flexcol">
                <img src="./assets/clock.svg" alt=""/>
                <div id="opencontainer">
                    <strong>Open Hours</strong>
                    <p>From 9am to 6pm</p>
                    <p>All Days</p>
                </div>
            </div>
        </div>
        </footer>
        <div id='copyright'>Copyright © 2024 Urban Detailing | All rights reserved.</div>
    </div>
  )
}

export default Footer
