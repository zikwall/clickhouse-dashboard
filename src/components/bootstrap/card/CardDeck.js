import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardDeck = (props) => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-deck");

  return <Tag {...attrs} className={classes} />;
};

CardDeck.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardDeck.defaultProps = {
  tag: "div"
};

export default CardDeck;
