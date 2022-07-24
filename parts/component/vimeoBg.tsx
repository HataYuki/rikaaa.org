import React, {useEffect} from 'react'
import Styles from '/styles/component/vimeoBg.module.sass'
import Script from 'next/script'
import Image from 'next/image'
import clsx from 'clsx'

interface Props {
    className?: string
}

let sdkLoaded: boolean = false
const VimeoBg = ({className}: Props) => {
    const handleSdkLoaded = () => {
        sdkLoaded = true
        const Vimeo = (window as any).Vimeo

        if (!Vimeo) return;

        new Vimeo.Player('vimeoBg', {
            id: '729215901',
            background: true,
            autoplay: true,
            loop: true,
            byline: false,
            title: false
        })
    }

    useEffect(() => {
        if(sdkLoaded){
            handleSdkLoaded()
        }
    }, [sdkLoaded])


    return (
        <>
            <Script
                id={'vimeo_api'}
                src={'https://player.vimeo.com/api/player.js'}
                async={true}
                strategy={'lazyOnload'}
                onLoad={handleSdkLoaded}
            >
            </Script>
            <div
                id={'vimeoBg'}
                className={clsx(
                    Styles.vimeoBg,
                    className,
                )}
            >

                <Image
                    className={Styles.thumbnail}
                    src={'/vimeo_thumb.jpg'}
                    alt={'rikaaa.org'}
                    layout={'responsive'}
                    width={'100%'}
                    height={`${100 * (9 / 16)}%`}
                    loading={'lazy'}
                />
            </div>
        </>
    )
}

export default VimeoBg