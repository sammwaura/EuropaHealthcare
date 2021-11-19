import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 40vh;
    padding: 80px 60px;
    background: lightblue;
    justify-content: center;

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    justify-content: center;

    @media (max-width: 1000px) {
        grid-template-columns: repeat()(auto-fill, minmax()(200px,1fr));
        grid-gap: 20px;
    }
`
const Column = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin: 0 auto;
`
const Title = styled.div`
    color: rgb(9, 83, 133);
    max-width: 200px;
    text-align: center;
`
const Link = styled.div`

`

export default class Footer extends Component {
    render(){
        return (
            <Container>
                <Wrapper>
                    <Row>
                        <Column>
                            <Title>Europa Health Care</Title>
                                <p>Europa Health Care provides progressive,
                                    and affordable healthcare, accessible on
                                    mobile and online for everyone.
                                </p>
                        </Column>
                        <Column>
                            <Title>Company</Title>
                            <Link>About</Link>
                            <Link>Products</Link>
                            <Link>Find a doctor</Link>
                            <Link>Apps</Link>
                        </Column>
                        <Column>
                        <Title>Help</Title>
                            <Link>FAQs</Link>
                            <Link>Contact Support</Link>
                            <Link>Media Center</Link>
                            <Link>How it Works</Link>
                        </Column>
                    </Row>
                
                </Wrapper>
            </Container>
        )

    }
    
}

