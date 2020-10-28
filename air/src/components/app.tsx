import { h, FunctionalComponent } from "preact"
import { useEffect } from "preact/hooks"
import Header from "./header"
import Footer from "./footer"
import Invite from "./invite"
import Article from "./article"
import Mission from "./mission"
import * as AOS from 'aos'
const App: FunctionalComponent = () => {
  return (
    <div id="app">
      <Header />
      <div id="content">
        <Mission />
        <Article />
        <Invite />
        <Footer />
      </div>
    </div>
  )
}

export default App
