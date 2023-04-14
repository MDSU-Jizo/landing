import { createStitches } from "@stitches/react";

// https://stitches.dev/docs/tokens
export const { css, createTheme } = createStitches({
    theme: {
        colors: {
            "white": "#FFFFFF",
            "black": "#272727",
            "darkGreen": "#264653",
            "duckGreen": "#2a9d8f",
            "yellow": "#e9c46a",
            "orange": "#f4a261",
            "orangeBrick": "#e76f51",
        },
        space: {},
        sizes: {},
        fonts: {},
        fontSizes: {
            1: "50px",
            2: "40px",
            3: "35px",
            4: "30px",
            5: "25px",
            6: "20px",
            7: "15px",
            8: "12px",
            9: "10px",
        },
        fontWeights: {
            normal: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
        },
        lineHeights: {},
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    },
});

// const springTheme = createTheme('spring', spring);
// const summerTheme = createTheme('summer', summer);
// const autumnTheme = createTheme('autumn', autumn);
// const winterTheme = createTheme('winter', winter);