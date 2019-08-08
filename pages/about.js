import Accord from '../components/Accord';
import Link from 'next/link';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Image, List } from 'semantic-ui-react';
import MapContainer from '../components/MapContainer';

const assetPrefix = process.env.ASSET_PREFIX;
const msgic = `${assetPrefix}/static/images/msgic_logo.png`;
const twitter = `${assetPrefix}/static/images/twitter.png`;
const facebook = `${assetPrefix}/static/images/facebook.png`;

const Overview = () => (
    <div className='ui centered grid'>
        <div className='ui ten wide column'>
            <div className="ui center aligned basic segment">
                <h1 className="maroon">Overview</h1>
                <p>
                The goal of the ESRGC is to improve the GIS technology capabilities of the county and municipal governments of the six counties of the middle and lower Eastern Shore (Caroline, Talbot, Dorchester, Wicomico, Somerset, and Worcester). This includes providing advice on GIS implementation, technical support, equipment loans, data collection efforts, data analysis exercises, cartographic services, and GIS training. These services are provided at either no cost to the county or municipality or at a very reduced cost. Typically, the resources provided by the two Regional Councils, the University, and the cooperative organization structure means that local governments can avail themselves of ESRGC services for a fraction of their true cost. We also partner with state agencies on a number of local and statewide initiatives.
                </p>
                <br />

                <h3>Industries We Serve</h3>
                <div className='ui centered grid'>
                    <div className='ui column'>
                        <List>
                            <List.Item>
                                County
                            </List.Item>
                            <List.Item>
                                Municipal
                            </List.Item>
                            <List.Item>
                                Regional
                            </List.Item>
                        </List>
                    </div>
                    <div className='ui column'></div>
                    <div className='ui column'>
                        <List>
                            <List.Item>
                                State
                            </List.Item>
                            <List.Item>
                                Federal
                            </List.Item>
                            <List.Item>
                                Private
                            </List.Item>
                        </List>
                    </div>
                </div>
                <br />
                <p>Contact us to learn more about the ESRGC and how we can partner with you.</p>
                <br />
                <Link href={'/contact'}>
                    <a>
                        <button className="ui labeled icon blue button">
                            <i className="ui envelope outline icon"></i>
                            Contact Us
                        </button>
                    </a>
                </Link>
                <br />

                
                <div className='ui center aligned very padded basic segment'>
                    <h3>Our Location</h3>
                    <div className='central'>

                    </div>
                </div>
            </div>
        </div>
    </div>

);

const Msgic = () => (
    <div className='ui centered grid'>
        <div className='row'>
        <div className='title'>
            <h1>Maryland State Geographic Information Committee (MSGIC)</h1>
        </div>
        </div>
        <div className='ui row'>
            <div className='ui centered grid'>
                
                <div className='ui seven wide column'>
                    <div className="ui left aligned basic segment">
                        <p>
                        The ESRGC is proud to support GIS and GIS professionals in Maryland as a sponsor of the Maryland State Geographic Information Committee (MSGIC).  Formed in 1992, MSGIC aims to grow GIS and promote coordinated development and efficent use of resources in Maryland. MSGIC meets quarterly, usually on the second Wednesday of January, April, July and October. Please visit the MSGIC website for more information about quarterly meeting dates and locations.
                        <br />
                        <br />
                        ESRGC staff participate in MSGIC working groups, attend quarterly meetings, and chair the executive committee
                        </p> <br />
                        <div >
                            <Link href={'http://msgic.org/'}>
                                <a>
                                    <button className="ui labeled icon teal button">
                                    <i className="ui angle right icon"></i>
                                    Learn More about MSGIC
                                    </button>
                                </a>
                            </Link>
                            <Link href={'http://msgic.org/event-calendar'}>
                                <a>
                                    <button className="ui labeled icon right floated teal button">
                                    <i className="ui angle right icon"></i>
                                    Check out MSGIC Events
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='ui three wide column'>
                    <div className="ui right aligned basic segment">
                        <img className="ui top aligned small image" src={msgic} />
                    </div>
                </div>
            
            </div>
        </div>
    </div>
);

