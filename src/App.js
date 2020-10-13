import React, {useReducer} from 'react';
import {GlobalContext} from './Components/Context';
import './App.css';
import wrapperOuter from './Helpers/Wrapper';
import Modal from './Components/Modal/Modal';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const SET_USER = 'app/set_user';
const CHANGE_MODAL = 'app/change_modal';
const CHANGE_TAB = 'app/change_tab';

export const setUser = (user) => ({type: SET_USER, user});
export const changeModal = (obj) => ({type: CHANGE_MODAL, obj});
export const changeTab = (tab) => ({type: CHANGE_TAB, tab});

const reducer = (GlobalState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...GlobalState, user: {...GlobalState.user, ...action.user}
            }
        case CHANGE_TAB:
            return {
                ...GlobalState, activeTab: action.tab
            };
        case CHANGE_MODAL:
            return {
                ...GlobalState, modal: {...GlobalState.modal, ...action.obj}
            };
        default:
            throw new Error();
    }
}

const initialStore = {
    user: {
        login: localStorage.videoServiceLogin ? localStorage.videoServiceLogin : '',
        isAuth: !!localStorage.videoServiceLogin,
    },
    activeTab: 'films',
    modal: {
        active: false,
        content: '',
        error: false,
    }
}

function App() {
    const [GlobalState, GlobalDispatch] = useReducer(reducer, initialStore);

    const WrappedHeader = wrapperOuter(Header);
    const WrappedMain = wrapperOuter(Main);
    const WrappedFooter = wrapperOuter(Footer);

    return (
        <GlobalContext.Provider value={{GlobalState, GlobalDispatch, changeModal, changeTab, setUser}}>
            <header className='page-header'>
                <WrappedHeader/>
            </header>
            <main className='page-content'>
                <WrappedMain/>
            </main>
            <footer className='page-footer'>
                <WrappedFooter/>
            </footer>
            {GlobalState.modal.active && <Modal/>}
        </GlobalContext.Provider>
    );
}

export default App;
