import React from 'react';
import PropTypes from "prop-types";
import { styles } from "./style";
import { Text } from "../Text";

function handleChange(event) {
    console.log(event.target.value);
}

export const Input = ({
    type,
    name,
    placeholder = undefined,
    value = undefined,
    size,
    style,
    isRequired = false,
    ...props
}) => {
    return (
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
            {...props}
        />
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

Input.Text = (props) => (<Input type={"text"} size={"medium"} {...props} />);
Input.Email = (props) => (<Input type={"email"} size={"medium"} {...props} />);
Input.Number = (props) => (<Input
    type={"text"}
    size={"medium"}
    pattern="[0-9]+"
    onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} {...props} />);
Input.Password = (props) => (<Input type={"password"} size={"medium"} {...props} />);
Input.Url = (props) => (<Input type={"url"} size={"medium"} {...props} />);
Input.Date = (props) => (<Input type={"date"} size={"medium"} {...props} />);