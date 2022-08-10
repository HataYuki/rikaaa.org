import {useRouter} from "next/router";
import {useState, useEffect} from 'react'
import Nav from "./nav";
import Styles from '/styles/layout/header.module.sass'
import clsx from 'clsx'
import {useIsDark} from "../../lib/useIsDark";

const Header = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isDark = useIsDark()

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
                Styles.root,
                {[Styles.dark]:isDark},
                {[Styles.light]:!isDark},
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
                                {[Styles.isOpen]: isMenuOpen},
                                {[Styles.dark]:isDark},
                                {[Styles.light]:!isDark},
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
            <Nav isShow={isMenuOpen}/>
        </header>
    )
}

export default Header