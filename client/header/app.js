import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default class extends Component {
  render() {
    const { navigations } = this.props;

    return (
      <header className="bg-red-400 flex justify-between items-center p-4">
        <a href="/"><img className="shadow-md" width={64} height={64} src={logo} /></a>
        <nav>
          <ul className="flex justify-between">
            {navigations.map((item, index) => {
              return (
                <li
                  key={`${item.title}-${index}`}
                  className="p-4 m-2 cursor-pointer text-2xl shadow-md text-white"
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
