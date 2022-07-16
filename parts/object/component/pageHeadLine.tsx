import type {NextPage} from 'next'
import Style from 'styles/object/component/pageHeadLine.module.sass'
import Image from 'next/image'
import Container from "../../layout/container";
import clsx from 'clsx'

interface Props {
    title: string
    subTitle?: string
    imageUrl?: string
    reverse?: boolean
    overlay?: boolean
}

const PageHeadLine: NextPage<Props> = ({title, subTitle, imageUrl, reverse, overlay}: Props) => {
    let image;

    if (imageUrl) {
        image = <div className={Style.image}>
            <Image
                src={imageUrl}
                layout={'fill'}
                objectFit={'cover'}>
            </Image>
        </div>
    } else {
        image = <></>
    }

    return (
        <div className={Style.root}>
            <div className={clsx(
                Style.inner,
                {[Style.reverse]: reverse},
                {[Style.overlay]: overlay}
            )}>
                {image}
                <div className={Style.textBlock}>
                    <h1 className={Style.fHeadLine}>
                        {title.replace('_', ' ').toUpperCase()}
                    </h1>
                    <span className={Style.fSubHeadLine}>
                            {subTitle}
                        </span>
                    <div className={Style.bar}>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeadLine