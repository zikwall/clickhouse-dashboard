import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const InputGroup = props => {
  const { className, tag: Tag, size, seamless, ...attrs } = props;
  const classes = classNames(
    className,
    "input-group",
    seamless && "input-group-seamless",
    size && `input-group-${size}`
  );

  return <Tag {...attrs} className={classes} />;
};

InputGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  seamless: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

InputGroup.defaultProps = {
  tag: "div"
};

export default InputGroup;
