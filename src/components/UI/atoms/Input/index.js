import React from 'react';
import PropTypes from "prop-types";
import { styles } from "./style";
import { Text } from "../Text";

function handleChange(event) {
    console.log(event.target.value);
};

export const Input = ({
    type,
    label,
    name,
    placeholder = undefined,
    value = undefined,
    size,
    style,
    isRequired = false
}) => {
    return (
        <Text.Label id={type + '-' + name}>{label}
            <input
                type={type}
                id={type + '-' + name}
                className={styles({
                    css: {
                        size,
                        ...style,
                    },
                })}
                defaultValue={value}
                placeholder={placeholder}
                required={isRequired}
                onChange={handleChange}
            />
        </Text.Label>
    )
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url', 'date']),
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge']),
    style: PropTypes.object,
    isRequired: PropTypes.bool,
};

Input.defaultProps = {
    type: "text",
    label: "Input",
    name: "Input test",
    placeholder: "Your text here.",
    value: undefined,
    size: "medium",
    style: undefined,
};

