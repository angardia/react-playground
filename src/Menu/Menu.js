import { Component } from "react";
import "./Menu.css";


export default class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    {this.props.children}
                </ul>
            </nav>
        );
    }

}
