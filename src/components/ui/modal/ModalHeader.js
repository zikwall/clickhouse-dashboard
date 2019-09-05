import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ModalHeader = props => {
  const {
    className,
    children,
    toggle,
    tag: Tag,
    closeAriaLabel,
    titleClass,
    ...attrs
  } = props;

  const classes = classNames("modal-header", className);
  const titleClasses = classNames("modal-title", titleClass);
  let closeButton = null;

  if (toggle) {
    closeButton = (
      <button
        type="button"
        onClick={toggle}
        className="close"
        aria-label={closeAriaLabel}
      >
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <div className={classes} {...attrs}>
      <Tag className={titleClasses}>{children}</Tag>
      {closeButton}
    </div>
  );
};

ModalHeader.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func,
  tag: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  titleClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

ModalHeader.defaultProps = {
  tag: "h5",
  closeAriaLabel: "Close"
};

export default ModalHeader;
