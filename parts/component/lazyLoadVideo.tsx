import {useState} from "react";
import {useInView} from 'react-intersection-observer'
import clsx from 'clsx'

interface Props {
    className?:string
    srcList: Array<string>
}

const LazyLoadVideo = ({className,srcList}: Props) => {
    const [show, setShow] = useState(false)

    const mp4Url = srcList.filter(src => /.mp4/.test(src))[0]
    const webMUrl = srcList.filter(src => /.webm/.test(src))[0]


    const {ref, inView, entry} = useInView({
        triggerOnce: true,
        onChange: (entry) => setShow(entry)
    })

    const video = () => {
        if (show) {
            return (
                <video
                    className={clsx(className)}
                    controls={false}
                    muted={true}
                    autoPlay={true}
                    playsInline={true}
                    loop={true}
                >
                    <source src={webMUrl} type={'video/webm'}/>
                    <source src={mp4Url} type={'video/mp4'}/>
                </video>
            )
        }
    }


    return (
        <div ref={ref}>
            {
                video()
            }
        </div>
    )
}

export default LazyLoadVideo