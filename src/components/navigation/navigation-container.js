import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class NavigationComponent extends Component {
constructor() {
    super();
    }

    render() {
        return (
         <div className="nav-wrapper">
            <div className="left-side">
                 <div className= "nav-link-wrapper">
           <NavLink exact to="/" activeClassNAme="nav-link-active">
             Home
           </NavLink>
        </div>
        <div className= "nav-link-wrapper">
           <NavLink to="/about-me" activeClassName="Nav-link-active">
           About
        </NavLink>
        </div>
        <div className= "nav-link-wrapper">
           <NavLink to="/blog" activeClassName="Nav-link-active"> 
           Blog
           </NavLink>
        </div>
        <div className= "nav-link-wrapper">
           <NavLink to="/contact" activeClassName="Nav-link-active"> 
           Contact
           </NavLink>
        </div>

            {false ? <button>Add Blog</button> : null}
            </div>

            <div className="right-side"> UwU time
            </div>
         </div>
        );
    }
}
    