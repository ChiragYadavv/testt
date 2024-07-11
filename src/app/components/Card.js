import React from 'react'

const Card = (props) => {
  function goToService(element) {
    window.location.href = "./ourwork?" + element.children[1].children[0].innerHTML;
    console.log(element.children[1].children[0].innerHTML);
}
  return (
      <div className="card" onClick={(e)=>{goToService(e.currentTarget)}} style={{backgroundImage:`url(${props.address})`}}>
                <div className="image">
                </div>
                <div className="textContent">
                    <h2>{props.heading}</h2>
                    <div className="gyan">{props.gyan}</div>
                </div>
    </div>
  )
}

export default Card
