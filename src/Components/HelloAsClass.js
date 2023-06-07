import { Component } from "react";

class HelloAsClass extends Component{
    render(){
        return <div>Hello Phuc, {this.props.who}</div>
    }
}

export default HelloAsClass;