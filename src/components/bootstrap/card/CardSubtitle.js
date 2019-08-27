import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardSubtitle = (props) => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-subtitle", "text-muted");

  return <Tag {...attrs} className={classes} />;
};

CardSubtitle.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardSubtitle.defaultProps = {
  tag: "h6"
};

export default CardSubtitle;
