import React from 'react';
import styled from 'styled-components'
import logo from "../../Assets/logo.svg";
import SearchPanel from './SearchPanel'
import User from './User'

const Container = styled.div`
    display: flex;
    justify-content: space-between;   
    align-items: start; 
    padding-top: 33px;
    @media screen and (max-width: 800px) {
        flex-wrap: wrap;        
    }
    @media screen and (max-width: 360px) {
     flex-direction: column;
     align-items: center;     
    }
`

const Logo = styled.a`  
  display:flex;
  align-items: center;
  
  img {
      height: 36px;
      width: 37px;
  }
  
  span {
      margin-left: 11px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #333333;
  }
  @media screen and (max-width: 800px) {
     width: 50%;       
  }
  @media screen and (max-width: 360px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const Header = () => {
    return (
        <Container>
            <Logo href='/' className='link'>
                <img src={logo} alt="logo"/>
                <span>Видеосервис</span>
            </Logo>
            <SearchPanel/>
            <User/>
        </Container>
    );
}

export default Header