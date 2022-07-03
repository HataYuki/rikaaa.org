import type {NextPage} from 'next'
import Style from 'styles/object/project/vision.module.sass'
import Image from 'next/image'

const Vision: NextPage = () => {
    return (
        <div className={Style.root}>
            <div className={Style.wrapper}>
                <div className={Style.vision}>
                    <div className={Style.img}>
                        <Image src={'/test1.png'} layout="fill" objectFit="cover"></Image>
                    </div>
                    <div className={Style.textBlock}>
                        <div>
                            <h3 className={Style.fHeadLine}>WHAT I <span>DID</span></h3>
                            <p className={Style.fText}>フロントエンドの影響範囲を武器に、積極的に上流へコミットしつつ、</p>
                            <p className={Style.fText}>保険会社や自動車メーカなど几帳面な作業を求められる案件を経験しました。</p>
                            <p className={Style.fText}>また、少人数の環境で、</p>
                            <p className={Style.fText}>自走力を武器に、</p>
                            <p className={Style.fText}>環境に依存しない実績を残してきました。</p>
                        </div>
                    </div>
                </div>
                <div className={Style.vision}>
                    <div className={Style.img}>
                        <Image src={'/test1.png'} layout="fill" objectFit="cover"></Image>
                    </div>
                    <div className={Style.textBlock}>
                        <div>
                            <h3 className={Style.fHeadLine}>WHAT I <span>DO</span></h3>
                            <p className={Style.fText}>XXXXXXXXXXXXXX</p>
                            <p className={Style.fText}>XXXXXXXXXXXXXX</p>
                            <p className={Style.fText}>XXXXXXXXXXXXXX</p>
                            <p className={Style.fText}>XXXXXXXXXXXXXX</p>
                            <p className={Style.fText}>XXXXXXXXXXXXXX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision