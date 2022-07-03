import type {NextPage} from 'next'
import Style from "styles/object/component/ad.module.sass";
import Image from 'next/image'


const Ad:NextPage = () =>{
    return(
        <ul className={Style.root}>
            <li>
                    <span>
                        <Image src={'/dammy.jpeg'} layout={'fill'} objectFit={'cover'}></Image>
                    </span>
                <h5 className={Style.fHeadLine}>19th CANPUS GENIUS AWARD</h5>
            </li>
            <li>
                    <span>
                        <Image src={'/dammy.jpeg'} layout={'fill'} objectFit={'cover'}></Image>
                    </span>
                <h5 className={Style.fHeadLine}>19th CANPUS GENIUS AWARD</h5>
            </li>
            <li>
                    <span>
                        <Image src={'/dammy.jpeg'} layout={'fill'} objectFit={'cover'}></Image>
                    </span>
                <h5 className={Style.fHeadLine}>19th CANPUS GENIUS AWARD</h5>
            </li>
        </ul>
    )
}

export default Ad