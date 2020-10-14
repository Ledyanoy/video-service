import React, {useContext, useState, useRef, useEffect} from 'react';
import {GlobalContext} from '../Context';
import {Formik, Form, Field} from 'formik';
import styled from 'styled-components'
import {deleteLoginFromStorage, setLogonInStorage} from "../../Helpers/SetLocalStorage";


const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;      
`

const Button = styled.button`
    margin-left: 10px;
    margin-right: -6px;
    margin-top: 10px;
`

const ButtonEnter = styled(Button)`
    margin-top: 2px;
    margin-left: 0; 
    margin-right: 0; 
`

const Name = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-top: 10px;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Input = styled.div`
    display: block;
    box-sizing: border-box;     
    border-bottom: ${(props) => props.error ? '1px solid #E5261E' : '1px solid #333333'} ; 
    position: relative;               
    input {
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;    
        box-sizing: border-box;
        border: none;
        box-shadow: none; 
        padding-bottom: 6px;        
        border-radius: 0;
        width: 100%;       
        :focus {
        outline: none;        
      }
    }       
    &.hasError {
      border-bottom: 1px solid #E5261E; 
    }   
}
`

const ErrorField = styled.div`
  color:#E5261E;  
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  bottom: 6px;
  right:0;
  pointer-events: none;
`

const User = () => {
    const [isLoginChanging, setIsLoginChanging] = useState(false);
    const inputEl = useRef(null);

    const {
        GlobalState,
        GlobalDispatch,
        changeModal,
        setUser
    } = useContext(GlobalContext);

    useEffect(() => {
        if (!isLoginChanging) return;
        inputEl.current.focus();
    }, [isLoginChanging])

    const validation = values => {
        const errors = {};
        if (!values.login) {
            errors.login = 'Обязятельное поле';
        }
        return errors;
    };

    const FormikLoginInput = () => (
        <Formik
            initialValues={{
                login: GlobalState.user.login,
            }}
            validate={validation}
            onSubmit={values => {
                const newUser = {
                    login: values.login,
                }
                GlobalDispatch(setUser(newUser));
                if (localStorage.videoServiceLogin) {
                    setLogonInStorage(values.login);
                }
            }}
        >
            {({errors, touched, handleSubmit}) => (
                <Form>
                    <Input error={errors.login && touched.login} onBlur={handleSubmit}>
                        {errors.login && touched.login ? (
                            <ErrorField>{errors.login}</ErrorField>
                        ) : null}
                        <Field name='login' innerRef={inputEl} className='inputLogin'/>
                    </Input>
                </Form>
            )}
        </Formik>
    );

    const Enter = () => {
        return (
            <ButtonEnter className='btn btn--red' onClick={() => {
                GlobalDispatch(changeModal({title: 'login', active: true,}));
            }}>Войти</ButtonEnter>
        )
    }

    const Out = () => {
        return (
            <>
                <Name onClick={() => {
                    setIsLoginChanging(true);
                }}>
                    {isLoginChanging
                        ? <FormikLoginInput/>
                        : <span>{GlobalState.user.login}</span>
                    }
                </Name>
                <Button className='btn btn--transparent' onClick={() => {
                    deleteLoginFromStorage();
                    GlobalDispatch(setUser({login: '', isAuth: false}));
                }}>Выйти</Button>
            </>
        )
    }

    return (
        <Container>
            {!GlobalState.user.isAuth ? <Enter/> : <Out/>}
        </Container>
    )
}

export default User;