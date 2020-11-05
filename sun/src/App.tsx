import React, { useEffect, useState } from "react"

import Header from "./components/Header"
import About from "./components/About"
import Mission from "./components/Mission"
import Article from "./components/Article"
import WithUs from "./components/WithUs"
import Footer from "./components/Footer"

function App() {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 1194) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    })
  }, [])

  return (
    <div className="App">
      <Header isTop={isTop} />
      <About />
      <Mission />
      <Article />
      <WithUs />
      <Footer />
    </div>
  )
}

export default App
