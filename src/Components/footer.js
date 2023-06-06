
import contacts from "../datas/contactinfo";
import '../styles/footer.css';
import {motion} from 'framer-motion';
function Footer() {

    return (
        <motion.div className="footer-container"
        variants={{
            hidden:{opacity:0,y:400,zIndex:-1},
            visible:{opacity:1,y:0,zIndex:0}
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
                    <form action="/" method="POST">
                        <input type="text" name="name" required placeholder="Name"/>
                        <input type="text" name="email" required placeholder="Email"/>
                        <textarea rows="6" name="message" placeholder="Your message"/>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
            <h3>Copyright © 2023. All rights reserved @venkatachalam C</h3>
        </motion.div>
    )
}

export default Footer;