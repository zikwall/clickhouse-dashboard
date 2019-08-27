import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardGroup = (props) => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-group");

  return <Tag {...attrs} className={classes} />;
};

CardGroup.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardGroup.defaultProps = {
  tag: "div"
};

export default CardGroup;
