import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import shortid from "shortid";

class FormCheckbox extends React.Component {
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
      inline,
      valid,
      invalid,
      innerRef,
      toggle,
      small,
      id: _id,
      ...attrs
    } = this.props;

    const labelClasses = classNames(
      className,
      "custom-control",
      !toggle ? "custom-checkbox" : "custom-toggle",
      toggle && small && "custom-toggle-sm",
      inline && "custom-control-inline",
      valid && "is-valid",
      invalid && "is-invalid"
    );

    const inputClasses = classNames(
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    );

    const id = _id || `dr-checkbox-${shortid.generate()}`;

    return (
      <label className={labelClasses}>
        <input
          {...attrs}
          ref={innerRef}
          id={id}
          type="checkbox"
          className={inputClasses}
        />
        <label id={id} className="custom-control-label" aria-hidden="true" onClick={this.props.onChange} />
        <span className="custom-control-description">{children}</span>
      </label>
    );
  }
}

FormCheckbox.defaultProps = {
  onChange: () => {}
}

FormCheckbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  inline: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  toggle: PropTypes.bool,
  small: PropTypes.bool,
  onChange: PropTypes.func,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

export default FormCheckbox;
