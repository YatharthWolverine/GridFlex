import React from 'react';
import styled from 'styled-components';
import SectionComponents from "./SectionComponents";
import SectionGrid from "./SectionGrid";
const Box=styled.div`
background-image: linear-gradient(to right top, #86ff80, #d4df51, #febc54, #ff9c74, #fd8998);
display:grid;
grid-template-columns:repeat(4,1fr);
grid-gap:1rem;
padding-right:1rem;
padding-left:1rem;

`;
const Section1=()=>
{
    return(
        <>
        <Box>
           <SectionComponents heading="Hi, Yatharth" src="/mobile.jpg"/>
           <SectionComponents heading="Up to 70% off | Electronics clearance store" src="/tv.jpg"/>
           <SectionGrid heading="Amazon Pay | Book your travel tickets"/>
           <SectionComponents heading="Books & Kindle" src="/book.jpg"/>
        </Box>
        </>
    );
}
export default Section1;