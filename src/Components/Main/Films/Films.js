import React, {useContext} from 'react';
import NewItem from './NewItem';
import Genre from './Genre'
import fireIcon from "../../../Assets/fire-icon.png";
import styled from 'styled-components';

import filmsData from "../../../Data/films-data";
import {GlobalContext} from "../../Context";

const Container = styled.div`     
    padding-top: 8px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1210px) {
        max-width: 880px;        
    }
    @media screen and (max-width: 910px) {
        max-width: 580px;        
    }
    @media screen and (max-width: 630px) {
        max-width: 280px;        
    }
`

const Title = styled.h3`     
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;    
    margin-bottom: 16px;
`

const TitleFire = styled(Title)`
    position: relative;
    padding-left: 30px;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top:50%;
        transform: translateY(-50%);
        display: block;       
        background-image: url(${fireIcon});
        height: 24px;
        width: 24px;
        background-size: cover;
    }
`

const List = styled.ul`     
    list-style: none;
    padding-left: 0;  
    margin-left: -10px;
    margin-right: -10px;  
    display: flex;
    flex-wrap: wrap;
`


const Films = () => {
    const {
        GlobalDispatch,
        changeModal
    } = useContext(GlobalContext);

    const filmItems = filmsData.newItems.map(item => <NewItem key={item.id}
                                                              item={item}
                                                              GlobalDispatch={GlobalDispatch}
                                                              changeModal={changeModal}/>);

    const genreItems = filmsData.genres.map(item => <Genre key={item.id}
                                                           item={item}
                                                           GlobalDispatch={GlobalDispatch}
                                                           changeModal={changeModal}/>);

    return (
        <Container>
            <section>
                <TitleFire>Новинки</TitleFire>
                <List>
                    {filmItems}
                </List>
            </section>
            <section>
                <Title>Жанры</Title>
                <List>
                    {genreItems}
                </List>
            </section>
        </Container>
    );
}

export default Films