import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.jpg';

const H1 = styled.h1`
    width:82px;
    height:38px;
    overflow:hidden;
    margin-right: 35px;
    margin-top:11px;
    a{
        display:block;
        width:100%;
        height:100%;
        
    }
    img{
        width:140px;
        margin:-10px 0 0 -54px;
    }
`
function Logo(){
    return (
        <H1>
            <Link to = '/'>
                <img src={LogoImg} alt="ohouse"/>
            </Link>
        </H1>
    )
}

export default Logo