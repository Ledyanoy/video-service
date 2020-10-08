import React from 'react';

import TvItem from './TvItem';

import styled from 'styled-components';

import teleData from '../../../Data/tele-data';


const Container = styled.div`     
    
`
const List = styled.ul`     
    list-style: none;
    padding-left: 0; 
    margin-top: 27px;   
`

const Tele = () => {
    const teleItems = teleData.channels.map(item => <TvItem key={item.title} item={item}/>);

    return (
        <Container>
            <List>
                {teleItems}
            </List>
        </Container>
    );
}

export default Tele