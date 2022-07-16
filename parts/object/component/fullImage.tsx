import type {NextPage} from 'next'
import {useState} from 'react'
import Image from 'next/image'
import Style from 'styles/object/component/fullImage.module.sass'

interface Props {
    src: string
}

const FullImage: NextPage<Props> = ({src}: Props) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const ratio = (width && height) ? height/width*100 : (9/16)*100

    return (
        <div className={Style.root}>
            <div>
                <Image src={src}
                       layout={'responsive'}
                       width={'100%'}
                       height={`${ratio}%`}
                       priority={true}
                       loading={'eager'}
                       onLoadingComplete={({naturalWidth,naturalHeight})=>{
                           setWidth(naturalWidth)
                           setHeight(naturalHeight)
                       }}
                ></Image>
            </div>
        </div>
    )
}

export default FullImage