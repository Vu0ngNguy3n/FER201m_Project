import {React, useState} from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar/index'
import Content from '../../components/content/index'
import './Home.scss'

function Home(){
    const [type, setType] = useState();
    return(
        <div>
            <Header/>
            <div className='container'>
                <Sidebar  setType={setType}/>
                <Content type={type}/>
            </div>
        </div>
    )
}

export default Home

