import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;

    @media (max-width: 48rem) {
        flex-direction: column;
    }
`
const Item = styled.div`
    display: block;
    width: 100%;
    padding: 0 1rem;

    @media (max-width: 48rem) {
        padding: 0;
    }
`

export default ({ data }) => (
    <Wrapper>
        {data.map(({ title, image, text }, i) => (
            <Item key={i}>
                {image}
                <h3>{title}</h3>
                <p>{text}</p>
            </Item>
        ))}
    </Wrapper>
)