import React from 'react';
import htc from "../../Assets/htc.svg";
import styled from 'styled-components';

const Container = styled.div`
  padding: 22px 0 25px; 
  display: flex;   
  .footer-logo {
    height: 68px;
    width: 33px;    
  } 
  & > .link {
    margin-right: 39px;
    margin-top: 5px;
  }   
`

const Address = styled.address`
  font-style: normal; 
  font-size: 16px;
  line-height: 19px;
  p {
      margin: 0;      
  }     
`
const Footer = () => {

    return (
        <Container>
            <a href="https://htc-cs.ru/" target='_blank' className='link'>
                <img src={htc} alt="htc-cs" className='footer-logo'/>
            </a>
            <Address>
                <p>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
                <a href="tel:+73412938861" className='link link--phone'>+7 (3412) 93-88-61</a>,&thinsp;
                <a href="tel:432929" className='link link--phone'>43-29-29</a>
                <a href="https://htc-cs.ru/" className='link link--creator' target='_blank'>htc-cs.ru</a>
            </Address>
        </Container>
    );
}

export default Footer