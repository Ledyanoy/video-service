import React from 'react';
import styled from 'styled-components';


const Li = styled.li`    
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 8px;
    max-width: 280px;
    height: 208px;
    width: 100%;   
    border-radius: 6px;
    position: relative;
    overflow: hidden;    
    cursor: pointer;
    &:hover {
      .background {
        opacity: 1;
      }
    }
    .background {
        position: absolute;
        height: 100%;
        width: 100%;
        top:0;
        left: 0;
        box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
        background: ${(props) => props.color === 'yellow'
        ? 'linear-gradient(127.83deg, #F2C94C 8.44%, #F29A4A 91.36%)'
        : props.color === 'pink'
        ?  'linear-gradient(127.83deg, #F2994A 8.44%, #EB5757 91.36%)' 
        : props.color === 'blue' 
        ? 'linear-gradient(127.83deg, #56CCF2 8.44%, #2F80ED 91.36%)' 
        : props.color === 'grey' 
        ? 'linear-gradient(127.83deg, #828282 8.44%, #333333 91.36%)' 
        : 'transparent'};   
        opacity: 0.8;
        transition: 0.2s;        
    }
    span {
        position: absolute;
        left: 50%;
        bottom: 24px;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
        font-weight: 400;
        transform: translateX(-50%);
    }
    img{
      height: 48px;
      width: 48px;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
    }
    
`


const Genre = ({item, GlobalDispatch, changeModal}) => {

    return (
        <Li color={item.color} onClick={()=>{
            GlobalDispatch(changeModal({
                active: true,
                title: 'content-alert',
                content: item.title,
            }))
        }}>
            <div className='background'></div>
            <img src={item.image} alt={item.title}/>
            <span>{item.title}</span>
        </Li>

    );
}

export default Genre