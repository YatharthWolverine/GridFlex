import React from 'react';
import styled from 'styled-components';
const Box=styled.div`
text-align:left;
display:grid;
grid-template-columns:1fr 1fr 6fr 1fr;
grid-gap:1rem;
background:#131921;
color:white;
padding:0.5rem 1rem;
`;
const Title=styled.div`
font-size:0.75rem;
color:#9bb4a7;
font-family: 'Roboto Slab', serif;
`;
const Title2=styled.div`
font-size:1rem;
color:#fffffe;
font-family: 'Roboto Slab', serif;
`;
const Box2=styled.div`
display:grid;
align-item:center;
justify-content:baseline;
grid-template-columns: 1fr;
`;
function Demo()
{
    return(
        
            <Box>    
            <img src="/amazon.png" height="40px" width="140px"></img>
            <Box2>
                <Title>
                    Deliver to Yatharth
                </Title>
                <Title2>
                    Almora 263601
                </Title2>
            </Box2>
            </Box>
    
    );
}
export default Demo