import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Home';

function App() {
 

  return (
   <Router>
    <Routes>
      <Route path ="/" element={<Home/> }></Route>
    </Routes>

   </Router>
  )
}

export default App