const Events = () => (
    <div className='ui centered grid'>
        <div className='ui ten wide column'>
            <div className="ui center aligned basic segment">
                <h2>Upcoming Events</h2>
                <p>
                    The ESRGC supports GIS professionals in the region by hosting quartely meetings to provide an arena for communication and collaboration.  Our discussions focus on the projects, technical know-how, and general GIS needs specific to the counties and municipalities in attendence.    Industry representatives and the public are welcome to attend.
                </p>
            </div>
        </div>

        <div className='ui ten wide column'>
            <div className='ui centered equal width grid'>
                <div className='ui column'>
                    <div className='ui center aligned basic segment'>
                        <h5>MidShore Regional GIS Committee Meetings</h5>

                        <p>Meetings take place in Easton and discussion is centered on topics in Caroline, Dorchester, and Talbot Counties.</p>

                        <ul className="unstyled">
                            <li>January 9th 2019</li>
                            <li>February 9th 2019</li>
                            <li>March 9th 2019</li>
                            <li>April 9th 2019</li>
                            <li className='spaced'>
                                <Link href={'http://msgic.org/join-msgic/'}>
                                    <a>
                                        <button className="ui labeled icon teal button">
                                        <i className="ui paper plane outline icon"></i>
                                        Join Mailing List
                                        </button>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='ui column'>
                    <div className='ui center aligned basic segment'>
                        <h5>TriCounty Council GIS Committee Meetings</h5>

                        <p>Meetings take place in Salisbury and discussion is centered on topics in Somerset, Wicomico, and Worcester Counties.</p>

                        <ul className="unstyled">
                            <li>January 10th 2019</li>
                            <li>February 9th 2019</li>
                            <li>March 9th 2019</li>
                            <li>April 9th 2019</li>
                            <li className='spaced'>
                                <Link href={'http://www.lowershore.org/AboutUs/ContactUs.aspx'}>
                                    <a>
                                        <button className="ui labeled icon teal button">
                                        <i className="ui paper plane outline icon"></i>
                                        Join Mailing List
                                        </button>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>
            {`
            .unstyled {
                list-style-type: none;
              }

            .spaced{
                margin-top: 2%;
            }
              `}
        </style>
    </div>
);

const Social = () => (
    <div className='ui centered grid'>
        <div className='ui ten wide column'>

            <div className='ui centered equal width very relaxed grid'>
                <div className='ui row'>
                    <h1>Follow us on Social Media</h1>
                </div>

                <div className='ui right floated right aligned three wide column'>
                    <h3 className="ui center aligned header">
                        Facebook
                    </h3>
                    <Link href={'https://www.facebook.com/EasternShoreRegionalGisCooperativeesrgc/'}>
                        <a>
                            <img className="ui small rounded image" src={facebook} />
                        </a>
                    </Link>
                </div>

                <div className='ui one wide column'>

                </div>

                <div className='ui left floated left aligned three wide column'>
                    <h3 className="ui center aligned header">
                        Twitter: @esrgc
                    </h3>
                    <Link href={'https://twitter.com/esrgc?lang=en'}>
                        <a>
                            <div className="twitter">
                                <img className="ui small rounded image" src={twitter} />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>

        </div>
        <style jsx>
            {`
            .twitter {
                border: 1px solid white;
                border-radius: 25px;
            }
              `}
        </style>
    </div>
        
);

const about = ( props ) => (
    <Layout>
        <div className='cent'>
            <Overview />
            <hr />
            <Events />
            <hr />
            <div className="ui center aligned basic segment">
                <h1>Meet Our Staff</h1>
                <Accord />

                <div className='ui center aligned very padded segment'>
                    <Image 
                        src='../static/images/staff.png'
                        centered
                        size="large"/>
                </div>
            </div>
            <hr />
            <Msgic />
            <hr />
            <Social />
     
        </div>
        <Footer />
    </Layout>
);

export default about;