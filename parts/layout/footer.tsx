import Styles from '/styles/layout/footer.module.sass'
import Link from 'next/link'
import Links from "../project/links";
import clsx from 'clsx'
import variables from '/styles/variables.module.sass'
import {useBreakpoint} from "use-breakpoint";

const BREAKPOINTS: any = {}

for (const [key, value] of Object.entries(variables)) {
    BREAKPOINTS[key] = Number(value)
}

const Footer = () => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'win_small')

    return (
        <footer
            className={clsx(
                Styles.footer,
                Styles.bgColor_black,
                Styles.fontColor_white,
            )}>
            <div className={clsx(Styles.mw1440)}>
                <div className={clsx(
                    Styles.sideSpace_mg,
                    {[Styles.flex_center]:(minWidth >= BREAKPOINTS.win_small)},
                    {[Styles.flex_center_bottom]:(minWidth < BREAKPOINTS.win_small)},
                    {[Styles.flex_center]:!(minWidth < BREAKPOINTS.win_small)},
                )}>
                    <div className={clsx(
                        Styles.footer__leftColumn,
                        {[Styles.flex_center]:(minWidth >= BREAKPOINTS.win_small)}
                    )}>
                        <p className={clsx(
                            Styles.fontBold,
                            Styles.footer__title
                        )}>
                            <Link href={'/'}>
                                <a
                                    href=""
                                    aria-label={'link to home'}
                                    className={clsx(
                                        Styles.anim_hoverTurnTextBlue
                                    )}
                                >
                                    rikaaa.org
                                </a>
                            </Link>
                        </p>
                        <ul
                            className={clsx(
                                Styles.footer__links,
                                {[Styles.flex_center]:(minWidth >= BREAKPOINTS.win_small)}
                            )}>
                            <li className={clsx(Styles.footer__link,Styles.anim_hoverTurnTextBlue)}>
                                <Link href={'/work/all/project'} scroll={false}>
                                    <a href="" aria-label={'link to index page of project'}>
                                        PROJECT
                                    </a>
                                </Link>
                            </li>
                            <li className={clsx(Styles.footer__link,Styles.anim_hoverTurnTextBlue)}>
                                <Link href={'/work/all/my_project'} scroll={false}>
                                    <a href="" aria-label={'link to index page of my project'}>
                                        MY PROJECT
                                    </a>
                                </Link>
                            </li>
                            <li className={clsx(Styles.footer__link,Styles.anim_hoverTurnTextBlue)}>
                                <Link href={'/about_me'} scroll={false}>
                                    <a href="" aria-label={'link to about me'}>
                                        ABOUT ME
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(Styles.footer_rightColumn)}>
                        <Links/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer