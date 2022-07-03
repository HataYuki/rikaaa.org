import {NextPage} from 'next'
import PageHeadLine from "../parts/object/component/pageHeadLine";
import Root from "../parts/object/project/root";
import Profile from "../parts/object/project/profile";


const Aboutme: NextPage = () => {
    return (
        <Root headerColor={'dark'} hasPadding={true} showTitle={true}>
            <PageHeadLine title={'about me'} reverse={true} subTitle={'自己紹介'}/>
            <Profile />
        </Root>
    )
}

export default Aboutme