import { createStitches } from "@stitches/react";

// https://stitches.dev/docs/tokens
export const { css, createTheme, globalCss} = createStitches({
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

            ground1: '#CCA47A',
            ground2: '#A58065',
            ground3: '#8C6D57',
            ground4: '#665040',
            ground5: '#4C3B30',
            ground6: '#3F3029',

            city1: '#7C1818',
            city2: '#BB310E',
            city3: '#E57335',
            city4: '#EBA921',
            city5: '#311A4C',
            city6: '#452D59',
            city7: '#4F2D7F',
            city8: '#733DB2',

            mountain1: '#98618C',
            mountain2: '#282449',
            mountain3: '#72557E',
            mountain4: '#C38A98',
            mountain5: '#DAA2A0',
            mountain6: '#FBCCB6',
            mountain7: '#734D5E',
            mountain8: '#344052',
            mountain9: '#3D3B43',

            rock1: '#262933',
            rock2: '#2D303D',
            rock3: '#393D4C',
            rock4: '#61697F',

            forest1: '#344C35',
            forest2: '#446344',
            forest3: '#597F5A',
            forest4: '#6D996D',
            forest5: '#7C7A59',

            desert1: '#AD7033',
            desert2: '#D08A41',
            desert3: '#DB974D',
            desert4: '#EFAC56',
            desert5: '#FBD6A5',

            water1: '#276F9F',
            water2: '#7FD9A7',

            sun1: '#F7F6DF',
            sun2: '#F7F6C6',

            cloud: '#F2F2F263'

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
