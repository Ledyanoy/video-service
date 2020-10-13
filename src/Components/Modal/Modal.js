import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {GlobalContext} from '../Context';

import Login from './Login';

const Outer = styled.div`
   position: fixed;
   top:0;
   left:0;
   height: 100%;
   width: 100%;
   background-color: rgba(51,51,51, 0.6);
   z-index:1;
`

const Container = styled.div`
   background-color: white;
   position: absolute;   
   padding: 36px;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   border-radius: 8px;
`

const Modal = () => {

    const {
        GlobalState,
        GlobalDispatch,
        changeModal,
        setUser
    } = useContext(GlobalContext);

    useEffect(() => {
        document.querySelector('body').classList.add('no-scroll');
        document.addEventListener('click', outsideClickHandler);
        document.addEventListener('keydown', escHandler);
        return () => {
            document.removeEventListener('click', outsideClickHandler);
            document.removeEventListener('keydown', escHandler);
        }
    }, []);

    const outsideClickHandler = (evt) => {
        if (evt.target.closest('.modal')) return;
        closeModal();
    }

    const escHandler = (evt) => {
        if (evt.keyCode !== 27) return;
        closeModal();
    }


    const closeModal = () => {
        document.querySelector('body').classList.remove('no-scroll');
        GlobalDispatch(changeModal({active: false}));
    };


    let modalContent = null;

    switch (GlobalState.modal.content) {
        case 'login' :
            modalContent = <Login GlobalState={GlobalState}
                                  GlobalDispatch={GlobalDispatch}
                                  closeModal={closeModal}
                                  setUser={setUser}/>
            break;
        // case 'address' :
        //     modalContent = <Address GlobalState={GlobalState}
        //                             GlobalDispatch={GlobalDispatch}
        //                             closeModal={closeModal}
        //                             setLoading={setLoading}
        //                             ModalsDispatch={ModalsDispatch}
        //                             changeModal={changeModal}
        //                             ModalsState={ModalsState}/>
        //     break;
        // case 'quantity-alert' :
        //     modalContent = <QuantityAlert GlobalDispatch={GlobalDispatch}
        //                                   closeModal={closeModal}
        //                                   setLoading={setLoading}
        //                                   ModalsDispatch={ModalsDispatch}
        //                                   ModalsState={ModalsState}
        //                                   increaseItem={increaseItem}
        //                                   setActionsOnProducts={setActionsOnProducts}/>
        //     break;
        default :
        // modalContent = <ErrorModal content={content} timeLeft={timeLeft} text={text}/>;
    }

    return (
        <Outer>
            <Container className='modal'>
                {modalContent}
            </Container>
        </Outer>
    )
}

export default Modal;