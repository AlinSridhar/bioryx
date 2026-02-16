import './App.css'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import Aboutus from './assets/Pages/Aboutus/Aboutus'
import Contact from './assets/Pages/Contact/Contact'
import Events from './assets/Pages/Events/Events'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
        </Routes>
      </Router>
        </>
  )
}

export default App
