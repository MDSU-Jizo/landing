import { styles } from "./style";
import {useEffect, useRef, useState} from "react";
import {Text} from "../../UI/atoms/Text";
import {Link} from "../../UI/atoms/Link";
import {Label} from "../../UI/molecules/Label";
import {Button} from "../../UI/atoms/Button";
import {Image} from "../../UI/atoms/Image";
import appleIcon from "../../../assets/icons/apple.svg";
import googlePlayIcon from "../../../assets/icons/googlePlay.svg";
import groundPath from "../../../assets/ground/walkpath.svg";
import fox from "../../../assets/icons/icon-fox.svg";
import tree from "../../../assets/icons/icon-tree.svg";
import magnifier from "../../../assets/icons/icon-magnifier.svg";
import phone from "../../../assets/icons/icon-phone.svg";
import download from "../../../assets/icons/icon-download.svg";
import jizo from "../../../assets/jizo.svg";

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

export const FixedPage = () => {
    const elRef = useRef();
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    return elRef;
    }, []);

    const handleScroll = () => {
        setScroll(elRef.current.scrollLeft)
    };

    return (
        <div ref={elRef} className={styles({})}
             onScroll={handleScroll}>
            <div id={"background_image"} className={styles({css: {
                width: `${windowDimensions.width * 7}px`,
                }})}>
            </div>
            <Image id={"ground_path"} src={groundPath} alt={"path"} />

            {
                scroll >= 0 && scroll < (windowDimensions.width) &&
                <>
                    <Link id={"fox_icon"} href={"#section_1"} target={""} image={{
                        src: fox,
                        alt: "A fox icon",
                        style: {
                            width: "100%",
                            height: "100%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"tree_icon"} href={"#section_3"} target={""} image={{
                        src: tree,
                        alt: "A tree icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"magnifier_icon"} href={"#section_4"} target={""} image={{
                        src: magnifier,
                        alt: "A magnifier icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"phone_icon"} href={"#section_5"} target={""} image={{
                        src: phone,
                        alt: "A phone icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"download_icon"} href={"#section_6"} target={""} image={{
                        src: download,
                        alt: "A download icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                </>
            }
            {
                scroll >= windowDimensions.width && scroll < (windowDimensions.width * 2) &&
                <>
                    <Link id={"fox_icon"} href={"#section_1"} target={""} image={{
                        src: fox,
                        alt: "A fox icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"tree_icon"} href={"#section_3"} target={""} image={{
                        src: tree,
                        alt: "A tree icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"magnifier_icon"} href={"#section_4"} target={""} image={{
                        src: magnifier,
                        alt: "A magnifier icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"phone_icon"} href={"#section_5"} target={""} image={{
                        src: phone,
                        alt: "A phone icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"download_icon"} href={"#section_6"} target={""} image={{
                        src: download,
                        alt: "A download icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                </>
            }
            {
                scroll >= (windowDimensions.width * 2) && scroll < (windowDimensions.width * 3) &&
                <>
                    <Link id={"fox_icon"} href={"#section_1"} target={""} image={{
                        src: fox,
                        alt: "A fox icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"tree_icon"} href={"#section_3"} target={""} image={{
                        src: tree,
                        alt: "A tree icon",
                        style: {
                            width: "100%",
                            height: "100%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"magnifier_icon"} href={"#section_4"} target={""} image={{
                        src: magnifier,
                        alt: "A magnifier icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"phone_icon"} href={"#section_5"} target={""} image={{
                        src: phone,
                        alt: "A phone icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"download_icon"} href={"#section_6"} target={""} image={{
                        src: download,
                        alt: "A download icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                </>
            }
            {
                scroll >= (windowDimensions.width * 3) && scroll < (windowDimensions.width * 4) &&
                <>
                    <Link id={"fox_icon"} href={"#section_1"} target={""} image={{
                        src: fox,
                        alt: "A fox icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"tree_icon"} href={"#section_3"} target={""} image={{
                        src: tree,
                        alt: "A tree icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"magnifier_icon"} href={"#section_4"} target={""} image={{
                        src: magnifier,
                        alt: "A magnifier icon",
                        style: {
                            width: "100%",
                            height: "100%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"phone_icon"} href={"#section_5"} target={""} image={{
                        src: phone,
                        alt: "A phone icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"download_icon"} href={"#section_6"} target={""} image={{
                        src: download,
                        alt: "A download icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                </>
            }
            {
                scroll >= (windowDimensions.width * 4) && scroll < (windowDimensions.width * 5) &&
                <>
                    <Link id={"fox_icon"} href={"#section_1"} target={""} image={{
                        src: fox,
                        alt: "A fox icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"tree_icon"} href={"#section_3"} target={""} image={{
                        src: tree,
                        alt: "A tree icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"magnifier_icon"} href={"#section_4"} target={""} image={{
                        src: magnifier,
                        alt: "A magnifier icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"phone_icon"} href={"#section_5"} target={""} image={{
                        src: phone,
                        alt: "A phone icon",
                        style: {
                            width: "100%",
                            height: "100%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"download_icon"} href={"#section_6"} target={""} image={{
                        src: download,
                        alt: "A download icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                </>
            }
            {
                scroll >= (windowDimensions.width * 5) && scroll < (windowDimensions.width * 6) &&
                <>
                    <Link id={"fox_icon"} href={"#section_1"} target={""} image={{
                        src: fox,
                        alt: "A fox icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"tree_icon"} href={"#section_3"} target={""} image={{
                        src: tree,
                        alt: "A tree icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"magnifier_icon"} href={"#section_4"} target={""} image={{
                        src: magnifier,
                        alt: "A magnifier icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"phone_icon"} href={"#section_5"} target={""} image={{
                        src: phone,
                        alt: "A phone icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"download_icon"} href={"#section_6"} target={""} image={{
                        src: download,
                        alt: "A download icon",
                        style: {
                            width: "100%",
                            height: "100%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                </>
            }
            {
                scroll >= (windowDimensions.width * 6) && scroll < (windowDimensions.width * 7) &&
                <>
                    <Link id={"fox_icon"} href={"#section_1"} target={""} image={{
                        src: fox,
                        alt: "A fox icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"tree_icon"} href={"#section_3"} target={""} image={{
                        src: tree,
                        alt: "A tree icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"magnifier_icon"} href={"#section_4"} target={""} image={{
                        src: magnifier,
                        alt: "A magnifier icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"phone_icon"} href={"#section_5"} target={""} image={{
                        src: phone,
                        alt: "A phone icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                    <Link id={"download_icon"} href={"#section_6"} target={""} image={{
                        src: download,
                        alt: "A download icon",
                        style: {
                            width: "50%",
                            height: "50%",
                            transform: "translateX(-30%)"
                        },
                    }} />
                </>
            }

            <div id={"sections"}>
                <section id={"section_1"} className={styles({css: {
                        width: `${windowDimensions.width}px`,
                        height: `${windowDimensions.height}px`,
                    }})}>
                    <div id={"section_1_text"}>
                        <div id={"section_1_title"}>
                            <Text.H1 color={"white"} style={{fontSize: "150px"}} fonts={"rockwell"}>
                                <div>Rejoins l'aventure</div>
                                <Image id={"jizo"} src={jizo} alt={"Jizo font"} />
                            </Text.H1>
                        </div>
                        <div id={"section_1_buttons"}>
                            <Link
                                href={"https://google.com/"}
                                isButton={true}
                                buttonProps={{
                                    size: "extraLarge",
                                    icon: appleIcon,
                                    style: {background: "$black"},
                                    label: "Apple Store",
                                    textProps: {
                                        color: "white",
                                        size: "$6",
                                        style: {fontWeight: 800}},
                                }}
                            />
                            <Link
                                href={"https://google.com/"}
                                isButton={true}
                                buttonProps={{
                                    size: "extraLarge",
                                    icon: googlePlayIcon,
                                    style: {background: "$black"},
                                    label: "Google Play",
                                    textProps: {
                                        color: "white",
                                        size: "$6",
                                        style: {fontWeight: 800}},
                                }}
                            />
                        </div>
                    </div>
                </section>
                <div id={"subtitles_1"} className={styles({css: {
                    left: `${windowDimensions.width * 0.85}px`
                }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        Tu as besoin d'aide pour planifier ton voyage ?
                    </Text.P>
                </div>
                <section id={"section_2"} className={styles({css: {
                        width: `${windowDimensions.width}px`,
                        height: `${windowDimensions.height}px`,
                        left: `${windowDimensions.width}px`
                }})}>
                </section>
                <div id={"subtitles_2"} className={styles({css: {
                        left: `${windowDimensions.width * 2 * 0.55}px`
                }})}>
                    <Text.P color={"white"} style={{width: "550px", fontSize: "40px", fontWeight: 600}}>
                        Ou même de sortir des sentiers battus le week-end ?
                    </Text.P>
                </div>
                <section id={"section_3"} className={styles({css: {
                        width: `${windowDimensions.width}px`,
                        height: `${windowDimensions.height}px`,
                        left: `${windowDimensions.width * 2}px`
                }})}>
                    <div id={"section_4_title"}>
                        <Text.H2 color={"white"} style={{fontSize: "120px"}}>
                            <div>Personnalise ton trajet</div>
                        </Text.H2>
                    </div>
                </section>
                <div id={"subtitles_3"} className={styles({css: {
                        left: `${windowDimensions.width * 3 * 0.5}px`
                }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        Jizo c'est l'application de planification de roadtrips 100% personnalisée
                    </Text.P>
                </div>
                <div id={"subtitles_4"} className={styles({css: {
                        left: `${windowDimensions.width * 3 * 0.63}px`
                }})}>
                    <Text.P color={"white"} style={{width: "550px", fontSize: "40px", fontWeight: 600}}>
                        En fonction de tes envies, nous planifions ton voyage
                    </Text.P>
                </div>
                <section id={"section_4"} className={styles({css: {
                        width: `${windowDimensions.width}px`,
                        height: `${windowDimensions.height}px`,
                        left: `${windowDimensions.width * 3}px`
                }})}>
                </section>
                <div id={"subtitles_5"} className={styles({css: {
                        left: `${windowDimensions.width * 5 * 0.55}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "700px", fontSize: "40px", fontWeight: 600}}>
                         Informes-nous de tes centres d'intérêts pour ton roadtrip ainsi que de ton point de départ et d'arrivée
                    </Text.P>
                </div>
                <div id={"subtitles_6"} className={styles({css: {
                        left: `${windowDimensions.width * 5 * 0.63}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        Et laisses nous nous occuper de ta roadmap
                    </Text.P>
                </div>
                <div id={"subtitles_7"} className={styles({css: {
                        left: `${windowDimensions.width * 6 * 0.576}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        En couple
                    </Text.P>
                </div>
                <div id={"subtitles_8"} className={styles({css: {
                        left: `${windowDimensions.width * 6 * 0.62}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        En solitaire
                    </Text.P>
                </div>
                <div id={"subtitles_9"} className={styles({css: {
                        left: `${windowDimensions.width * 6 * 0.595}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        En famille
                    </Text.P>
                </div>
                <div id={"subtitles_10"} className={styles({css: {
                        left: `${windowDimensions.width * 6 * 0.60}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        Découverte
                    </Text.P>
                </div>
                <div id={"subtitles_11"} className={styles({css: {
                        left: `${windowDimensions.width * 6 * 0.675}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        Backpack
                    </Text.P>
                </div>
                <div id={"subtitles_12"} className={styles({css: {
                        left: `${windowDimensions.width * 6 * 0.665}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        Activités culturelles
                    </Text.P>
                </div>
                <div id={"subtitles_13"} className={styles({css: {
                        left: `${windowDimensions.width * 6 * 0.64}px`
                    }})}>
                    <Text.P color={"white"} style={{width: "500px", fontSize: "40px", fontWeight: 600}}>
                        Activités touristiques
                    </Text.P>
                </div>
                <section id={"section_5"} className={styles({css: {
                        width: `${windowDimensions.width}px`,
                        height: `${windowDimensions.height}px`,
                        left: `${windowDimensions.width * 4}px`
                }})}>
                </section>
                <section id={"section_6"} className={styles({css: {
                        width: `${windowDimensions.width}px`,
                        height: `${windowDimensions.height}px`,
                        left: `${windowDimensions.width * 5}px`
                }})}>
                    <div id={"section_6_text"}>
                        <div id={"section_6_title"}>
                            <Text.H2 color={"white"} style={{fontSize: "150px"}}>
                                <div>Télécharge</div>
                                <Image id={"jizo"} src={jizo} alt={"Jizo font"} />
                            </Text.H2>
                        </div>
                        <div id={"section_6_buttons"}>
                            <Link
                                href={"https://google.com/"}
                                isButton={true}
                                buttonProps={{
                                    size: "extraLarge",
                                    icon: appleIcon,
                                    style: {background: "$black"},
                                    label: "Apple Store",
                                    textProps: {
                                        color: "white",
                                        size: "$6",
                                        style: {fontWeight: 800}},
                                }}
                            />
                            <Link
                                href={"https://google.com/"}
                                isButton={true}
                                buttonProps={{
                                    size: "extraLarge",
                                    icon: googlePlayIcon,
                                    style: {background: "$black"},
                                    label: "Google Play",
                                    textProps: {
                                        color: "white",
                                        size: "$6",
                                        style: {fontWeight: 800}},
                                }}
                            />
                        </div>
                    </div>
                </section>
                <section id={"section_7"} className={styles({css: {
                        width: `${windowDimensions.width}px`,
                        height: `${windowDimensions.height}px`,
                        left: `${windowDimensions.width * 6}px`
                }})}>
                    <div id={"contact"}>
                        <form>
                            <Text.H3>Contacte-nous</Text.H3>
                            <div id={"firstname_lastname"}>
                                <Label
                                    label={"Prénom"}
                                    input={{
                                        type: 'text',
                                        name: 'firstname',
                                        placeholder: 'Ton prénom ici',
                                    }}
                                    color={'default'}
                                    htmlFor={'text-firstname'}
                                    isOptional={false}
                                    isRequired={true}
                                />
                                <Label
                                    label={"Nom"}
                                    input={{
                                        type: 'text',
                                        name: 'lastname',
                                        placeholder: 'Ton nom ici',
                                    }}
                                    color={'default'}
                                    htmlFor={'text-lastname'}
                                    isOptional={false}
                                    isRequired={true}
                                />
                            </div>
                            <div id={"email_message"}>
                                <Label
                                    label={"Email"}
                                    input={{
                                        type: 'email',
                                        name: 'email',
                                        placeholder: 'Ton email ici',
                                    }}
                                    color={'default'}
                                    htmlFor={'email-email'}
                                    isOptional={false}
                                    isRequired={true}
                                />
                                <Label
                                    label={"Message"}
                                    textarea={{
                                        name: 'message',
                                        placeholder: 'Ton message ici',
                                    }}
                                    color={"default"}
                                    htmlFor={"message"}
                                    isOptional={false}
                                    isRequired={true}
                                >
                                </Label>
                            </div>
                            <div id={"form_button"}>
                                <Button
                                    label={"Envoyer"}
                                    size={"medium"}
                                    textProps={{
                                        size:'$6',
                                        color: 'white'
                                    }}
                                    style={{
                                        margin: "8px",
                                        backgroundColor: "$orange",
                                        width: "283px",
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
};