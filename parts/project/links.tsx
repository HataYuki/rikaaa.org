import {FaVimeoSquare, FaGithubSquare} from 'react-icons/fa'
import Styles from '/styles/project/links.module.sass'
import clsx from 'clsx'

interface Props {
    className?: string
}

const Links = ({className}: Props) => {
    return (
        <ul className={clsx(className, Styles.flex, Styles.col2_mg17, Styles.text_center, Styles.links)}>
            <li className={clsx(Styles.text_center)}>
                <a className={clsx(Styles.link, Styles.display_inlineBlock, Styles.anim_HoverZoom)} rel={'noreferrer'}
                   href="https://vimeo.com/user18693731" target={'_blank'}>
                    <FaVimeoSquare/>
                </a>
            </li>
            <li className={clsx(Styles.text_center)}>
                <a className={clsx(Styles.link, Styles.display_inlineBlock, Styles.anim_HoverZoom)} rel={'noreferrer'}
                   href="https://github.com/HataYuki/" target={'_blank'}>
                    <FaGithubSquare/>
                </a>
            </li>
        </ul>
    )
}

export default Links