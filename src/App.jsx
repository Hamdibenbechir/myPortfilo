import Header from "./components/1-Header/Header"
import Hero from "./components/2-Hero/Hero"
import Main from "./components/3-Main/Main"
import Contact from "./components/4-Contact/Contact"
import Footer from "./components/5-Footer/Footer"
import { useEffect , useState } from "react"


function App() {
const [showscrollbtn, setshowScrollbtn] = useState(false);
useEffect(() => {
  window.addEventListener("scroll" , () => {
    if (window.scrollY > 300) {
      setshowScrollbtn(false)
    }else{
      setshowScrollbtn(true)
    }
  }
  )
}, []);

  return (
    
    <div id="up" className="cont">    
      <Header/>
    
      <Hero/>
      <div className="divader"/>
      <Main/>
      <div className="divader"/>
      <Contact/>
      <div className="divader"/>
      <Footer/>
      <a style={{opacity: showscrollbtn ? 0 : 1 , transition: "0.3s"}} href="#up">
      
          <button className="scrol2top icon-circle-up"></button>
      
      </a>
      
    </div>
  )
}

export default App
