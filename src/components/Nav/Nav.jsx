import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: "bold", color: "red"}}>Home页面</NavLink>
          </li>
          <li>
            <NavLink exact to="/mine" activeStyle={{ fontWeight: "bold", color: "red"}}>Mine页面</NavLink>
          </li>
          <li>
            <NavLink exact to="/mine/ucenter" activeStyle={{ fontWeight: "bold", color: "red"}}>Ucenter页面</NavLink>
          </li>
          <li>
            <NavLink exact to="/demo" activeStyle={{ fontWeight: "bold", color: "red"}}>Demo页面</NavLink>
          </li>
          <li>
            <NavLink exact to="/shop" activeStyle={{ fontWeight: "bold", color: "red"}}>Shop页面</NavLink>
          </li>
        </ul>
    );
  }
}
