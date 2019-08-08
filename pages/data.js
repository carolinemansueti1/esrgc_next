import React from 'react';
import TaxDitch from '../components/datacomponents/TaxDitch';
import Layout from '../components/Layout';
import JohnSmith from '../components/datacomponents/JohnSmith';
import DataHolder from '../components/DataHolder';
import Footer from '../components/Footer';

const data = (props) => {
    return (

        <Layout>
            <div>
                <div className='ui center aligned basic very padded segment'>
                    <div className='ui center aligned basic very padded segment'>
                        <h1>Project Data Available for Download</h1>
                    </div>
                        <div className='ui centered stackable relaxed three column grid'>
                            <div className="center aligned row">
                                <div className="ui four wide column">
                                    <TaxDitch image="lidar_blue_green.png" />
                                </div>

                                <div className="ui four wide column">
                                    <DataHolder image="oceantracker.png" title="Maryland's Flood Vulnerability Assessment" pathname="hazus" />
                                </div>

                                <div className="ui four wide column">
                                    <DataHolder image="cartographic.png" title="Legislative District Maps" pathname="legislative" />
                                </div>

                                <div className="ui four wide column">
                                    <DataHolder image="cartographic.png" title="Broadband" pathname="broadband" />
                                </div>

                                <div className="ui four wide column">
                                    <JohnSmith image="compass.png" />
                                </div>
                            </div>
                            
                        </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default data;