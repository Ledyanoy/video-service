import React from 'react';
import tvIcon from '../../../Assets/tvIcon.png'
import styled from 'styled-components';


const Li = styled.li`  
    display: flex;
    width: 100%;   
    padding: 12px;
    background: #F2F2F2;
    border-radius: 8px; 
    box-sizing: border-box;
    &:not(:last-of-type) {
        margin-bottom: 16px;
    }  
`

const Logo = styled.div`
    width: 32.5%;
    display: flex;
    align-items: center;
    justify-content: center;    
`

const Schedule = styled.div`
    color: #333333; 
    margin-left: 12px;  
    padding-top: 9px;  
    padding-bottom: 7px;   
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 17px;
`

const ScheduleList = styled.ul`
    list-style: none;
    padding-left: 0; 
    li:first-of-type {
        span {
            color: #E5261E;
        }
    }
    li:not(:last-of-type) {
        margin-bottom: 12px;
    }
    span {
        font-size: 16px;
        line-height: 19px;
        &:first-of-type {
        margin-right: 20px;
        }
    }          
`


const TvItem = ({item}) => {
    const scheduleItems = item.schedule.map(item => <li>
        <span>{item.time}</span>
        <span>{item.name}</span>
    </li>)

    return (
        <Li>
            <Logo>
                <img src={(item.image !== null) ? item.image : tvIcon} alt={item.title}/>
            </Logo>
            <Schedule>
                <Title>{item.title}</Title>
                <ScheduleList>
                    {scheduleItems}
                </ScheduleList>

            </Schedule>
        </Li>
    );
}

export default TvItem