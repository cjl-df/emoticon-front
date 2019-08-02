import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigatorBar from "./component/NavigatorBar";
import EmotionList from "./container/emotionList";
import Home from "./container/home";

const routes = [
  {
    path: "/sandwiches",
    component: Home
  },
  {
    path: "/tacos",
    component: EmotionList,
    routes: [
      {
        path: "/tacos/bus",
        component: Home
      },
      {
        path: "/tacos/cart",
        component: Home
      }
    ]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function RouteConfigExample() {
  return (
    <Router>
      <NavigatorBar />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Router>
  );
}

export default RouteConfigExample;
