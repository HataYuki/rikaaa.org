import Styles from '/styles/layout/nav.module.sass'
import {useRouter} from "next/router";
import {useState} from "react"
import Links from '../project/links'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type {PostIndexList} from "../../lib/posts";

interface Props {
    isShow: boolean,
    postIndexList: PostIndexList
}


const Nav = ({isShow, postIndexList}: Props) => {
    const router = useRouter()
    const [category, setCategory] = useState('client')
    const index = postIndexList.filter(post => post.projectType === category)
    const [preview, setPreview] = useState('')

    const showImage = () => {
        if (preview) {
            return (
                <Image
                    src={preview}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            )
        }
    }




    // useEffect(() => {
    //     setPreview(index[0].eyeCatch[0])
    // }, [category])

    return (
        <nav
            className={clsx(
                Styles.nav,
                Styles.bgColor_gray,
                {[Styles.fadeIn]: isShow},
                {[Styles.fadeOut]: !isShow},
                Styles.anim_fade
            )}
        >
            <div className={clsx(Styles.sideSpace_mg, Styles.h100, Styles.fontBold)}>
                <div className={clsx(Styles.nav__grid, Styles.wh100)}>
                    <div className={clsx(Styles.nav__mainIndex)}>
                        <ul>
                            <li
                                className={clsx(
                                    Styles.mb17,
                                    Styles.nav__item,
                                    Styles.anim_hoverTurnTextBlue,
                                    {[Styles.nav__selected]: category === 'client'},
                                )}
                            >
                                <button onClick={() => setCategory('client')}>
                                    PROJECT
                                </button>
                            </li>
                            <li
                                className={clsx(
                                    Styles.mb17,
                                    Styles.nav__item,
                                    Styles.anim_hoverTurnTextBlue,
                                    {[Styles.nav__selected]: category === 'self'},
                                )}
                            >
                                <button onClick={() => setCategory('self')}>
                                    MY PROJECT
                                </button>
                            </li>
                            <li
                                className={clsx(
                                    Styles.mb17,
                                )}
                            >
                                <Link href={'/about_me'} scroll={false}>
                                    <a
                                        href=""
                                        aria-label={'link to about me page'}
                                        className={clsx(
                                            Styles.anim_hoverTurnTextBlue,
                                            Styles.nav__hover
                                        )}
                                    >
                                        ABOUT ME
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} scroll={false}>
                                    <a
                                        href=""
                                        aria-label={'link to home'}
                                        className={clsx(
                                            Styles.anim_hoverTurnTextBlue,
                                            Styles.nav__hover
                                        )}
                                    >
                                        HOME
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(Styles.nav__subIndex)}>
                        <ul className={clsx(Styles.nav__subList)}>
                            <li>
                                <Link
                                    href={`/work/all/${(category === 'client') ? 'project' : 'my_project'}`}
                                    scroll={false}
                                >
                                    <a
                                        className={clsx(
                                            Styles.textOverflow_c1,
                                            Styles.anim_hoverTurnTextBlue,
                                            Styles.nav__hover,
                                            Styles.mb17,
                                        )}
                                        href=""
                                        aria-label={`link to index page`}
                                        onMouseEnter={() => setPreview('')}
                                    >
                                        INDEX
                                    </a>
                                </Link>
                            </li>
                            <li>
                                {
                                    index.map((post, i) => {
                                        const currentPath = router.asPath
                                        const link = `/work/${post.slug}`

                                        if(currentPath !== link){
                                            return (
                                                <Link
                                                    key={i}
                                                    href={`/work/${post.slug}`}
                                                    scroll={false}
                                                >
                                                    <a
                                                        className={clsx(
                                                            Styles.textOverflow_c1,
                                                            Styles.anim_hoverTurnTextBlue,
                                                            Styles.nav__hover,
                                                            {[Styles.mb17]: (index.length !== (i + 1))}
                                                        )}
                                                        href=""
                                                        aria-label={`link to ${post.headLine.en} page`}
                                                        onMouseEnter={() => setPreview(post.eyeCatch[0])}
                                                    >
                                                        {
                                                            post.headLine.en.toUpperCase()
                                                        }
                                                    </a>
                                                </Link>
                                            )
                                        }
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                    {/*<div className={clsx(Styles.nav__preview, Styles.pb17)}>*/}
                    {/*    <div className={clsx(Styles.nav__previewImg, Styles.relative, Styles.h100)}>*/}
                    {/*        {*/}
                    {/*            showImage()*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={clsx(Styles.nav__bottom, Styles.fontColor_black, Styles.flex)}>
                        <Links/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav