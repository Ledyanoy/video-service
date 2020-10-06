import React, {useReducer} from 'react';
import styled from 'styled-components';
import Films from './Films/Films'


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

const CHANGE_TAB = 'main/change_tab'

const initialState = {
    tabs: [
        {
            id: 'films',
            text: 'Фильмы'
        },
        {
            id: 'tv',
            text: 'Телеканалы'
        }
    ],
    activeTab: 'films'
}


const reducer = (State, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...State, activeTab: action.id,
            };
        default:
            throw new Error();
    }
}

// action creators
export const changeTab = (id) => ({type: CHANGE_TAB, id});


const Main = () => {

    const [State, dispatch] = useReducer(reducer, initialState);

    const tabsClickHandler = (id) => {
        dispatch(changeTab(id));
    }

    const tabs = State.tabs.map(tab => {
        return (
            <Tab key={tab.id}
                active={tab.id === State.activeTab}
                onClick={() => {
                    tabsClickHandler(tab.id)
                }}>
                <h2>{tab.text}</h2>
            </Tab>
        )
    })

    let tabsContent = null;

    switch (State.activeTab) {
        case 'films' :
            tabsContent = <Films />
            break;
        case 'tv' :
            tabsContent = <h1>2</h1>
            break;
        default :
            tabsContent = <h1>skfjdgslkdjfg</h1>;
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

export default Main