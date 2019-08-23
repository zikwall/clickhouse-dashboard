import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardImg = (props) => {
  const { className, top, bottom, tag: Tag, ...attrs } = props;
  let cardImgClass = "";

  if (top) {
    cardImgClass = "card-img-top";
  }

  if (bottom) {
    cardImgClass = "card-img-bottom";
  }

  cardImgClass = classNames(className, cardImgClass);

  return <Tag {...attrs} className={cardImgClass} />;
};

CardImg.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardImg.defaultProps = {
  tag: "img"
};

export default CardImg;
