import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state ={
            num : 0,
        }

    }
    increment(){
        this.setState({num :this.state.num +1});
    }
    decrement(){
        if(this.state.num !== 0){
            this.setState({num :this.state.num -1});
        }
        
    }

    render() {
        return (
            <div>
                {this.state.num}
                <button onClick={this.increment.bind(this)}>increase</button>
                <button onClick={this.decrement.bind(this)}>increase</button>
            </div>
        )
    }
}
