import {css} from "../../themes";
import background from "../../../assets/ParralaxV2.svg";

export const styles = css({
    height: "100vh",
    overflowY: "hidden",
    overflowX: "scroll",
    position: "relative",

    "#background_image": {
        backgroundImage: 'url(' + background + ')',
        // width: "12963px",
        backgroundSize: "cover",
        overflowY: "hidden",
        zIndex: -999,
    },

    "#sections": {
        display: "flex",
        width: "100%",
        height: "100%",

        "#section_1": {
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",

            "#section_1_title": {
                textAlign: "center",
                marginBottom: "-50px",
            },

            "#section_1_buttons": {
                width: "500px",
                display: "flex",
                justifyContent: "space-around",
            },
        },

        "#section_2": {
            position: "absolute",
            top: 0,
            zIndex: 3,
        },

        "#section_3": {
            position: "absolute",
            top: 0,
            zIndex: 4,
        },

        "#section_4": {
            position: "absolute",
            top: 0,
            zIndex: 5,

            "#section_4_title": {
                display: "flex",
                justifyContent: "center",
            }
        },

        "#section_5": {
            position: "absolute",
            top: 0,
            zIndex: 6,
        },

        "#section_6": {
            position: "absolute",
            top: 0,
            zIndex: 7,
            display: "flex",
            justifyContent: "center",

            "#section_6_title": {
                textAlign: "center",
                marginBottom: "-50px",
            },

            "#section_6_buttons": {
                position: "relative",
                width: "500px",
                display: "flex",
                justifyContent: "space-around",
            },
        },

        "#section_7": {
            position: "absolute",
            top: 0,
            zIndex: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "#contact": {
                width: "800px",
                height: "500px",
                background: "rgba(255, 255, 255, 0.7)",
                borderRadius: "10px",
                padding: "10px",

                "& h3": {
                    textAlign: "center",
                },

                "& #firstname_lastname": {
                    display: "flex",
                    justifyContent: "space-between",

                    "& div": {
                        width: "45%",
                    }
                },

                "& #message": {
                    width: "98%",
                    height: "100px",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 8px rgba(67, 67, 67, 0.5)",
                    fontFamily: "Nunito",
                    padding: "8px",
                    resize: "none",
                },

                "& #form_button": {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "12px",
                }
            },
        },

        "#subtitles_1": {
            position: "absolute",
            top: 0,
            zIndex: -8,
        },

        "#subtitles_2": {
            position: "absolute",
            top: "50%",
            zIndex: -8,
        },

        "#subtitles_3": {
            position: "absolute",
            top: "20%",
            zIndex: -8,
        },

        "#subtitles_4": {
            position: "absolute",
            top: "50%",
            zIndex: -8,
        },

        "#subtitles_5": {
            position: "absolute",
            top: "50%",
            zIndex: -8,
        },

        "#subtitles_6": {
            position: "absolute",
            top: "30%",
            zIndex: -8,
        },

        "#subtitles_7": {
            position: "absolute",
            top: "12%",
            zIndex: -8,
        },

        "#subtitles_8": {
            position: "absolute",
            top: "5%",
            zIndex: -8,
        },

        "#subtitles_9": {
            position: "absolute",
            top: "65%",
            zIndex: -8,
        },

        "#subtitles_10": {
            position: "absolute",
            top: "30%",
            zIndex: -8,
        },

        "#subtitles_11": {
            position: "absolute",
            top: "60%",
            zIndex: -8,
        },

        "#subtitles_12": {
            position: "absolute",
            top: "19%",
            zIndex: -8,
        },

        "#subtitles_13": {
            position: "absolute",
            top: "46%",
            zIndex: -8,
        },
    },
});