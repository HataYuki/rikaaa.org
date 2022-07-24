import VimeoBg from "./vimeoBg";
import Styles from '/styles/component/coverVimeo.module.sass'
import clsx from 'clsx'

interface Props {
    className?: string
}

const CoverVimeo = ({className}: Props) => {
    return (
        <div className={clsx(className, Styles.block)}>
            <div className={clsx(Styles.absolute_centerCenter, Styles.w100)}>
                <VimeoBg className={clsx(Styles.vimeo)} />
            </div>
        </div>
    )
}

export default CoverVimeo