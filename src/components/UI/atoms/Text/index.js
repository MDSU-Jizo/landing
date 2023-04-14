import React from 'react';
import PropTypes from "prop-types";
import { styles } from "./style";

export const Text = React.forwardRef(({
        tag: Tag,
        size,
        style,
        color,
        weight = "$normal",
        transform,
        decoration,
        ...props
    }, ref) => {
        let text = props.children;
        return (
            <Tag
                ref={ref}
                className={styles({
                    css: {
                        color: color,
                        fontSize: size,
                        fontWeight: weight,
                        textTransform: transform,
                        textDecoration: decoration,
                        ...style,
                    }
                })}
            >
                {text}
            </Tag>
        );
    }
);

// Verify parameter's types
Text.propTypes = {
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'div', 'span', 'small']),
    color: PropTypes.string,
    size: PropTypes.oneOf(['$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9']),
    weight: PropTypes.oneOf(['$bold', '$semiBold', '$medium', '$normal']),
    style: PropTypes.object,
    isDisabled: PropTypes.bool,
};

Text.defaultProps = {
    tag: 'span',
    color: 'primary',
    size: '$8',
    weight: '$normal',
    style: {},
    props: 'Text sample',
};

Text.H1 = (props) => (<Text tag={"h1"} size={"$1"} weight={"$bold"} {...props} />);
Text.H2 = (props) => (<Text tag={"h2"} size={"$2"} weight={"semiBold"} {...props} />);
Text.H3 = (props) => (<Text tag={"h3"} size={"$3"} weight={"semiBold"} {...props} />);
Text.H4 = (props) => (<Text tag={"h4"} size={"$4"} weight={"semiBold"} {...props} />);
Text.Title = (props) => (<Text tag={"h5"} size={"$5"} weight={"$semiBold"} {...props} />);
Text.Label = (props) => (<Text tag={"span"} size={"$6"} weight={"$medium"} {...props} />);
Text.Subtitle = (props) => (<Text tag={"span"} size={"$7"} weight={"$medium"} {...props} />);
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

