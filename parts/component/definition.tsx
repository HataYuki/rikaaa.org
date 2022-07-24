import Styles from '/styles/component/definition.module.sass'
import {BREAKPOINTS} from "../../lib/breakpoints";
import clsx from 'clsx'
import {useBreakpoint} from "use-breakpoint";
import LineText from "./lineText";
import FadeIn from './fadeIn'
import {GoLinkExternal} from 'react-icons/go'
import SimpleReactValidator from 'simple-react-validator'


interface Items {
    items: Array<Array<string | number>>
}

interface Props {
    children: Items
}

const Definition = ({children}: Props) => {
    const validator = new SimpleReactValidator();
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'win_small')

    const description = (texts: Array<string | number>) => {


        return texts.map((text, i) => {
            const isLink = validator.check(text, 'url')

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
                            {
                                text
                            }
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
                                {[Styles.text_center]: !(minWidth >= BREAKPOINTS.win_medium)},

                                Styles.mb76,
                                Styles.definitions__item
                            )}
                        >
                            <FadeIn type={'fadeUp'} className={Styles.w100}>
                                <div className={clsx(
                                    {[Styles.flex]: (minWidth >= BREAKPOINTS.win_medium)},
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