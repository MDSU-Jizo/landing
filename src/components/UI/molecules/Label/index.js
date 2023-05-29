import React from 'react';
import PropTypes from "prop-types";
import { styles } from "./style";
import { Text } from "../../atoms/Text";
import { Input } from "../../atoms/Input";

export const Label = ({
    label,
    message,
    input = undefined,
    textarea = undefined,
    style,
    isRequired = false,
    isOptional = false,
    ...props
}) => {
    return (
        <div className={styles({
            css: {
                ...style
            }
        })}>
            {!isRequired && !isOptional && input && (
                <>
                    <Text.Label
                        {...props}
                    >
                        {label}
                    </Text.Label>

                    {message && (
                        <Text.Small color={message.color} >{message.text}</Text.Small>
                    )}

                    <Input {...input} />
                </>
            )}

            {isRequired && !isOptional && input && (
                <>
                    <div className={styles({
                        css: {
                            display: 'flex',
                            flexDirection: 'row',
                        }
                    })}>
                        <Text.Label
                            {...props}
                        >
                            {label}
                        </Text.Label>
                        <Text.Span color={'error'}>*</Text.Span>
                    </div>
                    {message && (
                        <Text.Small color={message.color} >{message.text}</Text.Small>
                    )}
                    <Input isRequired={true} {...input} />
                </>
            )}

            {!isRequired && isOptional && input && (
                <>
                    <div className={styles({
                        css: {
                            display: 'flex',
                            flexDirection: 'row',
                        }
                    })}>
                        <Text.Label
                            {...props}
                        >
                            {label}
                        </Text.Label>
                        <Text.Small color={'default'} style={{fontStyle: 'italic'}}>Optional</Text.Small>
                    </div>
                    {message && (
                        <Text.Small color={message.color} >{message.text}</Text.Small>
                    )}
                    <Input {...input} />
                </>
            )}

            { textarea && !input && (
                <>
                    <div className={styles({
                        css: {
                            display: 'flex',
                            flexDirection: 'row',
                        }
                    })}>
                        <Text.Label
                            {...props}
                        >
                            {label}
                        </Text.Label>
                        <Text.Small color={'default'} style={{fontStyle: 'italic'}}>Optional</Text.Small>
                    </div>
                    {message && (
                        <Text.Small color={message.color} >{message.text}</Text.Small>
                    )}
                    <textarea id={textarea.name} {...textarea} />
                </>
            )}
        </div>
    )
};

Label.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    style: PropTypes.object,
}

Label.defaultProps = {
    label: 'Label',
    input: undefined
};