import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
const Styles = styled.div`
    .layout {
        background-color: clear;
        display: flex;
        max-width: 400px;
        padding-top:25px;
        padding-left:13px;
        padding-right:13px;
    }
`;
export const Layout = (props) => (
    <Styles>
        <Container className="layout" >
             {props.children}
        </Container>
    </Styles>
);