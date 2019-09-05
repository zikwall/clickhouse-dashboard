import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormFeedback = props => {
  const { className, valid, tooltip, tag: Tag, ...attrs } = props;
  const validMode = tooltip ? "tooltip" : "feedback";

  const classes = classNames(
    className,
    valid ? `valid-${validMode}` : `invalid-${validMode}`
  );

  return <Tag {...attrs} className={classes} />;
};

FormFeedback.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
};

FormFeedback.defaultProps = {
  tag: "div",
  valid: undefined
};

export default FormFeedback;
