import React from "react";
import NavigationHeader from "./NavigationHeader";
import Navigation from "./Navigation";

class Header extends React.Component {
    render() {
        return (
            <>
                <NavigationHeader { ...this.props }/>
                <Navigation {...this.props}/>
            </>
        );
    }
}

export default Header;
