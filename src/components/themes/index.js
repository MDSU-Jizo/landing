import { createStitches } from "@stitches/react";

// https://stitches.dev/docs/tokens
export const { css, createTheme } = createStitches({
    theme: {
        colors: {
            primary1: "#002466",
            primary2: "#003AA6",
            primary3: "#0047CC",
            primary4: "#0050E6",
            primary5: "#0056F5",

            secondary1: "#461266",
            secondary2: "#721EA6",
            secondary3: "#8C25CC",
            secondary4: "#9D29E6",
            secondary5: "#A72CF5",

            tertiary1: "#246607",
            tertiary2: "#3AA60C",
            tertiary3: "#47CC0E",
            tertiary4: "#50E610",
            tertiary5: "#57F511",

            quaternary1: "#663A2E",
            quaternary2: "#A65E4B",
            quaternary3: "#CC745C",
            quaternary4: "#E68367",
            quaternary5: "#F58B6E",

            success: "#3AA60C",
            warning: "#F5A926",
            error: "#E63225",

            white: "#ffffff",
            black: "#272727",
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
