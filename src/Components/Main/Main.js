import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import Films from './Films/Films';
import Tele from './Tele/Tele';
import {GlobalContext} from "../Context";


const Container = styled.div`     
    padding-top: 44px;    
`

const TabsList = styled.ul`
    display: flex;
    padding-left: 0;
    list-style: none; 
    justify-content: center;  
    margin: 0;  
  `;

const Tab = styled.li`
    color: ${(props) => (props.active ? '#E5261E' : '#333')};   
    cursor: pointer;
    padding: 0 12px 9px;
    position:relative;
    h2{
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;  
        margin: 0;  
        @media screen and (max-width: 400px) {
            font-size: 24px;
            line-height: 29px;        
        }
    }        
    &::before {
    content: '';
    position: absolute;
    display: ${(props) => (props.active ? 'block' : 'none')};
    height: 2px;
    width: calc(100% - 24px);
    background-color: #E5261E;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
        
    }
`;

const Main = () => {
    const pageHash = window.location.hash;

    const {
        GlobalState,
        GlobalDispatch,
        changeTab
    } = useContext(GlobalContext);


    const categoriesTabs = {
        tabs: [
            {
                id: 'films',
                text: 'Фильмы'
            },
            {
                id: 'tv',
                text: 'Телеканалы'
            }
        ]
    }


    useEffect(() => {
        if (GlobalState.activeTab === 'films' && pageHash === '#tv') {
            tabsClickHandler('tv');
        }
    }, [])

    const tabsClickHandler = (id) => {
        GlobalDispatch(changeTab(id));
    }

    const changeHash = (id) => {
        id === 'tv'
            ? window.history.replaceState(null, null, '#tv')
            : window.history.replaceState(null, null, ' ')
    }

    const tabs = categoriesTabs.tabs.map(tab => {
        return (
            <Tab key={tab.id}
                 active={tab.id === GlobalState.activeTab}
                 onClick={() => {
                     tabsClickHandler(tab.id);
                     changeHash(tab.id);
                 }}>
                <h2>{tab.text}</h2>
            </Tab>
        )
    })

    let tabsContent = null;

    switch (GlobalState.activeTab) {
        case 'films' :
            tabsContent = <Films/>
            break;
        case 'tv' :
            tabsContent = <Tele/>
            break;
        default :
            tabsContent = <Films/>;
    }

    return (
        <Container>
            <h1 className='visually-hidden'>Видеосервис</h1>
            <TabsList>
                {tabs}
            </TabsList>
            {tabsContent}
        </Container>
    );
}

export default Main;