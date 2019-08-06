import Link from 'next/link';
import Layout from '../../components/Layout';
import { List } from 'semantic-ui-react'

const assetPrefix = process.env.ASSET_PREFIX;
const image = `${assetPrefix}/static/images/oceantracker.png`;

const hazus = (props) => {
    return (
        <Layout>
            <div className="ui centered grid">
                <div className="ui ten wide column">
                    <img src={image} className='heroImage'/>
                </div>
                <div className="ui ten wide column">
                    <div className='ui center aligned basic segment'>
                        <h1>Maryland's Flood Vulnerability Assessment</h1>
                    </div>
                </div>

                <div className="ui ten wide column">
                    <div className="ui left aligned segment">
                        <p>
                        In order to provide a systematic examination of the vulnerability of Maryland’s built environment to riverine and coastal flooding, the Eastern Shore Regional GIS Cooperative (ESRGC) at Salisbury University was asked to undertake a vulnerability modeling effort. Using FEMA’s HAZUS-MH hazard vulnerability analysis modeling software, the ESRGC sought to generate maps and tables of Maryland’s potential for loss related to buildings from flooding on a county-by-county basis. This potential for loss, or the degree of vulnerability, was measured using four different factors: amount of county land area in susceptible to a 100-year flood, the amount of square footage of buildings potentially damaged, the number of buildings potential damaged, and the amount of direct economic losses related to buildings. These four measures of loss help give a more complete picture of the very complex issue of vulnerability to floods.                        </p>
                        <p>
                        On this page you will find the complete HAZUS Flood Vulnerability Report, as well as the actual HAZUS Run files used in the project. The Report is in Adobe PDF format and consist of three seperate parts. The HAZUS Runs require the user to have FEMA's HAZUS-MH Version 1.1 in combination with ESRI's ArcMap Version 9.0.1 or newer. HAZUS-MH 1.1 can be requested directly from FEMA here at no cost.                         </p>
                        <p>

                            These HAZUS-MH Run files are HPR Format and require FEMA's HAZUS-MH Version 1.1 in combination with ESRI's ArcMap Version 9.0.1 or newer. Click the links on the left to download the ZIP file to your computer. You must then extract the HPR file from the ZIP in order to use it.
                        </p>
                    </div>
                </div>

                <div className="ui row">
                    <h3>Available Datasets</h3>
                </div>

               

                <div className="ui row">
                    <h4>HAZUS-MH Run Files</h4>
                </div>

                <div className="ui six column row">
                    <div className="ui column">
                        <List>
                            <List.Item>
                                <Link href={'../../static/data/hazus/Allegany.zip'} as={`${assetPrefix}/static/data/hazus/Allegany.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Allegany (125.1 MB) 
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/AnneArundel.zip'} as={`${assetPrefix}/static/data/hazus/AnneArundel.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Anne Arundel (93.1 MB) 
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Baltimore.zip'} as={`${assetPrefix}/static/data/hazus/Baltimore.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Baltimore City (106 MB) 
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Baltimore_City.zip'} as={`${assetPrefix}/static/data/hazus/Baltimore_City.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Baltimore City (39 MB) 
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Calvert.zip'} as={`${assetPrefix}/static/data/hazus/Calvert.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Calvert County (41 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Caroline.zip'} as={`${assetPrefix}/static/data/hazus/Caroline.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Caroline County (63 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui wide column">
                        <List>
                            <List.Item>
                                <Link href={'../../static/data/hazus/Carroll.zip'} as={`${assetPrefix}/static/data/hazus/Carroll.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Carroll County (123 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Cecil.zip'} as={`${assetPrefix}/static/data/hazus/Cecil.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Cecil County (74 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Charles.zip'} as={`${assetPrefix}/static/data/hazus/Charles.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Charles County (77 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Dorchester.zip'} as={`${assetPrefix}/static/data/hazus/Dorchester.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Dorchester County (75 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>


                            <List.Item>
                                <Link href={'../../static/data/hazus/Frederick.zip'} as={`${assetPrefix}/static/data/hazus/Frederick.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Frederick County (178 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Garrett.zip'} as={`${assetPrefix}/static/data/hazus/Garrett.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Garrett County (127 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui wide column">
                        <List>
                        <List.Item>
                                <Link href={'../../static/data/hazus/Harford.zip'}as={`${assetPrefix}/static/data/hazus/Harford.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Harford County (83 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Howard.zip'} as={`${assetPrefix}/static/data/hazus/Howard.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Howard County (80 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/Hazus/Kent.zip'} as={`${assetPrefix}/static/data/hazus/Kent.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Kent County (43 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Montgomery.zip'} as={`${assetPrefix}/static/data/hazus/Montgomery.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Montgomery County (163 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Prince_Georges.zip'} as={`${assetPrefix}/static/data/hazus/Prince_Georges.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Prince George's County (99 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>
                            
                            <List.Item>
                                <Link href={'../../static/data/hazus/QueenAnnes.zip'} as={`${assetPrefix}/static/data/hazus/QueenAnnes.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Queen Anne's County (59 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>
                
                        </List>
                    </div>

                    <div className='ui wide column'>
                        <List>
                            <List.Item>
                                <Link href={'../../static/data/hazus/Somerset.zip'} as={`${assetPrefix}/static/data/hazus/Somerset.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Somerset County (51 MB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/StMarys.zip'} as={`${assetPrefix}/static/data/hazus/StMarys.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            St. Mary's County (55 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Talbot.zip'} as={`${assetPrefix}/static/data/hazus/Talbot.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Talbot County (53 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Washington.zip'} as={`${assetPrefix}/static/data/hazus/Washington.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Washington County (163 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Wicomico.zip'} as={`${assetPrefix}/static/data/hazus/Wicomico.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Wicomico County (80 MB)

                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/Worcester.zip'} as={`${assetPrefix}/static/data/hazus/Worcester.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Worcester County (65 MB) 
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>
                        </List>
                    </div>
                </div>

                <div className="ui row">
                    <h4>HAZUS-MH Flood Vulnerability Reports</h4>
                </div>
                <div className="ui three wide column">
                        
                        <List>
                            <List.Item>
                                <Link href={'../../static/data/hazus/appendix_a.pdf'} as={`${assetPrefix}/static/data/hazus/appendix_a.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Appendix A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/appendix_b.pdf'} as={`${assetPrefix}/static/data/hazus/appendix_b.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Appendix B
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/hazus/appendix_c.pdf'} as={`${assetPrefix}/static/data/hazus/appendix_c.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Appendix C
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
                            width: 60vw;
                            object-fit: cover;
                    }
                    `
                }
            </style>
        </Layout>
    )
}

export default hazus;



            