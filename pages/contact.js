import React from 'react';
import { Button } from 'semantic-ui-react';
import Footer from '../components/Footer';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Layout from '../components/Layout';

const assetPrefix = process.env.ASSET_PREFIX;
const office = `${assetPrefix}/static/images/office.png`;

export default class Contact extends React.Component {
    render() {
        return (

            <Layout>
                <div className='text'>
                    <div className="ui center aligned basic segment">
                        <div className='ui centered internally celled grid container'>

                                <div className='ui row'>

                                    <div className="ui eight wide column">
                                        <div className='ui left aligned basic segment'>
                                            <h3>Eastern Shore Regional GIS Cooperative</h3>
                                            <p>
                                                Salisbury University <br />
                                                1101 Camden Ave <br />
                                                Salisbury, MD 21801 <br /> <br /> <br />
                                                Phone: (410) 677-5390<br /> <br />
                                                <CopyToClipboard text='esrgc@salisbury.edu'><div className="mini ui grey right labeled icon button"><i className="copy outline icon"></i>Email: esrgc@salisbury.edu</div></CopyToClipboard> <br />
                                            </p>
                                        </div>
                                    </div>

                                    <div className='ui eight wide column'>
                                        <div className="ui right aligned basic segment">
                                            <div className="ui center aligned large image">
                                                <img src={office} />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='ui row'>
                                    <hr />
                                </div>

                                <div className='ui row'>
                                    <div className='ui four wide column'>
                                        <div className='ui left aligned basic segment'>
                                            <h3>Project Inquiries</h3>
                                            <p>
                                                Lauren McDermott <br />
                                                Practice Manager <br />
                                                Phone: (410) 677-5390<br />
                                                Email: ldmcdermott@salisbury.edu
                                                </p>
                                        </div>
                                    </div>

                                    <div className='ui four wide column'>
                                        <div className='ui left aligned basic segment'>
                                            <h3>Dashboards</h3>
                                            <p>
                                                Erin Silva  <br />
                                                Project Manager <br />
                                                Phone: (410) 677-5390<br />
                                                Email: esilva@salisbury.edu <br />
                                            </p>
                                        </div>
                                    </div>

                                
                                
                                    <div className='ui four wide column'>
                                        <div className='ui left aligned basic segment'>
                                            <h3>Data Distribution</h3>
                                            <p>
                                                Logan Hall <br />
                                                GIS Technicion <br />
                                                Phone: (410) 677-5390<br />
                                                Email: lmhall@salisbury.edu <br />
                                            </p>
                                        </div>
                                    </div>

                                    <div className='ui four wide column'>
                                        <div className='ui left aligned basic segment'>
                                            <h3>Chesapeake Bay Critical Area Remapping</h3>
                                            <p>
                                                Ryan Mello  <br />
                                                Project Coordinator <br />
                                                Phone: (410) 677-5390<br />
                                                Email: rmello@salisbury.edu <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>


                        </div>
                    </div>   
                </div>
                
            </Layout>
        );
    }
}