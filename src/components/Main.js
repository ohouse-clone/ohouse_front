import React from "react";
import styled from 'styled-components';

const MainBlock = styled.div`
    height:100px;
    line-height:100px;
    text-align:center;
    background:pink;
    
`
function Main(){
    return (
        <MainBlock>
            메인
        </MainBlock>
    )
}

export default Main;