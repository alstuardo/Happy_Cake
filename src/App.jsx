import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./views/Home"
import Contact from "./views/Contact"
import NotFound from "./views/NotFound"

const App = () => {
  return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/contact" element={<Contact/>}/>  
          <Route path="*" element={<NotFound/>}/>  
        </Routes>
      </BrowserRouter>
  )
}

export default App