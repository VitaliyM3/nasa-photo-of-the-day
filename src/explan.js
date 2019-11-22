import React from "react";
import styled from "styled-components";

const ExplanDiv = styled.div`
    width: 1100px;
    height: 280px;
    color: black;
    background-color: yellow;
    text-align: center;
    padding: 15px;
    margin: auto;
    border: 2px solid #700101;
    font-size: 18px;
`;

const Explan = props => {

    return (
        <ExplanDiv>
            <p> { props.textContent.explanation } </p>
        </ExplanDiv>
    )

};

export default Explan;