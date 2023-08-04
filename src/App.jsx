import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Welcome from './components/Welcome/Welcome'
import Navbar from './components/pages/shared/Navbar/Navbar'
import BlogList from './components/pages/BlogList/BlogList'
import BlogEntry from './components/pages/BlogEntry/BlogEntry'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/blog-list' element={<BlogList/>}/>
      <Route path='/blog-entry/:id' element={<BlogEntry/>}/>
    </Routes>
    </>
  )
}

export default App
