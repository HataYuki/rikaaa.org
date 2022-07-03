import type {NextPage} from 'next'
import {useState} from 'react'
import Image from 'next/image'
import Style from 'styles/object/component/fullImage.module.sass'
import clsx from 'clsx'

interface Props {
    src: string
}

const FullImage: NextPage<Props> = ({src}: Props) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const ratio = (width && height) ? height/width*100 : 0

    return (
        <div className={Style.root}>
            <div>
                <Image src={src}
                       layout={'responsive'}
                       width={'100%'}
                       height={`${ratio}%`}
                       placeholder={'blur'}
                       loading={'lazy'}
                       blurDataURL={'"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAIF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AntO30Y6vPiu0zzlpwnMVAoVUTACgsCfB8xjGT6iW9aBiP//Z"'}
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