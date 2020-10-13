import React from 'react';
import styled from 'styled-components'
import {Formik, Form, Field} from 'formik';


const Title = styled.span`
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    display: block;    
`

const Input = styled.div`
    display: block;
    box-sizing: border-box; 
    width: 232px;
    border-bottom: ${(props) => props.error ? '1px solid #E5261E' : '1px solid #333333'} ; 
    position: relative;     
    margin-top: 18px;             
    input {
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;    
        box-sizing: border-box;
        border: none;
        box-shadow: none; 
        padding: 6px 0;        
        border-radius: 0;
        width: 100%;        
        ::placeholder {
          color: #828282; 
          font-weight: normal;               
        }
        :focus {
        outline: none;        
      }
    }  
    .checkbox {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;    
    }
    &.checkboxOuter {    
      border-bottom: none; 
    label{
        font-size: 16px;
        line-height: 26px;         
        display: flex;
        align-items: center;      
    }
    span {        
      margin-bottom: 0;              
    } 
    &.hasError {
      border-bottom: 1px solid #E5261E; 
    }   
}
`

const InputBox = styled.span`     
    display: block;
    height: 16px;
    width: 16px;
    border: 1px solid #333333;    
    border-radius: 4px;      
    position: relative;    
    margin-right: 8px;  
     &:before {
        position: absolute;
        content: '';
        height: 10px;
        width: 6px;
        top: 0px;
        left: 5px;               
        transform: rotate(45deg);
        border-right: ${(props) => (props.active ? '1px solid #E5261E;' : 'none')};
        border-bottom: ${(props) => (props.active ? '1px solid #E5261E;' : 'none')};        
        }     
`

const ErrorField = styled.div`
  color:#E5261E;  
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  bottom: 6px;
  right:0;
`

const Button = styled.button`  
    margin-left: auto;
    margin-right: auto;
    margin-top: 111px;
`

const validation = values => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Обязятельное поле';
    }
    if (!values.pass) {
        errors.pass = 'Обязятельное поле';
    }
    return errors;
};

export const FormikLogin = () => (

    <Formik
        initialValues={{
            login: '',
            pass: '',
            remember: false,
        }}
        validate={validation}
        onSubmit={values => {
            // same shape as initial values
            console.log(values);
        }}
    >
        {({errors, touched}) => (
            <Form>
                <Input error={errors.login && touched.login}>
                    {errors.login && touched.login ? (
                        <ErrorField>{errors.login}</ErrorField>
                    ) : null}
                    <Field name='login' placeholder='Логин'/>
                </Input>
                <Input>
                    {errors.pass && touched.pass ? (
                        <ErrorField>{errors.pass}</ErrorField>
                    ) : null}
                    <Field name='pass' placeholder='Пароль' type='password'/>
                </Input>
                <Input className='checkboxOuter'>
                    <Field type='checkbox' name="remember"
                           render={({field}) => {
                               return (
                                   <>
                                       <input type="checkbox" className='checkbox' id='remember' {...field} />
                                       <label htmlFor="remember">
                                           <InputBox active={field.value}></InputBox>
                                           Запомнить</label>
                                   </>
                               );
                           }}
                    />
                </Input>
                <Button type="submit" className='btn btn--red'>Войти</Button>
            </Form>
        )}
    </Formik>

);


const Login = () => {
    return (
        <>
            <Title>Вход</Title>
            <FormikLogin/>
        </>
    );
}

export default Login