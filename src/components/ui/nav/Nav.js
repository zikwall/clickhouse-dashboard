import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Nav = props => {
  const {
    className,
    navbar,
    horizontal,
    vertical,
    tabs,
    card,
    pills,
    justified,
    fill,
    tag: Tag,
    ...attrs
  } = props;

  let verticalClass;

  if (vertical === true || vertical === "xs") {
    verticalClass = "flex-column";
  } else if (vertical === false) {
    verticalClass = false;
  } else if (typeof vertical === "string") {
    verticalClass = `flex-${vertical}-column`;
  }

  const classes = classNames(
    className,
    navbar ? "navbar-nav" : "nav",
    horizontal && `justify-content-${horizontal}`,
    verticalClass,
    tabs && "nav-tabs",
    card && tabs && "card-header-tabs",
    pills && "nav-pills",
    card && pills && "card-header-pills",
    justified && "nav-justified",
    fill && "nav-fill"
  );

  return <Tag {...attrs} className={classes} />;
};

Nav.defaultProps = {
  tag: "ul",
  vertical: false
};

Nav.propTypes = {
  className: PropTypes.string,
  navbar: PropTypes.bool,
  horizontal: PropTypes.string,
  tabs: PropTypes.bool,
  card: PropTypes.bool,
  pills: PropTypes.bool,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default Nav;
