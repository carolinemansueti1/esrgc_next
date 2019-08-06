import Link from 'next/link';
import Layout from '../../components/Layout';
import { List } from 'semantic-ui-react'
  
const taxditch = (props) => {
    return (
        <Layout>
            <div className="ui centered grid">
                <div className="ui ten wide column">
                    <img src={`../static/images/compass.png`} className='heroImage'/>
                </div>
                <div className="ui ten wide column">
                    <div className='ui center aligned basic segment'>
                        <h1>John Smith Project - Vienna, MD</h1>
                    </div>
                </div>

                <div className="ui ten wide column">
                    <div className="ui left aligned segment">
                        <p>
                        Recently, there has been an increasing interest in linking the locations Smith placed on his 1612 map with their corresponding present-day coordinates using sophisticated digital mapping and spatial statistical analysis. The upcoming anniversary has created a desire to retrace the route that Smith took as a tribute to him and his cadre of explorers as well as the hope that some of the more out-of-the-way places around the Bay might garner more interest in their towns and villages with a link to 400-year old history. The Town of Vienna on the Nanticoke River in Dorchester County , Maryland fits this description. Thus, the goal of this project was to scientifically compare the location of the town of Vienna with the mapped depiction of the Nanticoke River and its associated Native American villages as recorded by John Smith in 1608.                         </p>
                        <p>
                        All datasets are in compressed .zip format. To download, click on a link and save the file to your computer. Extract all the files from the .zip file to an appropriate location on your computer. The resulting file will be a shapefile to which can be opened with GIS software.      </p>
                        <p>
                        If you have any questions and/or comments about the John Smith Datasets or documents, please contact the ESRGC at esrgc@salisbury.edu
                        </p>
                    </div>
                </div>

                <div className="ui row">
                    <h3>Available Datasets</h3>
                </div>

                <div className="ui row">
                    <div className="ui five wide column">
                        <h4>Unrectified Data </h4>
                        <List>
                            <List.Item>
                                <Link href={'../../static/data/jsmith/unrect/john_smith_virginia_1612.zip'}  as={`${assetPrefix}/../../static/data/jsmith/unrect/john_smith_virginia_1612.zip`}>
                                    <a>
                                        <button className='ui labeled icon blue button'>
                                            <i className='ui download icon' />
                                                John Smith Map of 1612 (55 MB)
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/jsmith/unrect/all_coastline_exp.zip'}>
                                    <a>
                                        <button className='ui labeled icon blue button'>
                                            <i className='ui download icon' />
                                                Digitized Coastline Polyline shapefile (272 KB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/datajsmith/unrect/all_towns_exp.zip'}>
                                    <a>
                                        <button className='ui labeled icon blue button'>
                                            <i className='ui download icon' />
                                                Digitized Towns Point Shapefile (20 KB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui five wide column">
                        <h4>Affine Rectified Data</h4>
                        <List>
                            <List.Item>
                                <Link href={'../../static/data/jsmith/affine/js_map_rectify_correctscale_and_orient.zip'}>
                                    <a>
                                        <button className='ui labeled icon blue button'>
                                            <i className='ui download icon' />
                                            John Smith Map of 1612 (51 MB)
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/jsmith/affine/all_coastline_affine.zip'}>
                                    <a>
                                        <button className='ui labeled icon blue button'>
                                            <i className='ui download icon' />
                                            Digitized Coastline Polyline shapefile (284 KB)
                                        </button>
                                    </a>
                                </Link>   
                            </List.Item>

                            <List.Item>
                                <Link href={'../../static/data/jsmith/affine/all_towns_affine.zip'}>
                                    <a>
                                        <button className='ui labeled icon blue button'>
                                            <i className='ui download icon' />
                                                Digitized Towns Point shapefile (16 KB)
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



            