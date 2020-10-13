import React, {useContext} from 'react';
import {GlobalContext} from '../Context';
import styled from 'styled-components'



const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;      
`

const Button = styled.button`
margin-top: 2px;  
`



const User= () => {

    const {
        GlobalState,
        GlobalDispatch,
        changeModal
    } = useContext(GlobalContext);

    return (
        <Container>
            <Button className='btn btn--red' onClick={()=> {
                GlobalDispatch(changeModal({content:'login', active: true,}));
            }}>Войти</Button>
        </Container>
    );
}

export default User