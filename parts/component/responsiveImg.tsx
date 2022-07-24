import Image from 'next/image'

interface Props {
    src: string
    size: Array<number>
}

const ResponsiveImg= ({src, size}: Props) => {
    return (
        <Image
            src={src}
            layout={'responsive'}
            width={100}
            height={size[1]/size[0]*100}
        />
    )
}

export default ResponsiveImg