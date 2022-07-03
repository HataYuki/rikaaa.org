import type {NextPage} from 'next'
import Style from "@styles/object/component/link.module.sass";
import Headline from "./headline";
import Image from 'next/image'

const Link: NextPage = () => {
    return (
        <div className={Style.root}>
            <Headline>
                {{
                    en: ('link')
                }}
            </Headline>
            <ul>
                <li>
                    <a href="">
                        <Image src={'/github_logo.svg'} width={80} height={21}></Image>
                    </a>
                </li>
                <li>
                    <a href="">
                        <Image src={'/vimeo_logo.svg'} width={84} height={23}></Image>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Link