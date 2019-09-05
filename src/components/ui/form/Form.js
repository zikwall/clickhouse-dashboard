import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.getRef = this.getRef.bind(this);
    this.submit = this.submit.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  submit() {
    if (this.ref) {
      this.ref.submit();
    }
  }

  render() {
    const { className, tag: Tag, inline, innerRef, ...attrs } = this.props;
    const classes = classNames(className, inline && "form-inline");

    return <Tag {...attrs} ref={innerRef} className={classes} />;
  }
}

Form.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Form.defaultProps = {
  tag: "form"
};

export default Form;
