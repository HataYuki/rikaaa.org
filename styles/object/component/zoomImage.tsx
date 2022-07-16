import type {NextPage} from 'next'
import Image from 'next/image'
import Style from 'styles/object/component/zoomImage.module.sass'

interface Props {
    src: string
}

const ZoomImage: NextPage<Props> = ({src}: Props) => {
    return (
        <div className={Style.root}>
            <figure className={Style.zoom}>
                <Image
                    src={src}
                    layout={'fill'}
                    objectFit={'cover'}
                    loading={'lazy'}
                >
                </Image>
            </figure>
        </div>
    )
}

export default ZoomImage