import type {NextPage} from "next"
import Styles from "/styles/object/component/image-btn.module.sass";
import Image from "next/image"

interface Props {
    src: string,
    alt?: string,
    onClick?: (e:any) => void
}

const ImageBtn: NextPage<Props> = ({src, alt, onClick}: Props) => {
    return (
        <button className={Styles.root} onClick={onClick}>
            <span>
                <Image src={src} layout="fill" objectFit="cover" alt={alt}></Image>
            </span>
        </button>
    );
}

export default ImageBtn;