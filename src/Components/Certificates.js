
import CertificateRender from "../Mappers/certificaterender";
import '../styles/Certificates.css';
import certificates from "../datas/certificatedata";
import { useState } from "react";
import {motion} from 'framer-motion';
const Certificates=()=>{
    function prev(e){
        setidx(previous=>previous===0?certificates.length-1:previous-1)
    }
    function next(e){
        setidx(previous=>previous===certificates.length-1?0:previous+1)
    }
    const [idx,setidx]=useState(0);
    return (
        <motion.div id="certificate-container"
        variants={{
            hidden:{opacity:0,y:400,zIndex:-1},
            visible:{opacity:1,y:0,zIndex:0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{duration:1}}  
        >
            <h1>Certificates</h1>
            <div className="cert-carousel">
            <img src='before.png' className="car-nav" onClick={prev}/>
            <CertificateRender item={certificates[idx]}/>
            <img src='next.png' className="car-nav" onClick={next}/>
            </div>
        </motion.div>
    )
}

export default Certificates;