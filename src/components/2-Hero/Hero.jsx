import "./Hero.css"
import Lottie from "lottie-react";
import developer from "../../animation/developer.json"

export default function Hero(){
  return (
      <section className="hero flex">
      <div className="left-section">
      <div className="pavatar flex">
          <img src="./hamdi.png" className="avatar" alt="" />
            <div className="icon-verified"></div>
        </div>
        <h1 className="title">Hamdi Ben Bechir Software Engineer And Shopify Developer</h1>
        <p className="sub-title">hi my name is hamdi ben bechir i am a react js engener and Shopify theme developer exprit i can help you to build your own web site and take your business to the next level </p>
    
      <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
      </div>
    

    

      </div>
    


      <div className="right-section animation">

      <Lottie className="dev"  animationData={developer}/>

      </div>
      </section>
  );
}