import React from "react";
import styled from "styled-components";
const Box=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
`;
const Inner1=styled.div`
background:red;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;
const Inner2=styled.div`
background:yellow;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;
const Inner3=styled.div`
background:green;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;
const Inner4=styled.div`
background:blue;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;
const Inner5=styled.div`
background:purple;
color:white;
text-align:center;
padding:1rem;
font-size:1.5rem;
`;

const GridBox=()=>
{
    return(
        <>
        <Box>
            <Inner1>1</Inner1>
            <Inner2>2</Inner2>
            <Inner3>3</Inner3>
            <Inner4>4</Inner4>
            <Inner5>5</Inner5>
            <Inner1>6</Inner1>
            <Inner2>7</Inner2>
            <Inner3>8</Inner3>
            <Inner4>9</Inner4>
        </Box>
        </>
    );
}
export default GridBox;