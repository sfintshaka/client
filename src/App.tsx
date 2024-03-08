
import './App.scss'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Media from './components/Media'
import Contact from './components/Contact'
import WhatsApp from './components/Whatsapp'
function App() {


  return (
    <>
    <BrowserRouter>
    
        <div className='md:container md:mx-auto'>
        <Header/>
        <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/studentlife" element ={<Media/>}/>
        <Route path="/contact" element ={<Contact/>}/>
     
        </Routes>
      </div>
      <WhatsApp/>
      <Footer/>
  
    </BrowserRouter>
      
    
    </>
  )
}

export default App
