import Login from "./Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import View from "./View"
import { BrowserRouter,Route , Routes } from "react-router-dom"
import Edit from "./Edit"


function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
