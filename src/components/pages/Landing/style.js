import {css, globalCss} from "../../themes";

export const styles = css({
    "&#page": {
        // width: '10000px',
        height: '100vh',
        // backgroundColor: '$primary1',
        overflowX: 'scroll',
        overflowY: 'hidden',
    },

    "#ground_div": {
        position: "absolute",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        zIndex: -1,
    },

    "#ground-1": {
        position: "relative",
        border: "1px solid red",
    },

    "#ground-2": {
        transform: "scaleX(-1)",
        position: "relative",
        left: -4315,
        border: "2px solid blue",
    },

    "#background_div": {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});

export const globalStyle = globalCss({
    'body': {
        background: 'linear-gradient(180deg, #282449 0%, #72557E 14%, #72557E 25%, #C38A98 53%, #FBCCB6 75%) !important',
        fontFamily: 'Arial, sans-serif',
    },
    '*': {
        boxSizing: 'border-box',
    },
});