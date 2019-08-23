import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Card = (props) => {
  const {
    className,
    innerRef,
    tag: Tag,
    theme,
    outline,
    small,
    ...attrs
  } = props;

  const classes = classNames(
    className,
    "card",
    small && "card-small",
    theme && `${outline ? "border" : "bg"}-${theme}`
  );

  return <Tag {...attrs} className={classes} ref={innerRef} />;
};

Card.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  outline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  small: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

Card.defaultProps = {
  tag: "div"
};

export default Card;
