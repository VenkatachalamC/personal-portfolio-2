
import certificateRender from "../Mappers/certificaterender";
import '../styles/Certificates.css';
import certificates from "../datas/certificatedata";
const Certificates=()=>{
    return (
        <div id="certificate-container">
            <h1>Certificates</h1>
            {certificates.map(certificateRender)}
        </div>
    )
}

export default Certificates;