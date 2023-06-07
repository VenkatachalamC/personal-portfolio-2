import '../styles/skills.css'
import { fullstack, backEnd, coding, appDevelopment } from '../datas/skilldata';
import { useState } from 'react';
import { motion } from "framer-motion";
import { theme } from '../context/theme';
import { useContext } from 'react';
function Skills() {
    const [fs, setfs] = useState(false);
    const [code, setcode] = useState(false);
    const [appdev, setappdev] = useState(false);
    const [bend, setbend] = useState(false);
    const themeCont=useContext(theme);
    return (
        <motion.div className="skills-container"
        variants={{
            hidden:{opacity:0,y:400,zIndex:-1},
            visible:{opacity:1,y:60,zIndex:0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{duration:1}}
        >
            <h1>Skills</h1>
            <div onClick={(e) => setfs(!fs)} className='skill-class'>
                <h3>fullstack</h3>
            </div>
            {fs && (<motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }} className="skills-grid-fs">
                {fullstack.map((item) => {
                    return (
                        <div className="skill">
                            <img src={item.path} className="skill-img" />
                            <h4 className={themeCont.current+"-skill-txt"}>{item.name}</h4>
                        </div>
                    )
                })}
            </motion.div>)}
            <div onClick={(e) => setbend(!bend)} className='skill-class'>
                <h3>Backend</h3>
            </div>
            {bend && (<motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }} className="skills-grid-backend">
                {backEnd.map((item) => {
                    return (
                        <div className="skill">
                            <img src={item.path} className="skill-img" />
                            <h3 className={themeCont.current+"-skill-txt"}>{item.name}</h3>
                        </div>
                    )
                })}
            </motion.div>)}
            <div onClick={(e) => setcode(!code)} className='skill-class'>
                <h3>Coding</h3>
            </div>
            {code && (<motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }} className="skills-grid-coding">
                {coding.map((item) => {
                    return (
                        <div className="skill">
                            <img src={item.path} className="skill-img" />
                            <h3 className={themeCont.current+"-skill-txt"}>{item.name}</h3>
                        </div>
                    )
                })}
            </motion.div>)}
            <div onClick={(e) => setappdev(!appdev)} className='skill-class'>
                <h3>Application Development</h3>
            </div>
            {appdev && (<motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }} className="skills-grid-appdev">
                {appDevelopment.map((item) => {
                    return (
                        <div className="skill">
                            <img src={item.path} className="skill-img" />
                            <h3 className={themeCont.current+"-skill-txt"}>{item.name}</h3>
                        </div>
                    )
                })}
            </motion.div>)}

        </motion.div>
    )
}

export default Skills;