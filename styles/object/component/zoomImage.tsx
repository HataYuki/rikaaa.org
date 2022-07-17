import type {NextPage} from 'next'
import Image from 'next/image'
import Style from 'styles/object/component/zoomImage.module.sass'
import clsx from 'clsx'

interface Props {
    src: string
    className?: string
}

const ZoomImage: NextPage<Props> = ({src, className}: Props) => {
    return (
        <div className={clsx(
            Style.root,
            className
        )}>
            <figure className={Style.zoom}>
                <Image
                    src={src}
                    layout={'fill'}
                    objectFit={'cover'}
                    loading={'eager'}
                    priority={true}
                >
                </Image>
            </figure>
        </div>
    )
}

export default ZoomImage