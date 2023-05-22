import '../styles/contacts.css'
import contacts from '../datas/contactinfo';
function Contacts(){
    return (
            <div className="cont-icons">
            {contacts.map((item)=>{
                return(
                    <div className="contact">
                        <a href={item.link}>
                            <img src={item.path} className="contact-img"/>
                        </a>
                    </div>
                )
            })}
            </div>
    )
}

export default Contacts;