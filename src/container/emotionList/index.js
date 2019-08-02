import React, { Component } from "react";
import { RouteWithSubRoutes } from "../../router";
import { Link } from "react-router-dom";
export default class EmotionList extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to="/tacos/bus">sandwiches</Link>
          </li>
          <li>
            <Link to="/tacos/cart">tacos</Link>
          </li>
        </ul>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}
