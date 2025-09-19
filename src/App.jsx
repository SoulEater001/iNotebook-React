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
import NotesPage from './component/NotesPage'   // ✅ Import NotesPage

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({ msg : message, type:type })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert}/>}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/login' element={<Login showAlert={showAlert}/>}></Route>
            <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}></Route>
            <Route exact path='/notes' element={<NotesPage showAlert={showAlert}/>}></Route> {/* ✅ New route */}
          </Routes>
        </div>
      </NoteState>
    </>
  )
}

export default App
