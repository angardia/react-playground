import React, { Component } from 'react';
import "./MenuItem.css";

export default class MenuItem extends Component {
    render() {
        return (
            <li>
    
                <i className="fas fa-cookie-bite"></i>
                <a href={this.props.route} >{this.props.children}</a>

            </li>
        )
    }
}
