import type {NextPage} from 'next'
import React from 'react'
import {useRouter} from 'next/router'
import TextBtn from "../component/textBtn";
import Headline from "../component/headline";
import SkillList from "../component/skillList";

const Skill: NextPage = () =>{
    const router = useRouter();

    return(
        <React.Fragment>
            <Headline align={'center'}>
                {{
                    en:('skill')
                }}
            </Headline>
            <SkillList />
            <TextBtn align={'right'} onClick={()=>router.push('/aboutme')}>
                about me
            </TextBtn>
        </React.Fragment>
    )
}

export default Skill