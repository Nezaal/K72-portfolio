import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import {Link} from 'react-router-dom'
import Navbar from './components/Navigations/Navbar'
import FullScreenNav from './components/Navigations/FullScreenNav'
import NavContext from './context/NavContext'


 

const  App = () => {


  return (
    <NavContext>
      <div>

        <Navbar/>
        <FullScreenNav/>
        <Routes>

          <Route path='/' element = {<Home/>}/>
          <Route path='/agence' element = {<Agence/>}/>
          <Route path='/projects' element = {<Projects/>}/>

        </Routes>
      </div>
    </NavContext>
  )
}

 export default App