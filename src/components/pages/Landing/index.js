import {Text} from "../../UI/atoms/Text";
import { styles, globalStyle } from "./style";
import {Image} from "../../UI/atoms/Image";

import city_background1 from '../../../assets/city/Vectorcity_background1.svg';
import city_background2 from '../../../assets/city/Vectorcity_background2.svg';
import city_foreground1 from '../../../assets/city/Vectorcity_foreground1.svg';
import city_foreground2 from '../../../assets/city/Vectorcity_foreground2.svg';
import ground from '../../../assets/ground/Solground.svg';

export const Landing = () => {
    globalStyle();
    const height = window.screen.height;

    return (
        <div id="page" className={styles({})}>
            <div id={'ground_div'}>
                <Image
                    id={"ground-1"}
                    src={ground}
                    alt={"Ground"}
                    style={{
                        position: 'relative',
                        top: height / 1.185,
                        // left: 0,
                        zIndex: 1,
                    }}
                />
                <Image
                    id={"ground-2"}
                    src={ground}
                    alt={"Ground2"}
                    style={{
                        position: 'relative',
                        top: height / 1.185,
                        // left: 0,
                        zIndex: 1,
                    }}
                />
                <div id={'background_div'}>
                    <Image
                        src={city_background2}
                        alt={"Farthest City Background"}
                        hasParallax={true}
                        parallax={{
                            offset: 24000,
                            speed: 0.1
                        }}
                        style={{
                            position: 'relative',
                            top: height / 3,
                            left: '0',
                        }}
                    />
                    <Image
                        src={city_background1}
                        alt={"City Background"}
                        hasParallax={true}
                        parallax={{
                            offset: 18500,
                            speed: 0.2
                        }}
                        style={{
                            position: 'absolute',
                            top: height / 2,
                            left: '0',
                        }}
                    />
                    <Image src={city_foreground2} alt={"City Foreground"}
                           hasParallax={true}
                           parallax={{
                               offset: 7500,
                               speed: 0.3
                           }}
                           style={{
                               position: 'absolute',
                               top: height / 1.6,
                               left: '0',
                           }}
                    />
                    <Image
                        src={city_foreground1}
                        alt={"City Foreground Closest"}
                        hasParallax={true}
                        parallax={{
                            offset: -12.5,
                            speed: 0.5
                        }}
                        style={{
                            position: 'absolute',
                            top: height / 1.5,
                            left: '7%',
                        }}
                    />
                    {/*<Image*/}
                    {/*    src={underground}*/}
                    {/*    alt={"Underground"}*/}
                    {/*    style={{*/}
                    {/*        position: 'absolute',*/}
                    {/*        top: height / 1.207,*/}
                    {/*        left: '0',*/}
                    {/*    }}*/}
                    {/*/>*/}
                </div>
            </div>

        </div>
    )
};