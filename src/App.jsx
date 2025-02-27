import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import NoteState from './context/notes/NoteState'
import Alert from './component/Alert'
import Login from './component/Login'
import Signup from './component/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="Alert" />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes>
        </div>
      </NoteState>
    </>
  )
}

export default App
