import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Characters from './component/Characters'
import ModalPop from './component/ModalPop'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Characters/> }>
          <Route path="modal" element={<ModalPop/>}/>
          </Route>
        </Routes>
    </Router>

    </>
      
          
  )
}

export default App
