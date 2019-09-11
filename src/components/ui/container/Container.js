import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const Container = props => {
  const { className, fluid, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    fluid ? "container-fluid" : "container"
  );

  return <Tag {...attrs} className={classes} />;
};

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Container.defaultProps = {
  tag: "div"
};

export default Container;
