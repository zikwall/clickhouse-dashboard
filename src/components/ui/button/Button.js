import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      className,
      theme,
      size,
      pill,
      outline,
      squared,
      active,
      disabled,
      innerRef,
      tag: Tag,
      block,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "btn",
      theme && `btn-${outline ? "outline-" : ""}${theme}`,
      size && `btn-${size}`,
      pill && "btn-pill",
      squared && "btn-squared",
      block && "btn-block",
      active && "active"
    );

    Tag = attrs.href && Tag === "button" ? "a" : Tag;
    const tagType = Tag === "button" && attrs.onClick ? "button" : undefined;

    return (
      <Tag
        ref={innerRef}
        type={tagType}
        {...attrs}
        className={classes}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.string,
  size: PropTypes.string,
  outline: PropTypes.bool,
  pill: PropTypes.bool,
  squared: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

Button.defaultProps = {
  theme: "primary",
  tag: "button"
};

export default Button;
