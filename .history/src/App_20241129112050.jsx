
import './App.css'
import  './components/todo/todo.css'
yout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'

const App=()=> {
  
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
