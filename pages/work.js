import React from 'react';
import Layout from '../components/Layout';
import ProjectHolder from '../components/ProjectHolder';
import getProjects from '../data/projects.js';
import Footer from '../components/Footer';

const Work = (props) => {
    return (
        <Layout>
            <div className='padding'>

            <div className='ui center aligned basic very padded segment'>
                <div className='ui center aligned basic very padded segment'>
                    <h1>Examples of Our Work</h1>
                </div>

                    <div className='ui stackable relaxed grid container'>
                        <div className='ui row'> 
                            {props.projects.map((project, key) => (
                                <div className='ui five wide column'>
                                    <ProjectHolder id={project.id} title={project.title} image={project.image} description={project.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>      

                <style jsx>
                    {
                        `.padding {
                            margin-left: 5vw;
                        }`
                    }
                </style>

                </div>      
                <Footer />    
        </Layout>
    );
} 

Work.getInitialProps = async ({ }) => {
    // Would fetch data
    return {  projects: getProjects()  } 
}

export default Work;