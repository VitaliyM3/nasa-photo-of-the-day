import React from "react";

const Nasa = props => {

console.log('this is the props', props)
    return (
        <div>
            <p> { props.textContent.date} </p>
            <p> { props.textContent.title } </p>
            <img src="https://apod.nasa.gov/apod/image/1911/Arp273_HubblePohl_960.jpg"></img>
           <p> { props.textContent.explanation } </p>
        </div>
        
    )
};

export default Nasa;