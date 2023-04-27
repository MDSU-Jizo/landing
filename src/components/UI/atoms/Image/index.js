import React from 'react';
import PropTypes from "prop-types";
import { styles } from "./style";

export const Image = ({
    src,
    alt,
    width,
    height,
    style,
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={styles({
                css: {
                    ...style,
                }
            })}
            {...props}
        />
    )
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
}

Image.defaultProps = {
    src: undefined,
    alt: undefined,
    width: undefined,
    height: undefined,
}