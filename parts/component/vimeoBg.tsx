import React, {useRef, useEffect, useState} from 'react'
import Styles from '/styles/component/vimeoBg.module.sass'
import Script from 'next/script'
import Image from 'next/image'
import clsx from 'clsx'
import throttle from 'lodash/throttle'

interface Props {
    className?: string
    style?: React.CSSProperties
    onResize?: (e: any) => void
}

let sdkLoaded: boolean = false
const VimeoBg = ({className, style, onResize}: Props) => {
    const vimeo = useRef(null)

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
        const ro = new ResizeObserver(throttle((entries) => {
            if (entries.length) {
                onResize && onResize(entries[0].contentRect)
            }
        }, 100))

        vimeo.current && ro.observe(vimeo.current)

        return (): void => {
            vimeo.current && ro.unobserve(vimeo.current)
            ro.disconnect()
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
                ref={vimeo}
                id={'vimeoBg'}
                className={clsx(
                    Styles.vimeoBg,
                    className,
                )}
                style={style}
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