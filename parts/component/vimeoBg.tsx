import React, {useEffect,useState} from 'react'
import Styles from '/styles/component/vimeoBg.module.sass'
import Script from 'next/script'
import Image from 'next/image'
import clsx from 'clsx'

interface Props {
    className?: string
}

const VimeoBg = ({className}: Props) => {
    const [loadImage,setLoadImage] = useState(false)

    const Vimeo = () =>{
        if(loadImage){
            return(
                <iframe
                    src="https://player.vimeo.com/video/729215901?h=235145bfab&title=0&byline=0&autoplay=1&loop=1&background=1"
                    frameBorder="0"
                    allow={'autoplay;'}
                >
                </iframe>
            )
        }
    }


    return (
        <div
            className={clsx(
                Styles.vimeoBg,
                className,
            )}
        >
            {
                Vimeo()
            }

            <Image
                className={Styles.thumbnail}
                src={'/vimeo_thumb.jpg'}
                alt={'rikaaa.org'}
                layout={'responsive'}
                width={'100%'}
                height={`${100 * (9 / 16)}%`}
                loading={'lazy'}
                onLoad={()=>setLoadImage(true)}
            />
        </div>
    )
}

export default VimeoBg