import React from 'react';
import { NavbarContext } from "components/navbar/context/NavbarContext";
import Home from './Home';

const HomeWithContext = (props) => (
    <NavbarContext.Consumer>
        {({ setNavbarItems }) => <Home {...props} setNavbarItems={setNavbarItems} />}
    </NavbarContext.Consumer>
);

export default HomeWithContext;