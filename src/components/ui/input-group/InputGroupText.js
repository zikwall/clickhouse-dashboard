import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const InputGroupText = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "input-group-text");

  return <Tag {...attrs} className={classes} />;
};

InputGroupText.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

InputGroupText.defaultProps = {
  tag: "span"
};

export default InputGroupText;
