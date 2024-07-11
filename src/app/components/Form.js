"use client"
import React from 'react'

const Form = (props) => {
    const apiURL = "https://detailingserver.onrender.com"
    async function submitForm(){
        let nameField = document.getElementById("contactPageName").value
        let emailField = document.getElementById("contactPageEmail").value.toLowerCase();
        let mobileField = document.getElementById("contactPageMobile").value
        let messageField = document.getElementById("contactPageMessage").value
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
                document.getElementById("contactPageName").value = ''
                document.getElementById("contactPageEmail").value = ''
                document.getElementById("contactPageMobile").value = ''
                document.getElementById("contactPageMessage").value = ''
            }
        console.log(responseData);
        }
    }
  return (
    <div id='formdiv'>
      <div className="message">
        <h1>{props.title?props.title:"For Services Related Queries"}</h1>
        <p>Got a question or something you'd like to ask? Feel free to reach out to us using the form.</p>
    </div>
    <form>
        <div className="inputWrap">
            <input type="text" className="inputField" autoComplete={"on"} id="contactPageName" required />
            <label htmlFor="name">Name</label>
        </div>
        <div className="inputWrap">
            <input type="email" className="inputField" autoComplete={"on"} id="contactPageEmail" required />
            <label id="contactPageEmailLabel" htmlFor="email">Email</label>
        </div>
        <div className="inputWrap">
            <input type="tel" className="inputField" autoComplete={"on"} id="contactPageMobile" required />
            <label id="contactPageMobileLabel" htmlFor="tel">Mobile</label>
        </div>
        <div className="inputWrap">
            <textarea name="message" className="input-textarea" id="contactPageMessage" required></textarea>
            <label htmlFor="message">Message</label>
        </div>
        <div className="submitWrap">
            <input type="submit" value="" id="contactPageSubmitButton" className="sendBtn" />
            <div className="sendLabel" onClick={submitForm}>
                <img id="contactPageSubmitBtnImg" src="./assets/send.svg" alt="" />
                <h1 id="contactPageSubmitBtnText">Send</h1>
            </div>
        </div>
    </form>
    </div>
  )
}

export default Form
