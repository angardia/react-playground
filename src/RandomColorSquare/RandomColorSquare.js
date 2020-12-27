import React, { Component } from 'react';
import "./RandomColorSquare.css";

export default class RandomColorSquare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#FF0000",
        }
    }
    randomColor() {
        const random = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
        const randomColor = "#" + (random(16777215).toString(16) + "000000").substring(2, 8);
        this.setState({
            color: randomColor,
        })

    }


    render() {
        return (
            <div className='squareHolder'>
                <div className="square" onClick={this.randomColor.bind(this)} style={{ backgroundColor: this.state.color }} ></div>
                <p>{this.state.color}</p>
            </div>
        )
    }
}
