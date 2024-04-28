import { useState,useEffect } from "react";
import "./Header.css";



export default function Header() {
   const [showModal, setshowModal] = useState(false)
   const [theme, settheme] = useState(localStorage.getItem("currentmode") ?? "dark ");
   useEffect(() => {

    if (theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    } else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
   }, [theme]);

   function handelClick(){
    setshowModal(true)
   }
  return (
    <header className="flex">
      <button className="menu icon-menu flex"  onClick={handelClick}></button>
      <div />
      <nav>
        <ul className="flex">
          
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projacts</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button onClick={() => {
        localStorage.setItem("currentmode",theme === "dark"  ? "light" : "dark")
        settheme(localStorage.getItem("currentmode"))
      }
      } className="mode flex" >
        {theme === "dark" ? (<span className="icon-moon"></span>) : (<span className="icon-sun"></span>)}
      </button>
      {showModal && (
        <div className="fixed">
        <ul className="modal">
        <li>
            <button className="icon-cross" onClick={() => {
              setshowModal(false)
            }
            }/>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projacts</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      )}
    </header>
  );
}
