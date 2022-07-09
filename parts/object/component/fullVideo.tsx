import type {NextPage} from 'next'
import {useState} from 'react'
import {InView} from 'react-intersection-observer'
import Style from 'styles/object/component/fullVideo.module.sass'
import clsx from 'clsx'

interface Props {
    srcList: Array<string>
}

const FullVideo: NextPage<Props> = ({srcList}: Props) => {
    const mp4Url = srcList.filter(src => /.mp4/.test(src))[0]
    const webMUrl = srcList.filter(src => /.webm/.test(src))[0]
    const [isIntersect, setIntersect] = useState(false)

    return (
        <InView className={Style.root} onChange={(inView, entry) => {
            const {isIntersecting} = entry
            if (!isIntersect && isIntersecting) {
                setIntersect(isIntersecting)
            }
        }}>
            <span className={clsx(
                Style.spacer,
                {[Style.show]: !isIntersect},
                {[Style.hide]: isIntersect}
            )}>
                </span>
            <video
                controls={false}
                muted={true}
                autoPlay={true}
                playsInline={true}
                loop={true}
                className={clsx(
                    {[Style.show]: isIntersect},
                    {[Style.hide]: !isIntersect}
                )}
            >
                <source src={mp4Url} type={'video/mp4'}/>
                <source src={webMUrl} type={'video/webm'}/>
            </video>
        </InView>

    )
}

export default FullVideo