import { css } from "../../../themes";

export const styles = css({
    padding: "0px",
    border: "none",
    borderRadius: 100,
    textAlign: "center",
    backgroundColor: "transparent",
    cursor: "pointer",

    whiteSpace: "nowrap",
    onlyText: true,
    // https://stitches.dev/docs/variants
    variants: {
        color: {
            primary: {
                color: '$orange',
                backgroundColor: '$darkGreen',
            }
        },
        size: {
            small: {
                width: "80px",
                height: "30px",
                fontSize: "$9",
                fontWeight: 400,
            },
            medium: {
                width: "120px",
                height: "40px",
                fontSize: "$7",
                fontWeight: 600,
            },
            large: {
                width: "160px",
                height: "50px",
                fontSize: "$6",
                fontWeight: 600,
            },
            extraLarge: {
                width: "200px",
                height: "60px",
                fontSize: "$5",
                fontWeight: 800,
            },
        },
        isOutlined: {},
        link: {},
        isDisabled: {},
    },
});