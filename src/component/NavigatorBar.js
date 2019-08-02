import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavigatorBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/sandwiches">sandwiches</Link>
          </li>
          <li>
            <Link to="/tacos">tacos</Link>
          </li>
        </ul>
      </div>
    );
  }
}
