import Layout from '../components/Layout';
import getProjects from '../data/projects.js';

const assetPrefix = process.env.ASSET_PREFIX;

const ProjectPage = (props) => {

    return (
        <Layout>
            <div className='ui centered grid'>
                <div className='ui row'>
                    <div className="ui eight wide column">
                        <img src={`${assetPrefix}/static/images/${props.project.image}`} className='heroImage'/>
                    </div>
                </div>

                <div className='ui row'>
                    <div className='ui eight wide column'>
                        <div className='ui center aligned basic very padded segment'>
                            <h1>{props.project.title}</h1>
                            <div className='ui left aligned basic segment'>
                                <p>{props.project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ui row'>
                    <div className='ui eight wide column'>
                        <div className='ui center aligned basic very padded segment'>
                            <ul>
                                {props.project.link.map(onelink => (
                                    <li><a href={onelink.url}>{onelink.title}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>
                {`    .heroImage {
                            height: 50vh;
                            width: 70vw;
                            object-fit: cover;
                    }
                    `
                }
            </style>
            
        </Layout>
    )
}

ProjectPage.getInitialProps = async ({query}) => {
    let {id} = {...query}
    let project = getProjects().find(m => m.id == id)
    return { project } 
}

export default ProjectPage;