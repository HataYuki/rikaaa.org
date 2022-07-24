import Image from 'next/image'
import {useState, useRef, useEffect} from 'react'
import clsx from 'clsx'
import throttle from 'lodash/throttle'
import Styles from '/styles/component/roundImage.module.sass'


interface Props {
    className?: string
    radius: number
    src: string
}

const RoundImage = ({src, className, radius}: Props) => {
    const container = useRef(null)

    const [containerSizeRat, setContainerSizeRat] = useState<number[]>([1, 0])
    const [imgSizeRat, setImageSizeRat] = useState<number[]>([1, 0])
    const [imgNaturalW, setImgNaturalW] = useState(0)
    const isContainerLandscape = (containerSizeRat[0] >= containerSizeRat[1])


    const result = () => {
        if (isContainerLandscape) {
            // 親横長
            if (containerSizeRat[1] >= imgSizeRat[1]) {
                //子は親より横長
                return [1, imgSizeRat[1]]
            } else {
                //子は親より縦長
                return [containerSizeRat[1] / imgSizeRat[1], 1]
            }

        } else {
            //親縦長
            if (containerSizeRat[1] >= imgSizeRat[1]) {
                //子は親より横長
                return [1, 0]
            } else {
                //子は親より縦長
                return [containerSizeRat[1] / imgSizeRat[1], 1]
            }
        }
    }


    useEffect(() => {
        const ro = new ResizeObserver(throttle((entries) => {
            if (entries.length) {
                const rect = entries[0].contentRect
                setContainerSizeRat([1, rect.height / rect.width])
            }
        }, 100))

        container.current && ro.observe(container.current)

        return (): void => {
            container.current && ro.unobserve(container.current)
            ro.disconnect()
        }
    })


    return (
        <span
            ref={container}
            className={clsx(
                Styles.container,
                Styles.relative,
                className
            )}
            style={{
                borderRadius: `${radius}px`,
            }}
        >
            <span
                className={clsx(
                    Styles.inner,
                    Styles.absolute_centerCenter
                )}
                style={{
                    width: `${100 * result()[0]}%`,
                    height: (Math.max(1, result()[1]) > 1) ? `${100 * result()[1]}%` : undefined,
                    borderRadius: `${radius}px`,
                }}>
                <Image
                    src={src}
                    layout={'responsive'}
                    width={imgNaturalW}
                    height={imgNaturalW * imgSizeRat[1]}
                    onLoadingComplete={({naturalWidth, naturalHeight}) => {
                        setImageSizeRat([1, naturalHeight / naturalWidth])
                        setImgNaturalW(naturalWidth)
                    }}
                >
                </Image>
            </span>
        </span>
    )
}

export default RoundImage