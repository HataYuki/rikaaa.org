import type {NextPage} from 'next'
import Style from 'styles/object/component/fullVideo.module.sass'

interface Props {
    srcList: Array<string>
}

const FullVideo: NextPage<Props> = ({srcList}: Props) => {
    const mp4Url = srcList.filter(src => /.mp4/.test(src))[0]
    const webMUrl = srcList.filter(src => /.webm/.test(src))[0]
    return (
        <div className={Style.root}>
            <video
                controls={false}
                muted={true}
                autoPlay={true}
                playsInline={true}
                loop={true}
                preload={'auto'}
            >
                <source src={mp4Url} type={'video/mp4'}/>
                <source src={webMUrl} type={'video/webm'}/>
            </video>
        </div>

    )
}

export default FullVideo