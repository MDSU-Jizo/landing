import { css, globalCss } from "../../../themes";
import rockwell from "../../../../assets/fonts/Rockwell.ttf";
import nunito from "../../../../assets/fonts/Nunito-Medium.ttf";

export const styles = css({

    variants: {
        fonts: {
            nunito: {
                fontFamily: 'Nunito',
            },
            rockwell: {
                fontFamily: 'Rockwell',
            },
        },
        color: {
            default: {
                color: "$black",
            },
            primary: {
                color: "$primary2",
            },
            secondary: {
                color: "$secondary2",
            },
            tertiary: {
                color: "$tertiary2",
            },
            quaternary: {
                color: "$quaternary2",
            },
            success: {
                color: "$success",
            },
            warning: {
                color: "$warning",
            },
            error: {
                color: "$error",
            },
            white: {
                color: "$white",
            },
        },
    },
});

export const globalStyles = globalCss({
    '@font-face': [
        {
            fontFamily: 'Rockwell',
            src: `url("${rockwell}") format("ttf")`
        },
        {
            fontFamily: 'Nunito',
            src: `url("${nunito}") format("ttf")`
        }
    ],
});
