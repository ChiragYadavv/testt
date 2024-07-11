"use client"
import React from 'react'
import { useEffect } from 'react'
const Blurdiv = () => {

    const apiURL = "https://detailingserver.onrender.com"
    async function submitForms(){
    let nameField = document.getElementById("contactPageName1").value
    let emailField = document.getElementById("contactPageEmail1").value.toLowerCase();
    let mobileField = document.getElementById("contactPageMobile1").value
    let messageField = document.getElementById("contactPageMessage1").value
    if(nameField && emailField && mobileField && messageField){
    const response = await fetch(`${apiURL}/form`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name:nameField,email:emailField,mobile:mobileField,message:messageField})
    });
    const responseData = await response.json();
        if(response.ok){
            document.getElementById("contactPageName1").value = ''
            document.getElementById("contactPageEmail1").value = ''
            document.getElementById("contactPageMobile1").value = ''
            document.getElementById("contactPageMessage1").value = ''
        }
    console.log(responseData);
    }
}

useEffect(()=>{
        let blurDiv = document.getElementById('blurDiv');
        let contactMethods = document.getElementsByClassName('servicemethods')

        for (let i = 0; i < contactMethods.length; i++) {
            const contactMethod = contactMethods[i];
            contactMethod.addEventListener('click', openBlur);
        }
        blurDiv.style.width = '0svw'
        blurDiv.children[0].style.display = "none"
        
        blurDiv.addEventListener('click', closeBlur)
        
        
        function closeBlur(event) {
            if (event.target == blurDiv) {
                console.log(event.target);
                event.stopPropagation();
                document.body.style.overflow = 'scroll'
                blurDiv.style.width = "0svw"
                blurDiv.style.display = 'none'
                blurDiv.children[0].style.display = "none"
            }
        }
        
        function openBlur() {
            document.body.style.overflow = 'hidden'
            blurDiv.style.display = 'flex'
            blurDiv.style.width = "100svw"
            blurDiv.children[0].style.display = "flex"
        
            document.addEventListener('keydown', (e) => {
                if (e.key == "Enter") {
                    submitForms();
                }
            })
        }


    },[])
  return (
      <div id="blurDiv" style={{display:"none"}}>
            <div id="formdiv1">
                <div className="message">
                    <h1>For Services Related Queries</h1>
                    <p>Got a question or something you'd like to ask? Feel free to reach out to us using the form.</p>
                </div>
                <form>
                    <div className="inputWrap">
                        <input type="text" className="inputField" autoComplete='on' id="contactPageName1" required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="inputWrap">
                        <input type="email" className="inputField" autoComplete='on' id="contactPageEmail1" required />
                        <label id="contactPageEmailLabel" htmlFor="email">Email</label>
                    </div>
                    <div className="inputWrap">
                        <input type="tel" className="inputField" autoComplete='on' id="contactPageMobile1" required />
                        <label id="contactPageMobileLabel" htmlFor="tel">Mobile</label>
                    </div>
                    <div className="inputWrap">
                        <textarea name="message" className="input-textarea" id="contactPageMessage1" required></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div className="submitWrap">
                        <input type="submit" value="" id="contactPageSubmitButton1" className="sendBtn" />
                        <div className="sendLabel" onClick={submitForms}>
                            <img id="contactPageSubmitBtnImg1" src="./assets/send.svg" alt="" />
                            <h1 id="contactPageSubmitBtnText1">Send</h1>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Blurdiv
