import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavbarBrand = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "navbar-brand");

  return <Tag {...attrs} className={classes} />;
};

NavbarBrand.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavbarBrand.defaultProps = {
  tag: "a"
};

export default NavbarBrand;
