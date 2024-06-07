import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
     
      
      
    
    
    
  )
}

export default App
