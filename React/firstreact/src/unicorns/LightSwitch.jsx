import React, { Component } from 'react';

class LightSwitch extends Component {
    constructor(props){
        super(props);
        this.state = {
            switch: "On"
        }
    }
    // clickHandler = (e) => {
    //     e.preventDefault()
    //     if(this.state.switch === "On"){
    //         this.setState({switch: "Off"})
    //     } else {
    //         this.setState({switch: "On"})
    //     }
    // }
    render(){
        return (
            <div>
                <h1>The switch is... {this.state.switch}</h1>
                <button onClick={this.props.clickhandler}>Flip Switch!</button>
            </div>
        )
    }
}

export default LightSwitch;