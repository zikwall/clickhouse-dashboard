import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { INPUT_TYPES } from "../../../constants";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.ref = null;

    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  focus() {
    if (this.ref) {
      this.ref.focus();
    }
  }

  render() {
    const {
      className,
      plaintext,
      size,
      invalid,
      valid,
      innerRef,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      plaintext ? "form-control-plaintext" : "form-control",
      plaintext && "w-100",
      size && `form-control-${size}`,
      valid && "is-valid",
      invalid && "is-invalid"
    );

    return <input {...attrs} ref={innerRef} className={classes} />;
  }
}

FormInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(INPUT_TYPES),
  plaintext: PropTypes.bool,
  size: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

export default FormInput;
