import '../styles/about.css';
import {useState,useContext} from 'react';
import {motion} from 'framer-motion'
import { theme } from '../context/theme';
const About = () => {
    const [showed,setshowed]=useState(true);
    const [edu,setedu]=useState(" selected");
    const [prac,setprac]=useState("");
    const themeCont=useContext(theme)

    function showEdu(e){
        setshowed(true);
        setedu(" selected");
        setprac("")
    }
    function showPrac(e){
        setshowed(false);
        setprac(" selected");
        setedu("");
    }

    function ResumeDownload(e){
        const atag=document.createElement('a');
        atag.setAttribute('href',"v.png");
        atag.setAttribute('download','');
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
    }
    return (
        <div id="about">
        <motion.div className="about" 
        variants={{
            hidden:{opacity:0,y:400,zIndex:-1},
            visible:{opacity:1,y:0,zIndex:0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{duration:1}}
        >
            <h1>About Me</h1>
            <p>
                Hey there,This is Venkatachalam C.
                A recent engineering graduate with a knowledge in coding and design.
                Ability to learn new software and technologies quickly.    
            </p>
            <div className='options'>
            <h1 className={themeCont.current+"-ed"+edu} onClick={showEdu}>Educational Details</h1>
            <h1 className={themeCont.current+"-ed"+prac} onClick={showPrac}>Resume</h1>
            </div>
            <div className='content-container'>
            {showed &&
            (<div className="educational-details">
            <ul>
            <li><div className="single-ed">
                <h3 className={themeCont.current+"-course"}>B.Tech CSE</h3>
                <a href="https://www.sastra.edu/" className='educational-link'><h5>Sastra Deemed University</h5></a>
                <h3 className={themeCont.current+"-course"}>2019-2023</h3>
            </div></li>
            <li><div className="single-ed">
                <h3 className={themeCont.current+"-course"}>12th</h3>
                <a className='educational-link' href="https://no2madurai.kvs.ac.in/"><h5>Kendriya Vidyalaya,thirupparankundram,Madurai</h5></a>
                <h3 className={themeCont.current+"-course"}>2018-2019</h3>
            </div></li>
            <li><div className="single-ed">
                <h3 className={themeCont.current+"-course"}>10th</h3>
                <a className='educational-link' href="https://no2madurai.kvs.ac.in/"><h5>Kendriya Vidyalaya,Thirupparankundram,Madurai</h5></a>
                <h3 className={themeCont.current+"-course"}>2016-2017</h3>
            </div></li>
            </ul>
            </div>)}
            {!showed && 
            (<div className='practice'>
                <ul>
                <li>
                <div className='indv-practice'>
                <h3 onClick={ResumeDownload} className={themeCont.current+"-h3"}>Download Resume</h3>
                <button className='download-btn'>Download</button>
                </div>
                </li>
                </ul>
            </div> )
            }
            </div>
        </motion.div>
        </div>
    )
}

export default About;