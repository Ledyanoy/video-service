import React from 'react';
import styled from 'styled-components'
import logo from "../../Assets/logo.svg";
import {Formik, Form, Field} from 'formik';

const Container = styled.div`
    margin-left: 17.5%;
    flex-shrink: 0;
    margin-top: 11px;
    max-width: 408px;
    width: 100%;
    form{
      display: flex;
      align-items: start;
    }      
`

const InputOuter = styled.div`
  width: 320px;
  height: 25px;
  input{
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      border-top: none;
      border-left: none;
      border-right: none; 
      border-bottom: 1px solid #333333;
      padding-bottom: 4px;
      box-sizing: border-box;
      border-radius: 0;
      
      ::placeholder {
          color: #828282; 
          font-weight: normal;               
      }
      :focus {
        outline: none;        
      }
  }
`

const Button = styled.button`
  margin-left: auto;

`

export const FormikSearchPanel = () => (
    <Container>
        <Formik
            initialValues={{
                search: ''
            }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <InputOuter>
                        <Field name='search' placeholder='Поиск...'/>
                    </InputOuter>
                    <Button type="submit" className='btn btn--transparent'>Найти</Button>
                </Form>
            )}
        </Formik>
    </Container>
);


const SearchPanel = (props) => {
    return (
        <FormikSearchPanel/>
    );
}

export default SearchPanel