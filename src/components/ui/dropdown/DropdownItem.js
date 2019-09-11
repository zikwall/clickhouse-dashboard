import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import omit from "lodash.omit";

import { DropdownContext } from "./DropdownContext";

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  }

  getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return "-1";
    }

    return "0";
  }

  render() {
    let { className, divider, tag: Tag, header, active, ...attrs } = omit(
      this.props,
      ["toggle"]
    );

    const tabIndex = this.getTabIndex();

    const classes = classNames(
      className,
      attrs.disabled && "disabled",
      !divider && !header && "dropdown-item",
      header && "dropdown-header",
      divider && "dropdown-divider",
      active && "active"
    );

    if (Tag === "button") {
      if (header) {
        Tag = "h6";
      } else if (divider) {
        Tag = "div";
      } else if (attrs.href) {
        Tag = "a";
      }
    }

    return (
      <Tag
        type={
          Tag === "button" && (attrs.onClick || attrs.toggle)
            ? "button"
            : undefined
        }
        {...attrs}
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}
      />
    );
  }
}

DropdownItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  toggle: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

DropdownItem.defaultProps = {
  tag: "button",
  toggle: true
};

DropdownItem.contextType = DropdownContext;

export default DropdownItem;
