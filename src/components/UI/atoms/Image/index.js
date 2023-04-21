import React from 'react';
import PropTypes from "prop-types";
import { styles } from "./style";

export const Image = ({
    src,
    label,
    width,
    height,
    style,
    ...props
}) => {
    return (
        <img
            src={src}
            alt={label}
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
    label: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
}

Image.defaultProps = {
    src: "https://media.istockphoto.com/id/516318760/photo/red-fox-vulpes-vulpes.jpg?s=612x612&w=0&k=20&c=jelfBarPxOUUjhiRWDtXlDMAUJJqUih3nnTo7HI4zx8=",
    label: "Picture of a fox",
    width: 612,
    height: 408,
}