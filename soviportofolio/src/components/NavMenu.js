import React from "react";
import { NavLink } from "react-router-dom";
//import {BrowserRouter as Router} from 'react-router-react-dom'

export default function NavMenu() {

    return (
        <div>
            <ul>

                <li>
                <NavLink></NavLink>
                </li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

        </div>
    );



}