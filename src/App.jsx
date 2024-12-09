import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import NoteState from './context/notes/NoteState'
import Alert from './component/Alert'

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
          </Routes>
        </div>
      </NoteState>
    </>
  )
}

export default App
