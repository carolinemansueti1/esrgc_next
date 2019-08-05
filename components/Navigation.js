import Link from 'next/link';
import React from 'react';

class Navigation extends React.Component {
    
    render () {
        return (
            <div>
                <div className="ui fixed massive borderless menu" id="nav1">
                    <div className="ui item">
                        <Link href="/">
                            <a className="nav-link">
                                <img className='ui tiny image' src={require('../static/images/ESRGC_Logo_Gold_no_text.png')}/>
                            </a>
                        </Link>
                    </div>
                    <div className="ui item">
                        <Link href="/">
                            <a className="nav-link">
                            Eastern Shore Regional GIS Cooperative
                            </a>
                        </Link>
                    </div>
                    
                    
       
                    <ul className="right menu" id="right">
                        <div className="ui item">
                            <Link href="/about"><a className="nav-link">About</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/services"><a className="nav-link">Services</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/work"><a className="nav-link">Our Work</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/data"><a className="nav-link">Data</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/news"><a className="nav-link">News</a></Link>
                        </div>
                        <div className="ui item">
                            <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
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
                
                #right a::after {
                    background-color: yellow;
                }
            `}
        </style>
    </div>


);
    }
}
export default Navigation;