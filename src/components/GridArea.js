import React from "react";
import styled from "styled-components";
const Box=styled.div`
display:grid;
grid-template-areas:"header header header"
                    "advert content sidebar"
                    "footer footer footer";
`;
const Inner1=styled.div`
grid-area:header;
background:red;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;
const Inner2=styled.div`
grid-area:advert;
background:yellow;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;
const Inner3=styled.div`
grid-area:content;
background:green;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;
const Inner4=styled.div`
grid-area:sidebar;
background:blue;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;
const Inner5=styled.div`
grid-area:footer;
background:purple;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;

const GridArea=()=>
{
    return(
        <>
         <Box>
            <Inner1>1</Inner1>
            <Inner2>2</Inner2>
            <Inner3>3</Inner3>
            <Inner4>4</Inner4>
            <Inner5>5</Inner5>
        </Box>
        </>
    );
}
export default GridArea;