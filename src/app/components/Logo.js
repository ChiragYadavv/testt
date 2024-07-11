"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'


const Logo = () => {
  useEffect(()=>{
        let homelogo = document.getElementById('homelogo')

        if(document.documentElement.clientWidth>450){
          if (window.scrollY > 200) {
            homelogo.style.top = `-30px`
            homelogo.style.scale = `0.5`
                  homelogo.style.left = `0svw`}
        } else {
          if (window.scrollY > 200) {
          homelogo.style.top = `-30px`
            homelogo.style.scale = `0.5`
            homelogo.style.left = `-10svw`}
        }
      
    window.onscroll = () => {
        if (window.scrollY < 200) {
          if(document.documentElement.clientWidth>450){
            homelogo.style.top = `${45 - (45 * window.scrollY) / 200}px`
            homelogo.style.scale = `${1.1 - (2 * window.scrollY) / 1000}`
            homelogo.style.left = `${10 - 10 * (window.scrollY / 200)}svw`
          }else{
            homelogo.style.top = `${45 - (59 * window.scrollY) / 200}px`
            homelogo.style.scale = `${1.3 - (3.5 * window.scrollY) / 1000}`
            homelogo.style.left = `${10 - 10 * (window.scrollY / 200)}svw`
          }
        } else if (window.scrollY > 200) {
          if(document.documentElement.clientWidth>450){
              homelogo.style.top = `-30px`
              homelogo.style.scale = `0.5`
              homelogo.style.left = `0svw`
            } else {
              homelogo.style.top = `-10px`
                homelogo.style.scale = `0.6`
                homelogo.style.left = `-3svw`
            }
        }
    }
},[])

  return (
    <div>
        <Link href={"/"}><img src={'./assets/pixelcut-export.png'} id="homelogo" alt='homelogo'/></Link>
    </div>
  )
}

export default Logo
