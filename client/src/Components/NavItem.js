import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useLocation,
} from "react-router-dom";

export default function NavItem({ route, name }) {
    return (
        <li className='mr-3'>
            <NavLink
                to={route}
                className='inline-block py-2 px-4 text-white no-underline'
                activeClassName='font-bold'
                exact={true}
            >
                {name}
            </NavLink>
        </li>
    );
}
