import type { NextPage } from "next"
import Styles from "@styles/layout/footer.module.sass"
import Link from "next/link"
import Image from "next/image"
import Container from "./container";

const Footer : NextPage = () => {
    return (
        <footer className={Styles.root}>
            <Container pd70={true}>
                <div className={Styles.content}>
                    <div className={Styles.leftCol}>
                        <h3 className={Styles.fHeadLine}>RIKAAA.ORG</h3>
                        <ul className={Styles.fSubHeadLine}>
                            <li>
                                <Link href="/work/all/project">
                                    <a>PROJECT</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/work/all/my_project">
                                    <a>MY PROJECT</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/aboutme">
                                    <a>ABOUT ME</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.rightCol}>
                        <div>
                            <Link href="/">
                                <a>
                                    <Image src="/github_logo.svg" layout="fill" alt="github"></Image>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <a>
                                    <Image src="/vimeo_logo.svg" layout="fill" alt="vimeo"></Image>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

        </footer>
    )
}

export default Footer;