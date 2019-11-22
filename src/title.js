import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
    width: 1100px;
    height: 100px;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    border: 2px solid blue;
    margin: auto;
    background-color: yellow;
    line-height: 90px;
    font-weight: 900;
`;

const Title = props => {

    return (
        <TitleDiv>
            <p> { props.textContent.title } </p>
        </TitleDiv>
    )

};

export default Title;