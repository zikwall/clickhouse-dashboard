import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class FormSelect extends React.Component {
  constructor(props) {
    super(props);

    this.getRef = this.getRef.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  render() {
    const {
      className,
      children,
      size,
      valid,
      invalid,
      innerRef,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "form-control",
      "custom-select",
      valid && "is-valid",
      invalid && "is-invalid",
      size && `form-control-${size}`,
      size && `custom-select-${size}`
    );

    return (
      <select {...attrs} className={classes} ref={innerRef}>
        {children}
      </select>
    );
  }
}

FormSelect.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

export default FormSelect;
