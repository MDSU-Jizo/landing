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

    "#ground_path": {
        width: "100%",
        position: "fixed",
        bottom: "5%",
        left: 0,
        zIndex: -1,
    },

    "#fox_icon": {
        position: "fixed",
        bottom: "9%",
        left: "5%",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",

        "& img": {
            transform: "translateX(0)",
        }
    },

    "#tree_icon": {
        position: "fixed",
        bottom: "12%",
        left: "25%",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",

        "& img": {
            transform: "translateX(0)",
        }
    },

    "#magnifier_icon": {
        position: "fixed",
        bottom: "12%",
        left: "45%",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",

        "& img": {
            transform: "translateX(0)",
        }
    },

    "#phone_icon": {
        position: "fixed",
        bottom: "15%",
        left: "65%",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",

        "& img": {
            transform: "translateX(0)",
        }
    },

    "#download_icon": {
        position: "fixed",
        bottom: "11%",
        left: "85%",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",

        "& img": {
            transform: "translateX(0)",
        }
    },

    "#sections": {
        display: "flex",
        width: "100%",
        height: "100%",

        "#jizo": {
            width: "50%",
            height: "50%",
        },

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
            textAlign: "center",
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
                width: "700px",
                height: "500px",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "10px",

                "& label": {
                    color: "$black",
                },

                "& h3": {
                    textAlign: "center",
                    color: "$orange",
                },

                "& #firstname_lastname": {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    margin: "0 auto",

                    "& div": {
                        width: "45%",
                    }
                },

                "& input": {
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    boxShadow: "2px 2px 0px #272727, -2px 2px 0px #272727",

                    "&::placeholder": {
                        color: "$orange",
                    },
                },

                "& #email_message": {
                    width: "80%",
                    margin: "0 auto",

                    "& #message": {
                        height: "100px",
                        border: "none",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        boxShadow: "2px 2px 0px #272727, -2px 2px 0px #272727",     /* Shadow to extend the border */
                        fontFamily: "Nunito",
                        padding: "8px",
                        resize: "none",

                        "&::placeholder": {
                            color: "$orange",
                        },
                    },
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