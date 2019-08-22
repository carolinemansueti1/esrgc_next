import React from 'react';
import Layout from '../components/Layout';
import OurWorkHolder from '../components/OurWorkHolder';
import getWork from '../data/ourwork.js';


const OurWork = (props) => {
    return (
        <Layout>
            <div className='padding'>

            <div className='ui center aligned basic very padded segment'>
                <div className='ui center aligned basic very padded segment'>
                    <h1>Examples of Our Work</h1>
                </div>

                    <div className='ui center aligned basic very padded segment'>
                        <h3>GIS Projects</h3>
                    </div>

                    <div className='ui stackable relaxed grid container'>
                        <div className='ui row'> 
                            {props.projects.slice(0,4).map((project, key) => (
                                <div className='ui five wide column'>
                                    <OurWorkHolder id={project.id} title={project.title} image={project.image} description={project.description} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='ui center aligned basic very padded segment'>
                        <h3>Web Development and Data Visualization</h3>
                    </div>

                    <div className='ui stackable relaxed grid container'>
                        <div className='ui row'> 
                            {props.projects.slice(4,13).map((project, key) => (
                                <div className='ui five wide column'>
                                    <OurWorkHolder id={project.id} title={project.title} image={project.image} description={project.description} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='ui center aligned basic very padded segment'>
                        <h3>Web Mapping Applications</h3>
                    </div>

                    <div className='ui stackable relaxed grid container'>
                        <div className='ui row'> 
                            {props.projects.slice(13).map((project, key) => (
                                <div className='ui five wide column'>
                                    <OurWorkHolder id={project.id} title={project.title} image={project.image} description={project.description} />
                                </div>
                            ))}
                        </div>
                    </div>



                </div>      

                <style jsx>
                    {
                        `.padding {
                            margin-left: 5vw;
                        }

                        .ui.five.wide.column {
                            padding-bottom: 5vh;
                        }`
                    }
                </style>

                </div>      
                
        </Layout>
    );
} 

OurWork.getInitialProps = async ({ }) => {
    return {  projects: getWork()  } 
}

export default OurWork;