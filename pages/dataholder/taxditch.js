import Link from 'next/link';
import Layout from '../../components/Layout';
import { List } from 'semantic-ui-react'
  
const taxditch = (props) => {

    const assetPrefix = process.env.ASSET_PREFIX;
    
    return (
        <Layout>
            <div className="ui centered grid">
                <div className="ui ten wide column">
                    <img src={`../static/images/lidar_blue_green.png`} className='heroImage'/>
                </div>
                <div className="ui ten wide column">
                    <div className='ui center aligned basic segment'>
                        <h1>Tax Ditches and PDAs</h1>
                    </div>
                </div>

                <div className="ui ten wide column">
                    <div className="ui left aligned segment">
                        <p>
                        In the Summer and Fall of 2004 the ESRGC assisted the Maryland Department of Agriculture in digitizing and annotating tax ditches and public drainage associations in selected areas on the Lower Eastern Shore. Tax ditches from the Pocomoke, Nanticoke and Coastal Bays watersheds are available for free download as are PDAs from the Pocomoke and Coastal Bays watersheds. 
                        </p>
                        <p>
                        All datasets are in compressed .zip format. To download, click on a link and save the file to your computer. Extract all the files from the .zip file to an appropriate location on your computer. The resulting file will be a shapefile to which can be opened with GIS software.    
                        </p>
                    </div>
                </div>

                <div className="ui row">
                    <h3>Available Datasets</h3>
                </div>

                <div className="ui row">
                    <div className="ui five wide column">
                        <h4>Tax Ditches</h4>
                        <List>
                            <List.Item>
                                <Link href={'../../static/data/tditch/choptank_ditch.zip'} as={`${assetPrefix}/../../static/data/tditch/choptank_ditch.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Choptank River Watershed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/coastalbays_ditch.zip'} as={`${assetPrefix}/../../static/data/tditch/coastalbays_ditch.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Coastal Bays Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/manokin_ditch.zip'} as={`${assetPrefix}/../../static/data/tditch/manokin_ditch.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Manokin River Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/nanticoke_ditch.zip'} as={`${assetPrefix}/../../static/data/tditch/nanticoke_ditch.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Nanticoke River Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/pocomoke_ditch.zip'} as={`${assetPrefix}/../../static/data/tditch/pocomoke_ditch.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Pocomoke River Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/wicomico_ditch.zip'} as={`${assetPrefix}/../../static/data/tditch/wicomico_ditch.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Wicomico River Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>
                            
                        </List>
                    </div>

                    <div className="ui five wide column">
                        <h4>PDA (Public Drainage Association)</h4>
                        <List>
                            <List.Item>
                                <Link href={'../../static/data/tditch/choptank_pda.zip'} as={`${assetPrefix}/../../static/data/tditch/choptank_pda.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                            Choptank River Watershed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/coastalbays_pda.zip'} as={`${assetPrefix}/../../static/data/tditch/coastalbays_pda.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Coastal Bays Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/manokin_pda.zip'} as={`${assetPrefix}/../../static/data/tditch/manokin_pda.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Manokin River Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/nanticoke_pda.zip'} as={`${assetPrefix}/../../static/data/tditch/nanticoke_pda.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Nanticoke River Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/tditch/pocomoke_pda.zip'} as={`${assetPrefix}/../../static/data/tditch/pocomoke_pda.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Pocomoke River Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>   

                            <List.Item>
                                <Link href={'../../static/data/tditch/wicomico_pda.zip'} as={`${assetPrefix}/../../static/data/tditch/wicomico_pda.zip`}>
                                    <a>
                                        <button className='ui labeled icon teal button'>
                                            <i className='ui download icon' />
                                                Wicomico River Watershed
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>                            
                        </List>
                    </div>
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

export default taxditch;



            