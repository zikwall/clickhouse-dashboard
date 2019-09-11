import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavItem = props => {
  const { className, active, disabled, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    "nav-item",
    active && "active",
    disabled && "disabled"
  );

  return <Tag {...attrs} className={classes} />;
};

NavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavItem.defaultProps = {
  tag: "li"
};

export default NavItem;
