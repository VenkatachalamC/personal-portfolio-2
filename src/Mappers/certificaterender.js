import '../styles/Certificates.css'
function CertificateRender({item}){
    return (
        <div className='certificate'>
        <img src={item.link} className='certi-img'/>
        <div className='certi-desc'>
        <h3>{item.description}</h3>
        <h3>{item.platform}</h3>
        </div>
        </div>
    )
}

export default CertificateRender;