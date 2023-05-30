import React from 'react';
import PropTypes from "prop-types";
import {globalStyles, styles} from "./style";

export const Text = React.forwardRef(({
        tag: Tag,
        size,
        style,
        fonts = 'nunito',
        color,
        weight = "$normal",
        transform,
        decoration,
        ...props
    }, ref) => {
        globalStyles();
        let text = props.children;
        delete props.children;
        return (
            <Tag
                ref={ref}
                className={styles({
                    color: color,
                    fonts: fonts,
                    css: {
                        tag: Tag,
                        fontSize: size,
                        fontWeight: weight,
                        textTransform: transform,
                        textDecoration: decoration,
                        ...style,
                    }
                })}
                {...props}
            >
                {text}
            </Tag>
        );
    }
);

// Verify parameter's types
Text.propTypes = {
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'label', 'p', 'div', 'span', 'small']),
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'warning',
        'error',
        'white',
        'default'
    ]),
    size: PropTypes.oneOf(['$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9']),
    weight: PropTypes.oneOf(['$bold', '$semiBold', '$medium', '$normal']),
    style: PropTypes.object,
    isDisabled: PropTypes.bool,
};

Text.defaultProps = {
    tag: 'span',
    color: 'default',
    size: '$8',
    weight: '$normal',
    style: {},
    children: 'Text sample',
};

Text.H1 = (props) => (<Text tag={"h1"} size={"$1"} weight={"$bold"} fonts={"rockwell"} {...props} />);
Text.H2 = (props) => (<Text tag={"h2"} size={"$2"} weight={"$semiBold"} fonts={"rockwell"} {...props} />);
Text.H3 = (props) => (<Text tag={"h3"} size={"$3"} weight={"$semiBold"} fonts={"rockwell"} {...props} />);
Text.H4 = (props) => (<Text tag={"h4"} size={"$4"} weight={"$semiBold"} fonts={"rockwell"} {...props} />);
Text.Title = (props) => (<Text tag={"h5"} size={"$5"} weight={"$semiBold"} fonts={"rockwell"} {...props} />);
Text.Label = (props) => (<Text tag={"label"} size={"$6"} weight={"$medium"} htmlFor={props.for} fonts={"rockwell"} {...props} />);
Text.Subtitle = (props) => (<Text tag={"span"} size={"$7"} weight={"$medium"} fonts={"rockwell"} {...props} />);
Text.P = (props) => (<Text tag={"p"} size={"$8"} {...props} />);
Text.Div = (props) => (<Text tag={"div"} size={"$8"} {...props} />);
Text.Span = (props) => (<Text tag={"span"} size={"$8"} {...props} />);
Text.Link = (props) => (<Text tag={"span"} size={"$8"} decoration={"underline"} {...props} />);
Text.Small = (props) => (<Text tag={"small"} size={"$9"} {...props} />);
Text.Button = (props) => (
    <Text
        tag={"span"}
        weight={'$medium'}
        transform={"uppercase"}
        {...props}
    />
);
