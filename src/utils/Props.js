import PropTypes from "prop-types";

export const CustomPropTypes = {
    target: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.element,
        PropTypes.shape({ current: PropTypes.any })
    ]),
    column: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
        PropTypes.shape({
            offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            size: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.number,
                PropTypes.string
            ]),
            order: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        })
    ])
};
