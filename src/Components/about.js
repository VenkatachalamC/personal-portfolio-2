import '../styles/about.css';
import {useState} from 'react'
const About = () => {
    const [showed,setshowed]=useState(true);
    const [edu,setedu]=useState(" selected");
    const [prac,setprac]=useState("");

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
    return (
        <div id="about">
            <h1>About Me</h1>
            <p>
                Hey there,This is Venkatachalam C.
                A recent engineering graduate with a knowledge in coding and design.
                Ability to learn new software and technologies quickly.    
            </p>
            <div className='options'>
            <h1 className={"ed"+edu} onClick={showEdu}>Educational Details</h1>
            <h1 className={"ed"+prac} onClick={showPrac}>Practice</h1>
            </div>
            {showed &&
            (<div className="educational-details">
            <ul>
            <li><div className="single-ed">
                <h3 className="course">B.Tech CSE</h3>
                <a href="https://www.sastra.edu/" className='educational-link'><h5>Sastra Deemed University</h5></a>
                <h3 className="course">2019-2023</h3>
            </div></li>
            <li><div className="single-ed">
                <h3 className="course">12th</h3>
                <a className='educational-link' href="https://no2madurai.kvs.ac.in/"><h5>Kendriya Vidyalaya,thirupparankundram,Madurai</h5></a>
                <h3 className="course">2018-2019</h3>
            </div></li>
            <li><div className="single-ed">
                <h3 className="course">10th</h3>
                <a className='educational-link' href="https://no2madurai.kvs.ac.in/"><h5>Kendriya Vidyalaya,Thirupparankundram,Madurai</h5></a>
                <h3 className="course">2016-2017</h3>
            </div></li>
            </ul>
            </div>)}
            {!showed && 
            (<div className='practice'>
                <ul>
                <li>
                <div className='indv-practice'>
                <h3>leetcode</h3>
                <h3>problems solved:437</h3>
                <a href="https://leetcode.com/kowshick17/" target='_blank'><h5>https://leetcode.com/kowshick17/</h5></a>
                </div>
                </li>
                </ul>
            </div> )
            }
        </div>
    )
}

export default About;