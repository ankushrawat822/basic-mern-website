import { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import {BrowserRouter} from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
 
     <BrowserRouter>
     <Navbar></Navbar>
   <Routes>
  
    <Route exact path="/" element={<Create></Create>} />
    <Route exact path="/all" element={<Read></Read>} />
    <Route exact path="/update" element={<Update></Update>} />
   </Routes>
   </BrowserRouter>
    
   
   </>
  )
}

export default App
