import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardColumns = (props) => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-columns");

  return <Tag {...attrs} className={classes} />;
};

CardColumns.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardColumns.defaultProps = {
  tag: "div"
};

export default CardColumns;
