import type {NextPage} from 'next'
import Style from "styles/object/component/ad.module.sass";
import ImageBtn from "./imageBtn";
import clsx from 'clsx'


const Ad: NextPage = () => {
    return (
        <div className={Style.root}>
            <a className={Style.block} target={'_blank'} rel={'noreferrer'} href={'https://www.cgarts.or.jp/scg/2013/prizes/nominate/entry/74.html'}>
                <ImageBtn isBtn={false} src={'/ad_cg.jpg'} ></ImageBtn>
                <h5 className={clsx(Style.title, Style.fHeadLine)}>19th CANPUS GENIUS AWARD</h5>
            </a>
            <a className={Style.block} target={'_blank'} rel={'noreferrer'} href={'https://www.nhk.or.jp/techne/id/content.html#programming'}>
                <ImageBtn isBtn={false} src={'/ad_tecne.jpg'} ></ImageBtn>
                <h5 className={clsx(Style.title, Style.fHeadLine)}>TECNE</h5>
            </a>
            <a className={Style.block} target={'_blank'} rel={'noreferrer'} href={'http://tokyo-design2020.jp/vol3/ias.html'} >
                <ImageBtn isBtn={false} src={'/ad_tokyoDesign.jpg'} ></ImageBtn>
                <h5 className={clsx(Style.title, Style.fHeadLine)}>TOKYO DESIGN 2020 OPEN SESSION</h5>
            </a>
        </div>
    )
}

export default Ad