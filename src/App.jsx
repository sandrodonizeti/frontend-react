import Home from "./components/pages/Home"
import QuemSomos from "./components/pages/QuemSomos"

import "./App.css"
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/quem-somos" element={<QuemSomos />}/>
    </Routes>
  )
}

export default App