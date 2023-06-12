
import contacts from "../datas/contactinfo";
import '../styles/footer.css';
import {motion} from 'framer-motion';
import emailjs from "@emailjs/browser";
import { useRef,useState } from "react";
function Footer() {
    const form=useRef();
    const [name,setname]=useState("");
    const[email,setemail]=useState("");
    const [message,setmessage]=useState("")
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2mjy7rp', 'template_zxi1j4l', form.current, 'I0i_3piBlAyHfojii')
          .then((result) => {
              console.log(result.text);
              console.log(form.current);
              setname("");
              setemail("");
              setmessage("");
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <motion.div className="footer-container"
        variants={{
            hidden:{opacity:0,y:400,zIndex:-1},
            visible:{opacity:1,y:60,zIndex:0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{duration:1}}>
            <div className="footer">
                <div className="f1">
                    <h1>Contact Me</h1>
                    <div className="num-mail">
                    <img src="./footercomp/phone.png"/>
                    <h3>+91 7449240301</h3>
                    </div>
                    <div className="num-mail">
                    <img src="./footercomp/envelope.png"/>
                    <h3>venkatachalam17092001@gmail.com</h3>
                    </div>
                    <div className="footer-contacts">
                        {contacts.map((item) => {
                            return (
                                <div className="footer-cont">
                                    <a href={item.link} target="_blank">
                                        <img className="footer-icn" src={item.path} />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="f2">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" required placeholder="Name" name="user_name" value={name} onChange={(e)=>setname(e.target.value)} />
                        <input type="text" name="user_email" required placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <textarea rows="6" name="message" placeholder="Your message" value={message} onChange={(e)=>setmessage(e.target.value)}/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <h3>Copyright © 2023. All rights reserved @venkatachalam C</h3>
        </motion.div>
    )
}

export default Footer;