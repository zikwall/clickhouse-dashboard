import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormGroup = props => {
  const { className, row, disabled, check, inline, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    row && "row",
    check ? "form-check" : "form-group",
    check && inline && "form-check-inline",
    check && disabled && "disabled"
  );

  return <Tag {...attrs} className={classes} />;
};

FormGroup.propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string
};

FormGroup.defaultProps = {
  tag: "div"
};

export default FormGroup;
