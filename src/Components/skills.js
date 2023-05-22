import '../styles/skills.css'
import {fullstack,backEnd,coding,appDevelopment} from '../datas/skilldata';
import { useState } from 'react';
function Skills(){
    const [fs,setfs]=useState(false);
    const [code,setcode]=useState(false);
    const [appdev,setappdev]=useState(false);
    const [bend,setbend]=useState(false);
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div onClick={(e)=>setfs(!fs)} className='skill-class'>
            <h3>fullstack</h3>
            </div>
            {fs && (<div className="skills-grid-fs">
            {fullstack.map((item)=>{
                return (
                    <div className="skill">
                        <img src={item.path} className="skill-img"/>
                        <h3 className="skill-txt">{item.name}</h3>
                    </div>
                )
            })}
            </div>)}
            <div onClick={(e)=>setbend(!bend)} className='skill-class'>
            <h3>Backend</h3>
            </div>
            {bend && (<div className="skills-grid-backend">
            {backEnd.map((item)=>{
                return (
                    <div className="skill">
                        <img src={item.path} className="skill-img"/>
                        <h3 className="skill-txt">{item.name}</h3>
                    </div>
                )
            })}
            </div>)}
            <div onClick={(e)=>setcode(!code)} className='skill-class'>
            <h3>Coding</h3>
            </div>
            {code && (<div className="skills-grid-coding">
            {coding.map((item)=>{
                return (
                    <div className="skill">
                        <img src={item.path} className="skill-img"/>
                        <h3 className="skill-txt">{item.name}</h3>
                    </div>
                )
            })}
            </div>)}
            <div onClick={(e)=>setappdev(!appdev)} className='skill-class'>
            <h3>Application Development</h3>
            </div>
            {appdev && (<div className="skills-grid-appdev">
            {appDevelopment.map((item)=>{
                return (
                    <div className="skill">
                        <img src={item.path} className="skill-img"/>
                        <h3 className="skill-txt">{item.name}</h3>
                    </div>
                )
            })}
            </div>)}
            
        </div>
    )
}

export default Skills;