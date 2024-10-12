/**
 * @Dhinesh4668
 * @author  Dhinesh
 * **/

import React from 'react'
import heroProfile from "../../../utils/data/heroData.json"
import { Button } from '@mdxeditor/editor'



const Home = () => {

    return (
        <>
            <p>{heroProfile.title}</p>
            <p>{heroProfile.subtitle
            }</p>
            <Button title='fkjhfkj'/>
        </>
    )
}

export default Home