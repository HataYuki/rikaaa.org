import {NextPage} from 'next'
import Style from 'styles/layout/navi.module.sass'
import clsx from 'clsx'
import Link from "next/link";

interface Props {
    visibility: boolean
    onClick?: (e: any) => void
}

const Navi: NextPage<Props> = ({visibility,onClick}: Props) => {
    const handleClick = (e:any) =>{
        if (onClick) {
            onClick(e)
        }
    }
    return (
        <nav className={
            clsx(
                Style.root,
                {[Style.inVisible]: !visibility},
                {[Style.visible]: visibility}
            )
        }>
            <div>
                <div>
                    <ul className={Style.fHeadLine}>
                        <li>
                            <Link href={'/work/all/project'} className={Style.link}>
                                <a href="" onClick={handleClick}>
                                    PROJECT
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/work/all/my_project'}>
                                <a href="" onClick={handleClick}>
                                    MY PROJECT
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/aboutme'}>
                                <a href="" onClick={handleClick}>
                                    ABOUT ME
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navi