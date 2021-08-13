import "../App.css";
import React,{useState} from "react";
import styled from "styled-components";
const Box=styled.div`
background:blue;
color:white;
display:grid;
grid-template-columns:1fr 1fr 1fr;
`;
const Wrapper=styled.div`
background:white;
border:1px solid black;
width:60rem;
margin-left:13rem;
margin-right:13rem;
margin-top:5rem;
`;
const Div=styled.div`
text-align:center;
&:hover
{
   cursor:pointer;
}
`;
const MainBox=styled.div`
padding-left:2rem;
padding-right:2rem;
`;
const H1=styled.h1`
text-align:center;
color:blue;
`;
const TabsTest=()=>
{   
    const [toggleState,setToggleState]=useState(1);
    const toggleTab=(index)=>
    {
        setToggleState(index)
    }
    return(
        <>
        <Wrapper>
            <H1>How To cook Rice</H1>
        <Box>
            <Div className={toggleState===1? "tabs-active" : "tabs"} onClick={()=>toggleTab(1)}><h3>Step 1</h3></Div>
            <Div className={toggleState===2? "tabs-active" : "tabs"} onClick={()=>toggleTab(2)}><h3>Step 2</h3></Div>
            <Div className={toggleState===3? "tabs-active" : "tabs"} onClick={()=>toggleTab(3)}><h3>Step 3</h3></Div>
        </Box>
        <MainBox>
        <div className={toggleState===1 ? "active":"content"}>
            <h1>Wash and Rinse the rice</h1>
            <ul>
                <li>Before beginning the process you need to wash and rinse the rice well.</li>
                <li>Set it to rest after wash for 5 minutes.</li>
            </ul>
        </div>
        <div  className={toggleState===2 ? "active":"content"}>
            <h1>Add water and cook</h1>
            <ul>
                <li>Measure the amount of water to be added by the help of cup.</li>
                <li>put it to the gas flame for next 15 minutes.</li>
            </ul>
        </div>
        <div  className={toggleState===3 ? "active":"content"}>
            <h1>Serve after 15 minutes</h1>
            <ul>
                <li>Once you are done with the cooking serve the rice.</li>
                <li>Enjoy with your favourite meal.</li>
            </ul>
        </div>
        </MainBox>
        </Wrapper>
        </>
    );
}
export default TabsTest;