import { useState,useEffect } from "react";
import projectRender from "../Mappers/projectRender";
import '../styles/Projects.css';
import ProjectRender from "../Mappers/projectRender";
import projects from "../datas/projectdata";
const Projects=()=>{
    //const [projects,setprojects]=useState([]);
    const [current,setcurrent]=useState(0);
    function next(e){
        setcurrent(prev=>(prev+1)%projects.length)
    }
    function previous(e){
        setcurrent(prev=>{
            return prev===0?projects.length-1:prev-1
        })
    }
    return (
        <div id="projects">
            <h1 className="proj-topic">Projects</h1>
            <div className="carousel">
            <img src="before.png" onClick={next} className="navigator"/>
            <ProjectRender data={projects} idx={current}/>
            <img src="next.png"  onClick={previous} className="navigator"/>
            </div>
        </div>
    )
}

export default Projects;