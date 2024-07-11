"use client"
import './index.css'
import Form from './components/Form';
import Link from 'next/link';
import Blurdiv from './components/Blurdiv';
import Card from './components/Card';
import { useEffect } from 'react';
import "./common.css"
export default function Home() {
useEffect(()=>{
    let index = 0;
    let textbox = document.getElementById('textbox');
    let quotes = ["show your car some love", "If you got the time, we got the shine", "Bring your ride back to life"]
    
        var video = document.getElementById('backgroundvideo');
        video.playbackRate = 1.25; // Set the default playback speed to 1.5x


    function rollQuote() {
        textbox.classList.add('hide');
        setTimeout(() => {
            textbox.children[0].textContent = quotes[index]
            textbox.classList.remove('hide');
        }, 1500)
    
        if (index == quotes.length - 1) {
            index = 0;
        } else {
            index++;
        }
    }
    setInterval(rollQuote, 4000);
},[]);
  return (
    <div>

        <div id="textbox">
            <div>show your car some love</div>
        </div>

        <div id="videocontainer" >
            <video id="backgroundvideo" autoPlay loop muted 
                data-video="0">
            <source src="./assets/Covervideo3.mov"
                    type="video/mp4" />
            </video>
        </div>

        <div className="banner">

            <div className="flexcontainer">

                <h1>Services We Offer</h1>
                <p>At Urban Detailing, we offer comprehensive exterior and interior detailing to enhance and protect your vehicle. Our services include clay wash for contaminant removal, premium wash for a spotless finish, rubber and tire dressings for UV protection and shine, and ceramic wax for a high-gloss finish. We also provide alloy wheel polishing, decontamination and surface treatment, steam cleaning, engine dressing, and headlight polishing for improved safety and appearance.</p>
                <Link href="/services" >Know More About Our Services &gt;</Link>
            </div>
            <img src="./assets/14Services.jpeg" alt=""/>

        </div>

        <Form></Form>
        <div id="cardDiv">
            <h1>Glimpse Of Our Works</h1>
            <div id="cards">
                <Card heading="Paint Protection Film" gyan="PPF (Paint Protection Film) shields vehicles from scratches, stains, and UV damage, enhancing durability and maintaining looks for our shop's automotive clientele." address="./assets/Ppfcard.jpg" />

                <Card heading="Ceramic Coating" gyan="Ceramic coating enhances vehicle durability, repels dirt, and provides UV protection, preserving shine and reducing maintenance for our shop's automotive customers." address="./assets/ceramiccard.jpeg" />

                <Card heading="Wrapping" gyan="Vehicle wrapping offers customizable designs, protects paint, and supports branding, catering to styles and preferences for our shop's automotive clients." address="./assets/wrappingcard.jpeg" />

                <Card heading="Other Services" gyan="Rubbing, drum painting, and car wash services maintain vehicle appearance and longevity, ensuring customer satisfaction at our automotive shop." address="./assets/CeramicThar.jpg" />
            </div>
        </div>
    </div>
  );
}
