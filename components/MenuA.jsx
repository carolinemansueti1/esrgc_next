import Link from 'next/link';
import React from 'react';
import Navbar from'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const assetPrefix = process.env.ASSET_PREFIX;

const MenuA = () => (
    <div>
        <Navbar bg="light" expand="lg" fixed='top' id='nav1' className='shadow p-3 mb-5 bg-white rounded'>
            <Nav.Item>
                <Link href="/" as={`${assetPrefix}/`}>
                    <a className="nav-link">
                        <img className='ui tiny image' src={require('../static/images/ESRGC_Logo_Gold_no_text.png')} />
                    </a>
                </Link>
            </Nav.Item>

            <Nav.Item>
                <Link href="/" as={`${assetPrefix}/`}>
                    <a className="nav-link">
                        Eastern Shore Regional GIS Cooperative
                    </a>
                </Link>
            </Nav.Item>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" id='padded'>
                    <Nav.Item>
                        <Link href="/about" as={`${assetPrefix}/about`}><a className="nav-link" id='padded'>About</a></Link>
                    </Nav.Item>


                    <Nav.Item>
                        <Link href="/services" as={`${assetPrefix}/services`}><a className="nav-link" id='padded'>Services</a></Link>
                    </Nav.Item>


                    <Nav.Item>
                        <Link href="/work"as={`${assetPrefix}/work`}><a className="nav-link" id='padded'>Our Work</a></Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Link href="/data" as={`${assetPrefix}/data`}><a className="nav-link" id='padded'>Data</a></Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Link href="/news" as={`${assetPrefix}/news`}><a className="nav-link" id='padded'>News</a></Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Link href="/contact" as={`${assetPrefix}/contact`}><a className="nav-link" id='padded'>Contact Us</a></Link>
                    </Nav.Item>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
        <style jsx>
            {`
                #padded {
                    padding-left: 1vw;
                    padding-right:1vw;
                }
                #nav1 {
                    min-height: 12vh !important;
                    height: 12vh !important;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
                    opacity: .8;
                    
                }

                a {
                    color: inherit !important;
                    font-weight: bold !important;
                    font-size: 1.5em !important;
                    text-decoration: none;
                    
                   
                }
                
                a:hover 
                {
                     color:gray !important; 
                     text-decoration:none; 
                     cursor:pointer;  
                }
                
            `}
        </style>
    </div>
)

export default MenuA;