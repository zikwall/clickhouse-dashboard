import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Progress = props => {
  const {
    children,
    className,
    barClassName,
    value,
    max,
    animated,
    striped,
    theme,
    bar,
    multi,
    tag: Tag,
    ...attrs
  } = props;

  const percent = (parseFloat(value) / parseFloat(max)) * 100;
  const progressClasses = classNames(className, "progress");
  const progressBarClasses = classNames(
    "progress-bar",
    bar ? className || barClassName : barClassName,
    animated && "progress-bar-animated",
    theme && `bg-${theme}`,
    (striped || animated) && "progress-bar-striped"
  );

  const ProgressBar = multi ? (
    children
  ) : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    >
      {children}
    </div>
  );

  if (bar) {
    return ProgressBar;
  }

  return (
    <Tag {...attrs} className={progressClasses}>
      {ProgressBar}
    </Tag>
  );
};

Progress.propTypes = {
  children: PropTypes.node,
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  tag: PropTypes.string,
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  theme: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Progress.defaultProps = {
  tag: "div",
  value: 0,
  max: 100,
  theme: "primary"
};

export default Progress;
