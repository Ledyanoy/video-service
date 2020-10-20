import React, {useEffect, useRef} from 'react';
import CustomScroll from '../../../Helpers/Custom-scroll/custom-scroll';
import '../../../Helpers/Custom-scroll/custom-scroll.css';

import TvItem from './TvItem';

import styled from 'styled-components';

import teleData from '../../../Data/tele-data';

const Container = styled.div`  
    padding-top: 27px;
    padding-bottom: 8px; 
    .scrollable {
        @media screen and (max-width: 1250px) {
            width: 100%;        
        }
    }      
`
const List = styled.ul`     
    list-style: none;
    padding-left: 0;       
`

const Tele = () => {
    const scrollOuterEl = useRef(null);
    useEffect(()=> {
        const teleScroll = new CustomScroll(scrollOuterEl);
        return ()=> {
            teleScroll.clearListeners();
        };
    },[])
    const teleItems = teleData.channels.map(item => <TvItem key={item.title} item={item}/>);

    return (
        <Container>
            <div ref={scrollOuterEl} className="scrollable">
                <div className="scrollable__wrapper">
                    <List className='scrollable__content'>
                        {teleItems}
                    </List>
                </div>
            </div>
        </Container>
    );
}

export default Tele