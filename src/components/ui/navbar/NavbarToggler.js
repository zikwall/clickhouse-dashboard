import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavbarToggler = props => {
  const { className, children, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "navbar-toggler");

  return (
    <Tag {...attrs} className={classes}>
      {children || <span className="navbar-toggler-icon" />}
    </Tag>
  );
};

NavbarToggler.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

export default NavbarToggler;
