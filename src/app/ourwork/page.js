"use client"
import React, { useEffect } from 'react'
import './ourwork.css'
const page = () => {
    let list = {};
    let scrolled = false;
  function checkScroll() {
    scrolled = true;
    let url = window.location.href
    if (url.includes('?')) {
        let scrollTo = url.split('?')[1].split("%20").join("")
        console.log(list);
        if (list[scrollTo]) {
            console.log("Moj ho gyi");
            console.log(list[scrollTo].offsetTop);
            window.scrollTo({
                top: list[scrollTo].offsetTop - 100,
                behavior: 'smooth' // Optional: smooth scrolling effect
            });
        }
    }
}


function playVideo(element) {
    element.play();
    element.parentNode.parentNode.children[0].style.opacity = '0'
}

function pauseVideo(element) {
    if(!openedWide){
        element.pause();
        element.parentNode.parentNode.children[0].style.opacity = '1'
    }
}

let nowPlaying;
let openedWide = false;
function openWide(element) {
    openedWide = true;
    nowPlaying = element;
    element.children[0].removeAttribute("onmouseleave");
    element.children[0].setAttribute("autoplay", null)
    element.children[0].setAttribute("autoplay", null)
    element.children[0].setAttribute("style", "filter:blur();")
    element.style.zIndex = '101';
    element.style.position = "fixed";
    if(window.innerWidth>450){
        element.style.top = "0svh";
        element.style.left = "35svw";
    } else {
        element.style.top = "10svh";
        element.style.left = '10svw'
    }
    element.classList.add("open");
    document.body.style.overflow = 'hidden'

    if(window.innerWidth>450){
        blurDiv1.style.height = "100svh"
    } else {    
        blurDiv1.style.height = "120svh"
    }
    // blurDiv1.style.height = "600svw"
}

function closeVideo() {
    if(openedWide == true){
        openedWide = false
        pauseVideo(nowPlaying.children[0])
    nowPlaying.children[0].setAttribute('onmouseleave', "(e)=>{pauseVideo(e.target)}")
    nowPlaying.children[0].removeAttribute("style")
    nowPlaying.children[0].removeAttribute('autoplay')
    nowPlaying.style.zIndex = '80';
    nowPlaying.style.position = "static";
    document.body.style.overflow = 'scroll'
    // element.style.top = "0svh";
    // element.style.left = "35svw";
    nowPlaying.classList.remove("open");
    blurDiv1.style.height = "0svw"
    }
}


  useEffect(()=>{
    let randoms = document.getElementsByClassName('randomcontainer')
    for (let i = 0; i < randoms.length; i++) {
        const random = randoms[i];
        // console.log(random.children[0].innerHTML.split(" ").join(""));
        list[random.children[0].innerHTML.split(" ").join("")] = random.children[0];
    }
    var blurDiv1 = document.getElementById('blurDiv1')
    window.onload = function bro(){
      console.log(window.scrollY);
      document.body.style.overflow = 'scroll'
      blurDiv1.style.height = "0svh"
      blurDiv1.children[0].style.display = 'none'
        if(!scrolled){
            checkScroll();
        }
    }

    setTimeout(()=>{
        console.log(window.scrollY);
      document.body.style.overflow = 'scroll'
      blurDiv1.style.height = "0svh"
      blurDiv1.children[0].style.display = 'none'
      if(!scrolled){
          checkScroll();
      }
    },5000)
  },[])

  return (
    <div>
       <div className="testing">
    <img src="./assets/detailingcover.webp" alt="" />
</div>
<div id="heading">
    <h1>Snapshots Of Our Work</h1>
</div>

<div id="overallContainer">
    <div className="randomcontainer">
        <h1>Paint Protection Film</h1>
        <div className="videocontainer">
            <div className="video">
                <h2>BMW X5 Matte PPF</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/BMw.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Fortuner PPF</h2>
                <div className="videohaiisme" id="checkVideo" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/Fortuner.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Jeep Compass PPF</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/Jeep.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Scorpio S11 PPF</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/ScorpioPPF.mp4"></video>
                </div>
            </div>
        </div>
    </div>

    <div className="randomcontainer">
        <h1>Ceramic Coating</h1>
        <div className="videocontainer">
            <div className="video">
                <h2>Toyota Fortuner</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/FortunerCeramic.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Kia Seltos</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/SeltosCeramic.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Hyundai Verna</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/VernaCeramic.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Bajaj Dominar</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/DominarCeramic.mp4"></video>
                </div>
            </div>
        </div>
    </div>

    <div className="randomcontainer">
        <h1>Wrapping</h1>
        <div className="videocontainer">
            <div className="video">
                <h2>Fortuner Wrapping</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/FortunerWrapping.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Verna Black Wrap</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/HyundaiWrapping.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Wrapping A Virtus</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/VirtusWrapping.mp4"></video>
                </div>
            </div>
        </div>
    </div>

    <div className="randomcontainer">
        <h1>Other Services</h1>
        <div className="videocontainer">
            <div className="video">
                <h2>Wax Coating</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/WaxCoating.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Graphine Coating</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/GraphineCoating.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Rubbing</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/Rubbing.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Compounding</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/Compounding.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Drum Painting</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/DrumPainting.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Maintenence Wash</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/MaintenenceWash.mp4"></video>
                </div>
            </div>
            <div className="video">
                <h2>Happy Customer</h2>
                <div className="videohaiisme" onClick={(e) => openWide(e.currentTarget)}>
                    <video onMouseEnter={(e) => playVideo(e.target)} onMouseLeave={(e) => pauseVideo(e.target)} loop muted src="./assets/HappyCustomer.mp4"></video>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="blurDiv1" onClick={() => closeVideo()}>
    <img src="./assets/loading.svg" height="100px" alt="" />
</div>

    </div>
  )
}

export default page
