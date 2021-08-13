import "../App.css";
import React,{useState} from "react";
import styled from "styled-components";
const Box=styled.div`
background:#08508c;
color:white;
text-align:center;
padding-top:1rem;
padding-bottom:1rem;
`;
const Title=styled.h1`
font-size:3rem;
font-family:font-family:'Roboto Slab', serif;
background:#0e1328;

`;
const TabWrapper=styled.div`
display:grid;
grid-template-columns:repeat(7,1fr);
line-height:2px;
`;
const Div=styled.div`
&:hover
{
    cursor:pointer;
    background:#0e1328;
}
`;
const data=[
    {sno:1,name:"Jamsfy Avengers", src:"/avengers.png",real:"Jamsfy Technologies Pvt Ltd.",post:"Scaling Ideas"},
    {sno:2,name:"Iron Man", src:"/s3.png",real:"Shubham Saurabh",post:"CEO"},
    {sno:3,name:"Doctor Strange", src:"/mayank.png" ,real:"Mayank Joshi",post:"CTO"},
    {sno:4,name:"Captain America", src:"/debis.png",real:"Dipanshu Bisht",post:"COO"},
    {sno:5,name:"Thor", src:"/lokesh.png",real:"Lokesh Manchanda",post:"CIO"},
    {sno:6,name:"Nick Fury", src:"/nick.png",real:"Rahul Sharma",post:"CBO"},
    {sno:7,name:"Hulk", src:"/hulk.png",real:"Tarun Kumar",post:"Frontend Lead"},
    {sno:8,name:"Vision", src:"/vision.png",real:"Anmol Singh",post:"Product Designer"},
    {sno:9,name:"Black Panther", src:"/black.png",real:"Srijan Negi",post:"Senior Software Engineer"},
    {sno:10,name:"Antman", src:"/antman.png",real:"Sukhman Singh",post:"UI/UX Lead"},
    {sno:11,name:"Black Widow", src:"/blackwidow.png",real:"Cipla Sahu",post:"Creative Designer"},
    {sno:12,name:"Captain Marvel", src:"/marvel.png",real:"Rachita Dutta",post:"Business Analyst"},
    {sno:13,name:"Falcon", src:"/falcon.png",real:"Arpit Barthwal",post:"Business Analyst"},
    {sno:14,name:"Spider Man", src:"/spidy.png",real:"Hamood Wahab",post:"Associate Software Engineer"},
    {sno:15,name:"Winter Soldier", src:"/soldier.png",real:"Yatharth Sah",post:"Associate Frontend Engineer"},
];
const Jamsfy=()=>
{   
    const [toggleState,setToggleState]=useState(1);
    const toggleTab=(index)=>
    {
        setToggleState(index);
    }
    return(
        <>
        <Box>
            <Title>Jamsfy Avengers <Title as="span" style={{color: '#ed3167'}}>are here..</Title></Title>
            <TabWrapper>
                {data.map((items,index)=>{
                    return(<Div className={toggleState===items.sno? "tabs-avengers":"tabs-inactive"} onClick={()=>toggleTab(items.sno)}><h3>{items.name}</h3></Div>);
                })}
            </TabWrapper>
            <div>
            {data.map((items,index)=>
            {
                return(
                    <div className={toggleState===items.sno ? "active":"content"}>
                
                            <img src={items.src} alt="jamsfy"/>
                            <div>
                            <h2 style={{color:'cyan'}}>{items.real}</h2>
                            <h3 >{items.post}</h3>
                            </div>
                    </div>
                );
            })}
            
            </div>
        </Box>
        </>
    );
}
export default Jamsfy