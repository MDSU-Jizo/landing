import React from 'react';
import PropTypes from "prop-types";
import { styles } from "./style";
import { Text } from "../Text";
import {Image} from "../Image";

export const Link = ({
    href,
    target = "_blank",
    style,
    image,
    icon,
    text,
    download,
    ...props
}) => {
    if (download) {
        return (
            <a
                target={target}
                href={download}
                download={download}
                className={styles({
                    css: {
                        ...style
                    }
                })}
                {...props}
            >
                {text && (
                    <Text.Link {...text.props}>{text.text}</Text.Link>
                )}
                {image && (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        style={image.style}
                    />
                )}
                {icon}
            </a>
        )
    }

    return (
        <a
            target={target}
            href={href}
            className={styles({
                css: {
                    ...style
                }
            })}
            {...props}
        >
            {text && (
                <Text.Link {...text.props}>{text.text}</Text.Link>
            )}
            {image && (
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    style={image.style}
                />
            )}
            {icon}
        </a>
    )
};

Link.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    style: PropTypes.object,
    image: PropTypes.object,
    icon: PropTypes.object,
    text: PropTypes.object,
    download: PropTypes.string
};

Link.defaultProps = {
    href: undefined,
    target: undefined,
    style: undefined,
    image: undefined,
    icon: undefined,
    text: undefined,
    download: undefined,
};