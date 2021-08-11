import React from 'react';
import styled from 'styled-components';
const Box=styled.div`
padding:1rem 0rem;
background:#f9d1ad;
display:flex;
justify-content:center;
color:#22150e;
`;
const Box2=styled.div`
display:grid;
grid-template-columns:1fr;
align-items:center;
justify-content:center;
margin-left:6rem;
`;
const Heading1=styled.h1`
font-size:2rem;
font-family:'Roboto Slab', serif;
color:black;
`;
const Wrapper=styled.div`
display:grid;
grid-template-columns:20rem;
align-items:center;
align-self:start;
line-height:1px;
margin-top:-1rem;
`;
const P=styled.p`
font-size:1.2rem;
font-family:'Roboto Slab', serif;
color;black;
`;
const Photo=styled.div`
display:flex;
`;
const Welcome=()=>
{
    return(
        <>
        <Box>
            <img src="/pic.jpg" width="321" height="300"></img>
            <Box2>
                <Heading1>-Big Brand Days-</Heading1>
                <Wrapper>
                <P>Men's Footwear & Accessories</P>
                <Heading1>Up to 60% Off</Heading1>
                </Wrapper>
                <Photo>
                    <img src="./logo1.jpg" width="90" height="35"></img>
                    <img src="./logo2.jpg" width="90" height="35"></img>
                    <img src="./logo3.jpg" width="90" height="35"></img>
                </Photo>
            </Box2>
        </Box>
        </>
    );
}
export default Welcome