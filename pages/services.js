import React from 'react';
import Layout from '../components/Layout';
import DashboardHolder from '../components/DashboardHolder';
import getDashboards from '../data/dashboards.js';
import ServiceList from '../components/ServiceList';

const Services = (props) => {
    return (
        <Layout>
            <div className='padding'>
        
            <ServiceList />

            <div className='ui center aligned basic very padded segment'>
                <div className='ui center aligned basic very padded segment'>
                    <h1>Examples of Our Work</h1>
                </div>

                    <div className='ui stackable relaxed grid container'>
                        <div className='ui row'> 
                            {props.dashboards.map((dashboard, key) => (
                                <div className='ui five wide column'>
                                    <DashboardHolder id={dashboard.id} key={dashboard.id} title={dashboard.title} image={dashboard.image} description={dashboard.description} url={dashboard.url} />
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

Services.getInitialProps = async ({ }) => {
    return {  dashboards: getDashboards()  } 
}

export default Services;

