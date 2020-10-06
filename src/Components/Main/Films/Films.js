import React from 'react';
import NewItem from './NewItem'
import fireIcon from "../../../Assets/fire-icon.png";
import styled from 'styled-components';

import filmsData from "../../../Data/films-data";

const Container = styled.div`     
    padding-top: 8px;
`

const Title = styled.h3`     
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;    
    margin-bottom: 15px;
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

const FilmsList = styled.ul`     
    list-style: none;
    padding-left: 0;  
    margin-left: -10px;
    margin-right: -10px;  
    display: flex;
    flex-wrap: wrap;
`


const Films = () => {
    const filmItems = filmsData.newItems.map(item => <NewItem key={item.id} item={item}/>)

    return (
        <Container>
            <section>
                <TitleFire>
                    Новинки
                </TitleFire>
                <FilmsList>
                    {filmItems}
                </FilmsList>

            </section>
            <section>
                <Title>Жанры</Title>
            </section>

        </Container>
    );
}

export default Films