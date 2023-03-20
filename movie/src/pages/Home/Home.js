import {React} from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar/index'
import Content from '../../components/content/index'
import './Home.scss'

function Home(){
    return(
        <div>
            <Header/>
            <div className='container'>
                <Sidebar/>
                <Content/>
            </div>
        </div>
    )
}

export default Home

