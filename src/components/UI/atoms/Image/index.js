import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styles } from './style';

export const Image = ({
      src,
      alt,
      width,
      height,
      hasParallax = false,
      parallax = { offset: 0, speed: 0 },
      style,
      ...props
    }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollX);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const transformValue = `translateX(${(scrollPosition + parallax.offset) * parallax.speed}px)`;

    if (hasParallax) {
        return (
            parallax &&
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={styles({
                    css: {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) ${transformValue}`,
                        ...style,
                    },
                })}
                {...props}
            />
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={styles({
                css: {
                    ...style,
                },
            })}
            {...props}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    parallax: PropTypes.shape({
        offset: PropTypes.number,
        speed: PropTypes.number,
    }),
    style: PropTypes.object,
};

Image.defaultProps = {
    src: undefined,
    alt: undefined,
    width: undefined,
    height: undefined,
    parallax: undefined,
    style: undefined,
};
