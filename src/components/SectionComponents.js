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
const Img=styled.img`
&:hover
{
    transform:scale(1.1);
}
`;
const SectionComponents=({heading,src})=>
{
    return(
        <>
        <Box>
            <h1>{heading}</h1>
            <Img src={src} alt="images"/>
        </Box>
        </>
    );
}
export default SectionComponents;