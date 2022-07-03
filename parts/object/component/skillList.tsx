import {NextPage} from 'next'
import Style from 'styles/object/component/skillList.module.sass'
import Image from 'next/image'

const SkillList: NextPage = () =>{
    return(
        <ul>
            <li className={Style.skill}>
                <dl className={Style.card}>
                    <dt>
                        <Image src="/dammy.jpeg" layout="fill" objectFit="cover"></Image>
                    </dt>
                    <dd>
                        <h3 className={Style.fSubHeadLine}>FRONTEND</h3>
                        <div className={Style.fText}>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                        </div>
                    </dd>
                </dl>
            </li>
            <li className={Style.skill}>
                <dl className={Style.card}>
                    <dt>
                        <Image src="/dammy.jpeg" layout="fill" objectFit="cover"></Image>
                    </dt>
                    <dd>
                        <h3 className={Style.fSubHeadLine}>FRONTEND</h3>
                        <div className={Style.fText}>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                        </div>
                    </dd>
                </dl>
            </li>
            <li className={Style.skill}>
                <dl className={Style.card}>
                    <dt>
                        <Image src="/dammy.jpeg" layout="fill" objectFit="cover"></Image>
                    </dt>
                    <dd>
                        <h3 className={Style.fSubHeadLine}>FRONTEND</h3>
                        <div className={Style.fText}>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                        </div>
                    </dd>
                </dl>
            </li>
        </ul>
    )
}

export default SkillList