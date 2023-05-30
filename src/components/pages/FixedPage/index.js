import { styles } from "./style";
import {useEffect, useRef, useState} from "react";
import {Text} from "../../UI/atoms/Text";
import appleIcon from "../../../assets/icons/apple.svg";
import googlePlayIcon from "../../../assets/icons/googlePlay.svg";
import {Link} from "../../UI/atoms/Link";
import {Label} from "../../UI/molecules/Label";
import {Button} from "../../UI/atoms/Button";

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

export const FixedPage = () => {
    const elRef = useRef();
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

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

    return (
        <div ref={elRef} className={styles({})}>
            <div id={"background_image"} className={styles({css: {
                width: `${windowDimensions.width * 7}px`,
                }})}></div>
            <div id={"sections"}>
                <section id={"section_1"} className={styles({css: {
                        width: `${windowDimensions.width}px`,
                        height: `${windowDimensions.height}px`,
                    }})}>
                    <div id={"section_1_text"}>
                        <div id={"section_1_title"}>
                            <Text.H1 color={"white"} style={{fontSize: "150px"}} fonts={"rockwell"}>
                                <div>Rejoins l'aventure</div>
                                <div id={"jizo"}>JIZO</div>
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
                                <div id={"jizo"}>JIZO</div>
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
                            <Text.H3 style={{}}>Contacte-nous</Text.H3>
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
                            <div>
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
                                    isOptional={true}
                                >
                                </Label>
                            </div>
                            <div id={"form_button"}>
                                <Button label={"Envoyer"} size={"medium"} textProps={{size:'$6', color: 'white'}} style={{margin: "8px", backgroundColor: "$black"}}/>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
};