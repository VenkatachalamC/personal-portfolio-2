import '../styles/Content.css';
import Contacts from './contacts';
const Home=()=>{

    return (
        <div className="home-cont">
        <Contacts/>
        <div id="home">
            <div className="content-card">
                <div className="home-desc">
            <h3>Hi I'm,Venkatachalam C</h3>
            <h5 className="home-cont">Fullstack developer,Programmer</h5>
            </div>
            <img src="logo192.png" alt="img not found" className="image"/>
            <p></p>
            </div>
        </div>
        </div>
    )
}

export default Home;