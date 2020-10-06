import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
max-width: calc(1180px + 32px);
width: 100%;
padding-left: 16px;
padding-right: 16px;
margin-left: auto;
margin-right: auto;
box-sizing: border-box;
`

const wrapperOuter = (WrappedComponent) => (props) => {
    return (
        <Wrapper {...props}>
            <WrappedComponent />
        </Wrapper>
    );
}

export default wrapperOuter