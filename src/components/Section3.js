import React from 'react';
import styled from 'styled-components';
import SectionGrid from "./SectionGrid";
const Box=styled.div`
background-image: linear-gradient(to right top, #86ff80, #d4df51, #febc54, #ff9c74, #fd8998);
display:grid;
grid-template-columns:repeat(4,1fr);
grid-gap:1rem;
padding-right:1rem;
padding-left:1rem;

`;
const Section3=()=>
{
    return(
        <>
        <Box>
           <SectionGrid heading="Hi, Yatharth"/>
           <SectionGrid heading="Hi, Yatharth"/>
        </Box>
        </>
    );
}
export default Section3