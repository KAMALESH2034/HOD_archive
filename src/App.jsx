import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Characters from './component/Characters'
import ModalPop from './component/ModalPop'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Characters/> }>
          <Route path="modal" element={<ModalPop/>}/>
          </Route>
        </Routes>
    </BrowserRouter>

    </>
      
          
  )
}

export default App
