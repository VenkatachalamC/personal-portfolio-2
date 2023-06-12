import '../styles/Content.css';
import Contacts from './contacts';
import {motion} from 'framer-motion'
const Home=()=>{
    return (
        <div id="home">
        <motion.div className="home-cont"
        variants={{
            start:{opacity:0,y:-300},
            end:{opacity:1,y:0}
        }}
        initial="start"
        whileInView="end"
        transition={{duration:1.5}}
        >
        <Contacts/>
        <div className="home">
            <div className="content-card">
                <div className="home-desc">
            <h3 className="home-name">Hi I'm,Venkatachalam C</h3>
            <h5 className="home-cont-txt">I love learning new things and solving problems.</h5>
            </div>
            <img src="photo.jpg" alt="img not found" className="image"/>
            <p></p>
            </div>
        </div>
        </motion.div>
        </div>
    )
}

export default Home;