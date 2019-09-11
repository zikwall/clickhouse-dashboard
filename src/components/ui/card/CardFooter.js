import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardFooter = (props) => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-footer");

  return <Tag {...attrs} className={classes} />;
};

CardFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardFooter.defaultProps = {
  tag: "div"
};

export default CardFooter;
