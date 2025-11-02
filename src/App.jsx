import {useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Main from './components/main'

function App() {
  const [isHR, setIsHR] = useState(false);

  useEffect(() => {
    alert(
      "Hi, I’m Tejas Kamble. Some parts of this assignment are still in progress — I’m actively working to complete them soon.\n\nYou can still take a look in the meantime."
    );
  }, []);


  return (
    <>
      <Navbar isHR={isHR} setIsHR={setIsHR} />
      <Main isHR={isHR}/><></>
    </>
  )
}

export default App
