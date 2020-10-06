import React from 'react';
import styled from 'styled-components';


const Li = styled.li`    
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 8px;
    max-width: 280px;
    span {
        display: block;
        font-size: 20px;
        line-height: 24px;
        max-height: 48px;
        overflow: hidden;        
    }    
`

const ImageOuter = styled.div`
    width: 100%;
    height: 370px;
    background: #C4C4C4;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 17px;
    position: relative;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p {
        position: absolute;
        opacity: 0;
        top:0;
        left:0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        color: #F2F2F2;
        font-size: 16px;
        line-height: 140%;
        padding: 16px;
        margin: 0;
        box-sizing: border-box;
        background-color: rgba(51,51,51, 0.8);
        transition: 0.2s;        
    }
    &:hover p {
        opacity: 1;
    }
    
`


const NewItem = ({item}) => {

    return (
        <Li>
            <ImageOuter>
                <img src={item.image} alt={item.title}/>
                <p>{item.desc} </p>
            </ImageOuter>
            <span>{item.title}</span>
        </Li>

    );
}

export default NewItem