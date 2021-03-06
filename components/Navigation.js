import React from 'react';
import Link from 'next/link';

const assetPrefix = process.env.ASSET_PREFIX;

const Navigation = () => {

        return (
            <div>
                <div className="ui fixed massive borderless menu" id="nav1">
                    <div className="ui item">
                        <Link href="/" as={`${assetPrefix}/`}>
                            <a className="nav-link">
                                <img className='ui tiny image' src={require('../static/images/ESRGC_Logo_Gold_no_text.png')}/>
                            </a>
                        </Link>
                    </div>
                    <div className="ui item">
                        <Link href="/" as={`${assetPrefix}/`}>
                            <a className="nav-link">
                            Eastern Shore Regional GIS Cooperative
                            </a>
                        </Link>
                    </div>
                    
                    
       
                    <ul className="right menu" id="right">
                        <div className="ui item">
                            <Link href="/about" as={`${assetPrefix}/about`}><a className="nav-link">About</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/services" as={`${assetPrefix}/services`}><a className="nav-link">Services</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/work"as={`${assetPrefix}/work`}><a className="nav-link">Our Work</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/data" as={`${assetPrefix}/data`}><a className="nav-link">Data</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/news" as={`${assetPrefix}/news`}><a className="nav-link">News</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/contact" as={`${assetPrefix}/contact`}><a className="nav-link">Contact Us</a></Link>
                        </div>
                    </ul>
                </div>
        <style jsx>
            {`
                #nav1 {
                    min-height: 120px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    opacity: .8;
                }

                a {
                    color: black;
                    font-weight: bold;
                    font-size: 1.3em;
                    text-decoration: none;
                }
                
                a:hover 
                {
                     color:gray; 
                     text-decoration:none; 
                     cursor:pointer;  
                }
            `}
        </style>
    </div>


);
    
}
export default Navigation;