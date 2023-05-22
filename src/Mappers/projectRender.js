
import '../styles/Projects.css';
function ProjectRender({ data, idx }) {
    return (
        <div className='indv'>
            <img src={data[idx].thumbnail} className='img'/>
            <div className='desc'>
                <h3 className='fonts'>{data[idx].projectName}</h3>
                <h5 className='fonts'>{data[idx].description}</h5>
                <div className='git-link'>
                    {data[idx].git && <a href={data[idx].git} target='_blank'><button className='btn'>Git</button></a>}
                    {data[idx].link && <a href={data[idx].link}><button className='btn'>Website</button></a>}
                </div>
            </div>
        </div>
    )
}

export default ProjectRender;