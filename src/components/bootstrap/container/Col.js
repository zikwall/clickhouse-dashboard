import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { BREAKPOINTS } from "../../../constants";
import { CustomPropTypes } from "../../../utils/Props";

const makeColumnClass = function(isXs, breakpoint, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${breakpoint}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${breakpoint}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${breakpoint}-${colSize}`;
};

const Col = (props) => {
  const { className, breakpoints, tag: Tag, ...attrs } = props;

  const columnClasses = [];

  breakpoints.forEach((breakpoint, idx) => {
    let columnProp = props[breakpoint];

    delete attrs[breakpoint];

    if (!columnProp && columnProp !== "") {
      return;
    }

    const isXs = idx === 0;

    if (typeof columnProp !== "object") {
      const colClass = makeColumnClass(isXs, breakpoint, columnProp);
      columnClasses.push(colClass);
      return;
    }

    const colSizeInterfix = isXs ? "-" : `-${breakpoint}-`;
    const colClass = makeColumnClass(isXs, breakpoint, columnProp.size);

    columnClasses.push(
      classNames({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]:
          columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]:
          columnProp.offset || columnProp.offset === 0
      })
    );
  });

  if (!columnClasses.length) {
    columnClasses.push("col");
  }

  const classes = classNames(className, columnClasses);

  return <Tag {...attrs} className={classes} />;
};

Col.propTypes = {
  xs: CustomPropTypes.column,
  sm: CustomPropTypes.column,
  md: CustomPropTypes.column,
  lg: CustomPropTypes.column,
  xl: CustomPropTypes.column,
  className: PropTypes.string,
  breakpoints: PropTypes.array,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Col.defaultProps = {
  tag: "div",
  breakpoints: BREAKPOINTS
};

export default Col;
