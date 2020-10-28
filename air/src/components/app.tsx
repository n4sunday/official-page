import { h, FunctionalComponent } from "preact"
import { useEffect } from "preact/hooks"
import Header from "./header"
import Footer from "./footer"
import Invite from "./invite"
import Article from "./article"
import Mission from "./mission"
import * as AOS from 'aos'
import 'aos/dist/aos.css';
const App: FunctionalComponent = () => {
	useEffect(()=>{
		AOS.init();
	},[])
  return (
    <div id="app">
      <Header />
      <div id="content">
        <Mission />
        <Article />
        <Invite />
      </div>
        <Footer />
    </div>
  )
}

export default App
