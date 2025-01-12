import React from "react";

class Clicker extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <button onClick={this.props.setCount}>click me</button> 
    }
}
export default Clicker;