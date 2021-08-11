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
const Box1=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:3px;

`;
const data=[{src:"/bus.jpg"},
{src:"/ticket.jpg"},
{src:"/train.jpg"},
{src:"/luggage.jpg"},];
const SectionGrid=({heading})=>
{
    return(
        <>
        <Box>
            <h1>{heading}</h1>
            <Box1>
                {data.map((items,index)=>{
                    return(
                        <img key={index} src={items.src}/>
                    );
                })}
            </Box1>
            
        </Box>
        </>
    );
}
export default SectionGrid;