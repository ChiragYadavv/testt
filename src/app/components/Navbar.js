"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
const Navbar = () => {

  useEffect(()=>{
    let mobilediv = true;
    let close = document.getElementById('close');
    let mobileNav = document.getElementById("nav");
    let threedots = document.getElementById('threedots')
    console.log();
    if(document.documentElement.clientWidth < 450){
        close.addEventListener('click', () => {
            if (mobilediv) {
                mobilediv = false;
                mobileNav.classList.add('hidden');
                threedots.style.display = "block"
            }
        
        });
        
        threedots.addEventListener("click", ()=>{
            console.log("Working");
            mobilediv = true;
            mobileNav.classList.remove('hidden');
            threedots.style.display = 'none'
        })
    }

    
  },[])
  function closeNav() {
    let close = document.getElementById('close');
    close.click();
  }

  return (
    <div>
       <div id="nav" className="hidden">
                <img id="close" src="./assets/cross.svg" alt=""/>
                <div className="mobilenavitem" onClick={closeNav}><Link href="/">Home</Link></div>
                <div className="mobilenavitem" onClick={closeNav}><Link href="/services">Services</Link></div>
                <div className="mobilenavitem" onClick={closeNav}><Link href="/ourwork">Our Work</Link></div>
                <div className="mobilenavitem" onClick={closeNav}><Link href="/contactus">Contact Us</Link></div>
                <div className="mobilenavitem" onClick={closeNav}><Link href="/aboutus">About Us</Link></div>
            </div>

            <div id="threecontainer" style={{zIndex:100}}>
                <img id="threedots" src="./assets/threedots.svg" alt=""/>
            </div>
      <nav >
            <ul>
                <li className="navitem"> <Link href="/">Home</Link> </li>
                <li className="navitem"> <Link href="/services">Services</Link> </li>
                <li className="navitem"> <Link href="/ourwork">Our Work</Link> </li>
                <li className="navitem"> <Link href="/contactus">Contact Us</Link> </li>
                <li className="navitem"> <Link href="/aboutus">About Us</Link> </li>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar
