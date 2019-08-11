import React from "react";
import Navbar from "./Navbar";
import HeaderMenu from "./HeaderMenu";

class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar { ...this.props }/>
                <HeaderMenu {...this.props}/>
            </>
        );
    }
}

export default Header;
