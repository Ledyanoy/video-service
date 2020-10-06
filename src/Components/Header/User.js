import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;      
`

const Button = styled.button`
margin-top: 2px;  
`



const User= (props) => {
    return (
        <Container>
            <Button className='btn btn--red'>Войти</Button>
        </Container>
    );
}

export default User