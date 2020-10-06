import React from 'react';
import logo from './logo.svg';
import './App.css';
import wrapperOuter from './Helpers/Wrapper'
import styled from 'styled-components'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'



function App() {
    const WrappedHeader = wrapperOuter(Header);
    const WrappedMain = wrapperOuter(Main);
    return (
        <>
            <header className='page-header'>
                <WrappedHeader/>
            </header>
            <main className='page-content'>
                <WrappedMain/>
            </main>
            <footer className='page-footer'>
                                    sdasdfasdfs
            </footer>
        </>


    );
}

export default App;
