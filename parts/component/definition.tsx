import Styles from '/styles/component/definition.module.sass'
import {BREAKPOINTS} from "../../lib/breakpoints";
import clsx from 'clsx'
import {useBreakpoint} from "use-breakpoint";
import LineText from "./lineText";
import FadeIn from './fadeIn'
import {GoLinkExternal} from 'react-icons/go'
import {isUrl} from "../../lib/utility";
import {useIsDark} from "../../lib/useIsDark";


interface Items {
    items: Array<Array<string | number>>
}

interface Props {
    children: Items
}

const Definition = ({children}: Props) => {
    // const validator = new SimpleReactValidator();
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'win_small')
    const isDark = useIsDark()

    const description = (texts: Array<string | number>) => {


        return texts.map((text, i) => {
            const isLink = isUrl(text.toString())

            if (isLink) {
                return (
                    <a rel={'noreferrer'} href={text.toString()} target={'_blank'} key={i}
                       className={clsx(
                           Styles.definitions__description,
                           Styles.fontLight,
                           Styles.anim_hoverTurnTextBlue,
                           Styles.display_block
                       )}>
                        <span className={clsx(Styles.flex, Styles.definitions__innerLink)}>
                            <span className={clsx(Styles.textOverflow_c1)}>
                                {
                                    text
                                }
                            </span>
                            <GoLinkExternal className={clsx(Styles.definitions__icon)}/>
                        </span>
                    </a>
                )
            } else {
                return (
                    <span className={clsx(Styles.definitions__description, Styles.fontLight, Styles.display_block)}
                          key={i}>
                    {
                        text
                    }
                </span>
                )
            }
        })


    }

    return (
        <ul className={clsx(Styles.definitions)}>
            {
                children.items.map((item, i) => {


                    return (
                        <li
                            key={i}
                            className={clsx(
                                Styles.definitions__item,
                                Styles.mb76,
                                {[Styles.text_center]: !(minWidth >= BREAKPOINTS.win_medium)},
                                {[Styles.fontColor_darkGray]:!isDark},
                                {[Styles.fontColor_gray]:isDark},
                            )}
                        >
                            <FadeIn type={'fadeUp'} className={Styles.w100}>
                                <div className={clsx(
                                    {[Styles.flex]: (minWidth >= BREAKPOINTS.win_medium)},
                                    Styles.definitions__flexArea
                                )}>
                                    <LineText
                                        className={clsx(
                                            Styles.fontBold,
                                            Styles.definitions__term,
                                            {[Styles.display_block]: !(minWidth >= BREAKPOINTS.win_medium)}
                                        )}
                                        barStyle={clsx(
                                            {[Styles.definitions__bar]: (minWidth >= BREAKPOINTS.win_medium)}
                                        )}
                                    >
                                        {
                                            item[0].toString()
                                        }
                                    </LineText>

                                    <div>
                                        {
                                            description(item.filter((term, i) => i >= 1))
                                        }
                                    </div>
                                </div>
                            </FadeIn>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Definition