import { Button } from '../../UI/atoms/Button';
import { Text } from "../../UI/atoms/Text";
import {css} from "../../themes";
import { styles } from "./style";
import {Input} from "../../UI/atoms/Input";
import moment from "moment";



export const Dev = () => {
    const date = moment().format('YYYY-MM-DD')
    return (
        <div>
            <h1>Dev page</h1>
            <div>
                <Text.H1 color={"primary"}>Header 1</Text.H1>
                <Text.H2 color={"secondary"}>Header 2</Text.H2>
                <Text.H3 color={"tertiary"}>Header 3</Text.H3>
                <Text.H4 color={"quaternary"}>Header 4</Text.H4>
                <Text.Title>Title</Text.Title>
                <Text.Label>Label</Text.Label><br/>
                <Text.Subtitle color={"success"}>Subtitle</Text.Subtitle>
                <Text.P>Paragraph</Text.P>
                <Text.Div>Div</Text.Div>
                <Text.Span color={"warning"}>Span</Text.Span><br/>
                <Text.Link color={"primary"}>Link</Text.Link><br/>
                <Text.Small color={"error"}>Small</Text.Small><br/>
                <Text.Button>Button</Text.Button><br/>
                <Text>Default</Text><br/>
            </div>
            <div>
                <Button size={"extraLarge"} color={"primary"} textProps={{size: '$5', color: '$white'}} />
                <Button label={"Success"} size={"large"} color={"success"} textProps={{size:'$6', color: '$white'}} />
                <Button label={"Warning"} size={"medium"} color={"warning"} textProps={{size:'$7', color: '$white'}} />
                <Button label={"Error"} size={"small"} color={"error"} textProps={{size:'$9', color: '$white'}} />
            </div>
            <div>
                <Input.Text
                    label={"Input Text"}
                    name={"InputTestText"}
                    placeholder={"Your text here."}
                    size={"medium"}
                    style={{display: "flex", flexDirection: "column"}}
                />
                <Input.Email
                    label={"Input Email"}
                    name={"InputTestEmail"}
                    placeholder={"Your email here."}
                    size={"medium"}
                    style={{display: "flex", flexDirection: "column"}}
                />
                <Input.Number
                    label={"Input Number"}
                    name={"InputTestNumber"}
                    value={0}
                    size={"medium"}
                    style={{display: "flex", flexDirection: "column"}}
                />
                <Input.Password
                    label={"Input Password"}
                    name={"InputTestPassword"}
                    placeholder={"Your password here."}
                    size={"medium"}
                    style={{display: "flex", flexDirection: "column"}}
                />
                <Input.Url
                    label={"Input URL"}
                    name={"InputTestUrl"}
                    placeholder={"Your URL here."}
                    size={"medium"}
                    style={{display: "flex", flexDirection: "column"}}
                />
                <Input.Date
                    label={"Input Date"}
                    name={"InputTestDate"}
                    value={date}
                    size={"medium"}
                    style={{display: "flex", flexDirection: "column"}}
                />
            </div>
            <div className={styles({
                css: {
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                }
            })}>
                <div className={styles({
                    css: {
                        display: "flex",
                        flexDirection: "column",
                    }
                })}>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$primary1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Primary 1</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$primary2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Primary 2</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$primary3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Primary 3</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$primary4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Primary 4</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$primary5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Primary 5</Text.Label></div>
                </div>
                <div className={styles({
                    css: {
                        display: "flex",
                        flexDirection: "column",
                    }
                })}>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$secondary1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Secondary 1</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$secondary2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Secondary 2</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$secondary3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Secondary 3</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$secondary4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Secondary 4</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$secondary5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Secondary 5</Text.Label></div>
                </div>
                <div className={styles({
                    css: {
                        display: "flex",
                        flexDirection: "column",
                    }
                })}>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$tertiary1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Tertiary 1</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$tertiary2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Tertiary 2</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$tertiary3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Tertiary 3</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$tertiary4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Tertiary 4</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$tertiary5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Tertiary 5</Text.Label></div>
                </div>
                <div className={styles({
                    css: {
                        display: "flex",
                        flexDirection: "column",
                    }
                })}>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$quaternary1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Quaternary 1</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$quaternary2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Quaternary 2</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$quaternary3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Quaternary 3</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$quaternary4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Quaternary 4</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$quaternary5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Quaternary 5</Text.Label></div>
                </div>
                <div className={styles({
                    css: {
                        display: "flex",
                        flexDirection: "column",
                    }
                })}>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$success",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Success</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$warning",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Warning</Text.Label></div>
                    <div className={styles({
                        css:{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "$error",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    })}><Text.Label color={"white"}>Error</Text.Label></div>
                </div>
            </div>
        </div>
    )
};
