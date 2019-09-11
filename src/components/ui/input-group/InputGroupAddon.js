import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import InputGroupText from "./InputGroupText";
import { INPUT_GROUP_ADDON_TYPES } from "../../../constants";

const InputGroupAddon = props => {
  const { className, children, tag: Tag, type, ...attrs } = props;
  const classes = classNames(className, `input-group-${type}`);

  if (typeof children === "string") {
    return (
      <Tag {...attrs} className={classes}>
        <InputGroupText>{children}</InputGroupText>
      </Tag>
    );
  }

  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  );
};

InputGroupAddon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(INPUT_GROUP_ADDON_TYPES).isRequired,
  tag: PropTypes.string
};

InputGroupAddon.defaultProps = {
  tag: "div"
};

export default InputGroupAddon;
