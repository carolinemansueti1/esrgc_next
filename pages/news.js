import Layout from '../components/Layout';
import React from 'react';
import { FacebookProvider, Feed } from 'react-facebook';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Card } from 'semantic-ui-react';
 

const news = () => (
    <Layout>
        <div id="fb-root"></div>
        <div className="ui center aligned basic very padded segment">
            <div className='spaced'>
                <div className='ui center aligned very padded basic segment'>
                    <h1>Recent Highlights</h1>
                </div>

                <div className='ui centered grid'>
                    
                    <div className='ui four column row'>
                    
                        <div className='ui column'>
                            <div className='ui center aligned padded basic segment'>
                                <h2>Twitter</h2>
                            </div>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="esrgc"
                                theme="dark"
                                options={{height: 500}}
                                />
                                
                        </div>

                        <div className='ui column'>
                            <div className='ui center aligned padded basic segment'>
                                <h2>ESRGC Blog</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        <style jsx>
            {`
            .spaced {
                text-align: center;
            }`}
        </style>
    </Layout>
)

export default news;