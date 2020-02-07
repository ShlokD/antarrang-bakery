import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/app.css";
import { BrowserRouter, Route } from "react-router-dom";

import HeaderContainer from "./header/container";
import headerCore from "./header/core";
import HomeContainer from "./home/container";

import FooterContainer from "./footer/container";

const Order = () => <h2>order</h2>;
const Menu = () => <h2>Menu</h2>;
const Catering = () => <h2>Catering</h2>;

const componentMap = {
  order: Order,
  menu: Menu,
  catering: Catering
};

class App extends Component {
  render() {
    return (
      <div className="w-full h-auto flex flex-col justify-center">
        <BrowserRouter>
          <HeaderContainer />
          <Route exact path="/" component={HomeContainer} />
          {headerCore.navigations.map((item, index) => {
            return (
              <Route
                key={`${item.path}-${index}`}
                path={item.path}
                component={componentMap[item.ui]}
              />
            );
          })}
          <FooterContainer />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
