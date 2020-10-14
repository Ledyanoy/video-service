import React from "react";
import styled from 'styled-components';

const Text = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
`

const MainText = styled(Text)`
  font-weight: 500;
  min-width: 200px;
  max-width: 300px;
`

const Button = styled.button`
    margin: 0 auto;
`

const Error = ({GlobalState, closeModal}) => {
    return (
        <>
            {GlobalState.modal.title === 'search'
                ? <Text>В данный момент поиск не работает</Text>
                : <>
                    <Text>К сожалению раздел:</Text>
                    <MainText>{GlobalState.modal.content}</MainText>
                    <Text>сейчас закрыт</Text>
                </>
            }

            <Button className='btn btn--red' onClick={closeModal}>Хорошо</Button>
        </>
    )
}

export default Error;