import React from 'react';
import Layout from '../components/Layout';
import { Card, Image } from 'semantic-ui-react';
import Link from 'next/link';


const Work = (props) => {
    return (
        <Layout>
            <div className='padding'>

            <div className='ui center aligned basic very padded segment'>
                <h1>Examples of Our Work</h1>

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
        </Layout>
    );
} 

<Card
    image={`../static/images/education_dash.png`}
    header="Maryland's Education Dashboard"                          
/>



export const Dashboards = (props) => {
    return (
        <div className='ui center aligned basic very padded segment'>
            <h1>Dashboards</h1>
            <div className='ui centered stackable relaxed grid'>

            <div className="ui five wide column">
                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                        <a>
                            <div className="ui fluid card">
                                <Card.Content>
                                    <Image size="large"
                                        src={`../static/images/drone.png`}
                                        title={props.title}
                                        centered
                                    />
                                </Card.Content>
                                <Card.Content>
                                    <div className="center aligned header">Jenny Hess</div>
                                </Card.Content>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="ui four wide column">
                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                        <a>
                            <div className="ui fluid card">
                                <Card.Content>
                                    <div className="ui centered image">
                                    <img
                                        src={`../static/images/drone.png`}
                                    />
                                </div>
                                </Card.Content>
                                <Card.Content>
                                    <div className="center aligned header">Jenny Hess</div>
                                </Card.Content>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="ui four wide column">
                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                        <a>
                            <div className="ui fluid card">
                                <Card.Content>
                                    <div className="ui image">
                                    <img
                                        src={`../static/images/drone.png`}
                                    />
                                </div>
                                </Card.Content>
                                <Card.Content>
                                    <div className="center aligned header">Jenny Hess</div>
                                </Card.Content>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="ui six wide column">
                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                        <a>
                            <Card>
                                <Card.Content>
                                    <img
                                        src={`../static/images/drone.png`}
                                    />
                                </Card.Content>
                                <Card.Content>
                                    <h2>Maryland's Education Dashboard</h2>
                                </Card.Content>
                            </Card>
                        </a>
                    </Link>
                </div>

                <div className="ui six wide column">
                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                        <a>
                            <Card>
                                <Card.Content>
                                    <img
                                        src={`../static/images/drone.png`}
                                    />
                                </Card.Content>
                                <Card.Content>
                                    <h2>Maryland's Education Dashboard</h2>
                                </Card.Content>
                            </Card>
                        </a>
                    </Link>
                </div>

                <div className="ui six wide column">
                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                        <a>
                            <Card>
                                <Card.Content>
                                    <img
                                        src={`../static/images/drone.png`}
                                    />
                                </Card.Content>
                                <Card.Content>
                                    <h2>Maryland's Education Dashboard</h2>
                                </Card.Content>
                            </Card>
                        </a>
                    </Link>
                </div>

                <div className="ui six wide column">
                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                        <a>
                            <Card>
                                <Card.Content>
                                    <img
                                        src={`../static/images/drone.png`}
                                    />
                                </Card.Content>
                                <Card.Content>
                                    <h2>Maryland's Education Dashboard</h2>
                                </Card.Content>
                            </Card>
                        </a>
                    </Link>
                </div>

                <div className="ui six wide column">
                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                        <a>
                            <Card>
                                <Card.Content>
                                    <img
                                        src={`../static/images/drone.png`}
                                    />
                                </Card.Content>
                                <Card.Content>
                                    <h2>Maryland's Education Dashboard</h2>
                                </Card.Content>
                            </Card>
                        </a>
                    </Link>
                </div>

            </div>
            <style jsx>
            {`.imgHolder:
            max-width: 33vw; 
            max-height: 25vh;`}
            </style>
        </div>
    )
}


export const Maps = (props) => {
    
    

    return (
        <div className='ui center aligned basic padded segment'>
            <h1>Web Maps</h1>

        </div>
    )
}
