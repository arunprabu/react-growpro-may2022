import React from 'react'
import styled from 'styled-components';

const StyledCompDemo = () => {

  const Wrapper = styled.div`
    border: solid 5px red;
    background-color: #fefefe;
    padding: 20px;
    text-align: center;
  `;
  
  const Heading1 = styled.h1`
    text-align:center;
    font-size: 36px;
    background-color: yellow;
  `;

  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <Wrapper>
      <Heading1>Styled Comp Demo</Heading1>
      <Button>Learn more about styled comp</Button>
    </Wrapper>
  )
}

export default StyledCompDemo