import React, {components} from 'react'
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const Section=styled.section`
padding:4em;
background:cyan;
`;
const Section2=styled.section`
padding:0.5em;
background:white;
`;
const Button=styled.button`
    background:palevioletred;
    color:white;
    font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  `;
class Counter extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state={
            value:0
        };
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }
   increment()
   {
       this.setState(state=>(
            {
                value:state.value+1
            }
        ));
   }
   decrement()
   {
       this.setState(state=>
        ({
            value:state.value-1
        }
        ));
   }
   reset()
   {
       this.setState({value:0});
   }
  
    render()
    {
        
        return(
            <div>
                <Section>
                <Button onClick={this.increment}>Increment</Button>
                <Button onClick={this.decrement}>Decrement</Button>
                <Button onClick={this.reset}>Reset</Button>
                <Section2><h1>the value of counter is: {this.state.value}</h1></Section2>
                </Section>
            </div>
        );
    }
}

export default Counter