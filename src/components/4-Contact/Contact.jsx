import "./Contact.css"
import { useForm , ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneani from "../../animation/Animation - 1708263411816.json"
import contact from "../../animation/contact.json"

export default function Contact(){
  const [state, handleSubmit] = useForm("xgegknqv");



  return(
   <section className="contact-us">
    <h1 className="title">
      <span className="icon-mail"></span>
      Contact Us
    </h1>
    <p className="sub-title">contact us for more inforation and get notifird when i puplish something new .</p>

    <div style={{justifyContent:"space-between"}} className="flex">
      <form onSubmit={handleSubmit}>

      <div className="flex">
          <label htmlFor="email">Email Address</label>
          <input required type="email" name="email" id="email" />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>


    <div className="flex" style={{marginTop:"24px"}}>
          <label htmlFor="message">Your Message</label>
        <textarea required name="message" id="message"></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>
      <button className="submit" disabled={state.submitting}>
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
      {state.succeeded && (<p className="flex lot" style={{fontSize: "18px"}}>
        
      <Lottie className="lot" loop={false} style={{height:"37px"}} animationData={doneani} />
        Thanks for joining!</p>)}
      </form>
      <div className="animtion">

      <Lottie className="contact-ani" style={{width:"500px", marginTop:"-50px" , marginRight:"-60px"}} animationData={contact} />
      </div>
    </div>
   </section>
  );
}