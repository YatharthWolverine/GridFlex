import React from 'react';
import styled from 'styled-components';
const Box=styled.div`
border:1px solid white;
display:flex;
flex-direction:column;
background:white;
color:black;
padding:1rem;
height:fit-content;
`;
const SectionComponents=({heading,src})=>
{
    return(
        <>
        <Box>
            <h1>{heading}</h1>
            <img src={src}></img>
        </Box>
        </>
    );
}
export default SectionComponents;