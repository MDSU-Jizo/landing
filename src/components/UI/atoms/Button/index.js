import React from 'react';
import PropTypes from "prop-types";
import { styles } from "./style";
import {Text} from "../Text";
import {Image} from "../Image";

export const Button = ({
    label,
    color,
    size,
    link,
    style,
    onHover,
    onClick,
    isOutlined = false,
    isDisabled = false,
    icon,
    textProps
}) => {
    return (
        <button
            type={"button"}
            className={styles({
                color: color,
                size: size,
                isOutlined: isOutlined,
                link: link,
                css: style,
                onHover: onHover,
                onClick: onClick,
                isDisabled: isDisabled,
            })}
        >
            <div id={"button_with_icon_and_text"}>
                {icon &&
                    <Image src={icon} />
                }

                {label &&
                    <Text.Button {...textProps}>{label}</Text.Button>
                }
            </div>
        </button>
    );
};

// Verify parameter's types
Button.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'warning',
        'error'
    ]),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge']),
    link: PropTypes.string,
    style: PropTypes.object,
    onHover: PropTypes.func,
    onClick: PropTypes.func,
    isOutlined: PropTypes.bool,
    isDisabled: PropTypes.bool,
    icon: PropTypes.string,
    textProps: PropTypes.object,
};

Button.defaultProps = {
    label: 'Button',
    color: 'primary',
    size: 'medium',
    link: undefined,
    style: {},
    onHover: undefined,
    onClick: undefined,
    icon: undefined,
    textProps: {size: "$7"}
};
