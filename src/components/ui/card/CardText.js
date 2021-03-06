import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardText = (props) => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-text");

  return <Tag {...attrs} className={classes} />;
};

CardText.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardText.defaultProps = {
  tag: "p"
};

export default CardText;
