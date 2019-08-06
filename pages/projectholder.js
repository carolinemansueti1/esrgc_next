import Layout from '../components/Layout';
import getProjects from '../data/projects.js';
import Footer from '../components/Footer';

const assetPrefix = process.env.ASSET_PREFIX;

const ProjectPage = (props) => {

    return (
        <Layout>
            <div className='ui center aligned basic segment'>
                <img src={`${assetPrefix}/static/images/${props.project.image}`} className='heroImage'/>
            </div>

            <div className='ui center aligned basic very padded segment'>
                <h1>{props.project.title}</h1>
                <div className='ui center aligned padded segment'>
                    <p>{props.project.description}</p>
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
            <Footer />
        </Layout>
    )
}

ProjectPage.getInitialProps = async ({query}) => {
    // could fetch data here
    let {id} = {...query}
    let project = getProjects().find(m => m.id == id)
    return { project } 
}

export default ProjectPage;