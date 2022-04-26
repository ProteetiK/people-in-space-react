import React from "react";
import styled from "styled-components";

const Component = styled.div`
    margin-top: 2rem;
`

const Header = styled.h1`
    margin: 0 0 2rem 0;
`

const Person = styled.div`
    border-radius: 0.375rem;
    background-color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
`

const Name = styled.p`
    margin: 0;
    text-align: center;
`

const People = ({ people }) => (
    <Component>
        <Header>People in Space</Header>
        {
            people.map(person => <Person key={person.name + person.craft}>
                <Name><strong>{person.name}</strong> - {person.craft}</Name>
            </Person>)
        }
    </Component>
)

export default People