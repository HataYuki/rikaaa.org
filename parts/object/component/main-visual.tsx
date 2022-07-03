import type {NextPage} from "next";
import styles from "/styles/object/component/main-visual.module.sass";
import {InView} from 'react-intersection-observer'
import Container from "../../layout/container";

interface Props {
    onIntersect?: (e: boolean) => void
}

const MainVisual: NextPage<Props> = ({onIntersect}: Props) => {
    return (
        <InView onChange={(inView, entry) => {
            const {isIntersecting} = entry;
            if (onIntersect) {
                onIntersect(isIntersecting)
            }
        }}>
            <div className={styles.root}>
                <Container mb100={true}>
                    <iframe
                        src="https://player.vimeo.com/video/155299193?background=1&autoplay=1&loop=1&byline=0&title=0"
                        frameBorder="0"
                    >
                    </iframe>
                    <div className={styles.titleBlock}>
                        <h1>RIKAAA.ORG</h1>
                        <p>IS</p>
                        <p>HATA YUKI</p>
                        <p>PORTFOLIO SITE.</p>
                    </div>
                </Container>
            </div>
        </InView>
    );
}

export default MainVisual;