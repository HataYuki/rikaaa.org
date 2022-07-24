import {useRouter} from "next/router";
import {useState, useEffect} from 'react'
import Nav from "./nav";
import Styles from '/styles/layout/header.module.sass'
import clsx from 'clsx'
import type {PostIndexList} from "../../lib/posts";

interface Props {
    postIndexList: PostIndexList
}

const Header = ({postIndexList}: Props) => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleChangeStart = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {

        router.events.on('routeChangeStart', handleChangeStart)

        return (): void => {
            router.events.off('routeChangeStart', handleChangeStart)
        }
    })

    return (
        <header
            className={clsx(
                Styles.fontColor_white, Styles.root
            )}
        >

            <div
                className={clsx(
                    Styles.mw1440,
                    Styles.absolute,
                    Styles.container,
                    Styles.w100
                )}
            >
                <div className={clsx(
                    Styles.inner_mg,
                )}>
                    <div className={clsx(
                        Styles.mw1440,
                        Styles.flex,
                        Styles.center,
                        Styles.add_before,
                        Styles.block
                    )}>
                        <button
                            className={clsx(
                                Styles.fontBold,
                                Styles.menuBtn,
                                {[Styles.isOpen]: isMenuOpen}
                            )}
                            aria-label={'open menu'}
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen)
                            }}
                        >
                        </button>
                    </div>
                </div>
            </div>
            <Nav postIndexList={postIndexList} isShow={isMenuOpen}/>
        </header>
    )
}

export default Header