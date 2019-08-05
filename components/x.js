import React from 'react';
import { Button } from 'semantic-ui-react';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Layout from '../components/Layout';

const contactOne = () => (
        <Layout>
        <div>
            Please contact us with questions.
            <div>
                <Link href="/email">
                    <a className="nav-link">
                        <Button to={`email@salisbury.edu`}>
                            Contact Us
                        </Button>
                    </a>
                </Link>
            </div>
        </div>
    </Layout>
);

export default class Contact extends React.Component {
    render() {
        return (

            <Layout>
            <div className="ui center aligned basic segment">
                <div className='ui centered grid'>

                    <div className='ui center aligned basic segment'>
                        <h2>General Contact</h2>
                    </div>

                    <div className='ui row'>
                        <div className='ui centered grid'>
                            <div className='ui eight wide column'>
                                <div className='ui left aligned basic segment'>
                                    <h3>Eastern Shore Regional GIS Cooperative</h3>
                                    <p>
                                        Salisbury University <br />
                                        1101 Camden Ave <br />
                                        Salisbury, MD 21801 <br /> <br /> <br />
                                        Phone: (410) 677-5390<br />
                                        Email: esrgc@salisbury.edu <br />
                                    </p>
                                </div>
                            </div>

                            <div className='ui eight wide column'>
                                <div className="ui right aligned basic segment">
                                    <div className="ui center aligned large image">
                                        <img src='../static/images/office.png' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='ui row'>

                        <div className='ui centered grid'>
                            <div className='ui eight wide column'>
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

                            <div className='ui eight wide column'>
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

                        </div>
                    </div>

                    <div className='ui row'>

                        <div className='ui centered grid'>
                            <div className='ui eight wide column'>
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

                            <div className='ui eight wide column'>
                                <div className='ui left aligned basic segment'>
                                    <h3>Chesapeake Bay Critical Area Remapping</h3>
                                    <p>
                                        Ryan Mello  <br />
                                        Project Coordinator <br />
                                        Phone: (410) 677-5390<br />
                                        Email: esilva@salisbury.edu <br />
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
