import { useState } from "react";
import "./Main.css";

const myprojects = [
  {projectTitle:"react project", category: "react", imgpath: "./imgs/1.jpg"},
{projectTitle:"css project", category: "css", imgpath: "./imgs/2.jpg"},
{projectTitle:"node project", category: "node", imgpath: "./imgs/3.jpg"},
{projectTitle:"html & css landing", category: "css", imgpath: "imgs/4.jpg"},
{projectTitle:"react landing", category: "react", imgpath: "imgs/5.jpg"},
{projectTitle:"node ecommers", category: "node", imgpath: "./imgs/6.jpg"},
{projectTitle:"react portfilo", category: "react", imgpath: "./imgs/7.jpg"},
{projectTitle:"js portfilo", category: "javasecript", imgpath: "./imgs/8.jpg"},
{projectTitle:"js landig", category: "javasecript", imgpath: "./imgs/9.jpg"}


]

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myprojects);
  const handleClick = (catego) => {
    setcurrentActive(catego)

    const newArr =myprojects.filter((item) => {
      return item.category === catego
    }
    )

    setArr(newArr);
  }
  

  
  return (
    <main className="flex">
      <section className="left-section flex">
        <button onClick={() => {
          setcurrentActive("all")
          setArr(myprojects)
        }
        } className={currentActive === "all"? "active" : null }>All Projects</button>

        <button onClick={() => {handleClick("css")}}className={currentActive === "css"? "active" : null }>HTML & CSS</button>
        <button onClick={() => {handleClick("javasecript") }}className={currentActive === "javasecript"? "active" : null }>JavaSecript</button>
        <button onClick={() => {handleClick("react")}}className={currentActive === "react"? "active" : null }>React</button>
        <button onClick={() => {handleClick("node")}}className={currentActive === "node"? "active" : null }>Node & Express</button>
      </section>

      <section className="right-section flex">
        {arr.map((item) => {
          return (
            <article key={item.imgpath} className="card ">
              <img width={266} src={item.imgpath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  
                  i build this landing page from 0 i use react js and css and
                  some off firebase you can check from the linke blow
                </p>
                <div className="flex myicons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
