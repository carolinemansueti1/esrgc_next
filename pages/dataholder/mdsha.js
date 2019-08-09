import Link from 'next/link';
import Layout from '../../components/Layout';
import { List } from 'semantic-ui-react'

const assetPrefix = process.env.ASSET_PREFIX;
const image = `${assetPrefix}/static/images/oceantracker.png`;

const hazus = (props) => {
    return (
        <Layout>
            <div className="ui centered grid">
                <div className='ui row'>
                    <div className="ui eight wide column">
                        <img src={image} className='heroImage'/>
                    </div>
                </div>
                
                <div className='ui row'>
                    <div className="ui eight wide column">
                        <div className='ui center aligned basic segment'>
                            <h1>Climate Change Adaptation Planning for MDSHA</h1>
                        </div>
                    </div>
                </div>
                
                <div className="ui eight wide column">
                    <div className="ui left aligned basic segment">
                        <p>Maryland State Highway Administration (SHA) SLC Services support SHA leadership and planners as they endeavor to mitigate or prevent the impacts of sea level change resulting from land surface subsidence and rising sea levels.</p>

                        <p>Depth Grids - Datasets represent projected stillwater depths (feet) for scenario planning (2015, 2050, and 2100) with and without percent-annual-chance (10-, 4-, 2-, 1-, and 0.2%) flooding.</p>

                        <p>Hazard Vulnerability Index (HVI) - Weighted roadway characteristics - evacuation route and functional class - to standardize the impending hazard - projected sea-level rise - along segments of Maryland State Highway Administration (SHA) centerlines for scenario planning (2015, 2050, and 2100) with and without percent-annual-chance (10-, 4-, 2-, 1-, and 0.2%) flooding.</p>

                        <p>Hurricane Florence Case Study - In light of the significant damage in the state of North Carolina caused by the storm surge from Hurricane Florence on September 14, 2018, concerns about the vulnerability of the coastal communities on the Atlantic coast of Maryland and in Maryland’s portion of the Chesapeake Bay have come into focus. This project seeks to replicate the storm surge heights seen with Hurricane Florence, to determine a what-if scenario in coastal Maryland.</p>
                    
                        <p>The data may be used and redistributed for free but is not intended for legal use, since it likely contains inaccuracies. The User assumes the entire risk associated with its use of these data and bears all responsibility in determining whether these data are fit for the User's intended use. The information contained in these data is dynamic and will change over time. </p>
                    </div>
                </div>

                <div className="ui row">
                    <h2>Available Data</h2>
                </div>

                <div className="ui row">
                    <List>
                            <List.Item>
                                <Link href={'https://geoservices.salisbury.edu/arcgis/rest/'} as={`https://geoservices.salisbury.edu/arcgis/rest/`}>
                                    <a>
                                        <button className='ui labeled icon blue button'>
                                            <i className='ui paper plane outline icon' />
                                                Navigate to ArcGIS REST Services Directory 
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
        
                        </List>
                </div>
            </div>
            
            <style jsx>
                {`    .heroImage {
                            height: 50vh;
                            width: 50vw;
                            object-fit: cover;
                    }

                    `
                }
            </style>
        </Layout>
    )
}

export default hazus;



            