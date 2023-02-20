import React ,{Fragment} from 'react'


import NavBar from '../common/NavBar/NavBar'
import About_us from '../common/About us/About_us'

const Home = (props) => {
  return (
    <Fragment>
    <NavBar/>

    <About_us/>
    </Fragment>
  )
}

export default Home