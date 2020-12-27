import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
        }
    }
    onToggle() {

        this.setState({
            toggle : !this.state.toggle
        })
        
    }


    render() {
        return (
            <div>
                <button onClick={this.onToggle.bind(this)}>toggle</button>
                {this.state.toggle && <p>bla bla</p>}

            </div>
        )
    }
}
