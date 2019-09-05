import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Navbar = props => {
  const {
    className,
    expand,
    fixed,
    sticky,
    theme,
    type,
    tag: Tag,
    ...attrs
  } = props;

  let expandClass;

  if (expand === false) {
    expandClass = false;
  } else if (expand === true || expand === "xs") {
    expandClass = "navbar-expand";
  } else if (typeof expand === "string") {
    expandClass = `navbar-expand-${expand}`;
  }

  const classes = classNames(
    className,
    "navbar",
    expandClass,
    type === "light" && "navbar-light",
    type === "dark" && "navbar-dark",
    theme && `bg-${theme}`,
    fixed && `fixed-${fixed}`,
    sticky && `sticky-${sticky}`
  );

  return <Tag {...attrs} className={classes} />;
};

Navbar.propTypes = {
  full: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  theme: PropTypes.string,
  role: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["dark", "light"]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

Navbar.defaultProps = {
  tag: "nav",
  expand: false
};

export default Navbar;
