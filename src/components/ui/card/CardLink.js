import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardLink = (props) => {
  const { className, tag: Tag, innerRef, ...attrs } = props;
  const classes = classNames(className, "card-link");

  return <Tag {...attrs} ref={innerRef} className={classes} />;
};

CardLink.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

CardLink.defaultProps = {
  tag: "a"
};

export default CardLink;
