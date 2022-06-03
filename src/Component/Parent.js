// import { getByDisplayValue, render } from "@testing-library/react";
import React from "react";
// import Child from './Component/Child.js'

class Parent extends React.Component{
    constructor(){
        super();
        this.state={
            data:""
        } 
    }
    
    display=event=>{
        this.setState({data:this.state.data+event.target.value})
        
    }
    clear=()=>{
        this.setState({data:""})
    }
    calculator=()=>{
        const result = eval(this.state.data);
        this.setState({data: result});
    }
    render(){
        return(
            <div><h1>Calculator</h1>
            <div className="maindiv">
                <input className="input6" type="text" value={this.state.data}/>
            </div >
            <div className="table1">
                <input className="input1" type="button"  onClick={this.display} value="("/>
                <input className="input1" type="button"  onClick={this.display} value=")"/>
                <input className="input1" type="button"  onClick={this.clear} value="AC"/>
                <input className="input1" type="button"  onClick={this.display} value="%"/><br></br>
                <input className="input1" type="button"  onClick={this.display} value="7"/>
                <input className="input1" type="button"  onClick={this.display} value="8"/>
                <input className="input1" type="button"  onClick={this.display} value="9"/>
                <input className="input1" type="button"  onClick={this.display} value="*"/> <br></br>
                <input className="input1" type="button"  onClick={this.display} value="6"/>
                <input className="input1" type="button"  onClick={this.display} value="5"/>
                <input className="input1" type="button"  onClick={this.display} value="4"/>
                <input className="input1" type="button"  onClick={this.display} value="+"/><br></br>
                <input className="input1" type="button"  onClick={this.display} value="3"/>
                <input className="input1" type="button"  onClick={this.display} value="2"/>
                <input className="input1" type="button"  onClick={this.display} value="1"/>
                <input className="input1" type="button"  onClick={this.display} value="-"/><br></br>
                <input className="input1" type="button"  onClick={this.display} value="0"/>
                <input className="input1" type="button"  onClick={this.display} value="."/>
                <input className="input1" type="button"  onClick={this.display} value="/"/>
                <input className="input1" type="button"  onClick={this.calculator} value="="/>
                </div>
        
            </div>
            
        )
    }
}



export default Parent;
