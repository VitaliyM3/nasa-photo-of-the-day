import React from "react";
import styled from "styled-components";

const PicContainer = styled.div`
width: 1100px;
height: 1000px;
background-color: black;
margin: auto;
`;


const Nasa = props => {

console.log('this is the props', props)
    return (
        <PicContainer>
            <img src={props.textContent.url}></img>
        </PicContainer>
        
    )
};

export default Nasa;