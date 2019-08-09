import { Card, Image } from 'semantic-ui-react';
import Link from 'next/link';
import React from 'react';

const assetPrefix = process.env.ASSET_PREFIX;
const education_dash = `${assetPrefix}/static/images/education_dash.png`;
const dbed = `${assetPrefix}/static/images/dbed.png`;
const agIs_map =`${assetPrefix}/static/images/agIs_map.png`;
const health_dash = `${assetPrefix}/static/images/health_dash.png`;
const foodshed3 = `${assetPrefix}/static/images/foodshed3.png`;
const wip_dash = `${assetPrefix}/static/images/wip_dash.png`;
const dllr = `${assetPrefix}/static/images/dllr.png`;
const eng_draw = `${assetPrefix}/static/images/eng_draw.png`;
const pipes = `${assetPrefix}/static/images/pipes.png`;
const dnr_dash = `${assetPrefix}/static/images/dnr_dash.png`;
const give_dash = `${assetPrefix}/static/images/give_dash.png`;

const dashboards = (props) => (
            
            <div className='padding'>
                <div className='ui center aligned basic segment'>

                    <div className='ui centered grid'>

                        <div className='ui row'>
                            <div className="ui four wide column">

                                <Card fluid>
                                    <Link href={'http://esrgc.org/dashboards/education/index'}>
                                        <a>
                                            <Image src={education_dash} />
                                            <h4>Maryland's Education Dashboard</h4>
                                        </a>
                                    </Link>
                                </Card>
                               
                            </div>

                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'http://apps.esrgc.org/dashboards/countycomparison/'}>
                                        <a>
                                            <Image src={dbed} />
                                            <h4>DBED Explorer</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>


                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'http://salisburyu.maps.arcgis.com/apps/View/index.html?appid=d683d74e38f84bd5b62d86d0377b0c46'}>
                                        <a>
                                            <Image src={agIs_map} />
                                            <h4>AgGis: Grow Your Potential with GIS</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>

                        </div>

                        <div className='ui row'>
                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'http://apps.esrgc.org/dashboards/health/'}>
                                        <a>
                                            <Image src={health_dash} />
                                            <h4>Maryland's Healthcare Dashboard</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>
                            
                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'http://apps.esrgc.org/maps/foodshed/'}>
                                        <a>
                                            <Image src={foodshed3} />
                                            <h4>Foodsheds</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>

                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'http://apps.esrgc.org/dashboards/mda/home'}>
                                        <a>
                                            <Image src={wip_dash} />
                                            <h4>Chesapeake Bay WIP Dashboard</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>
                        </div>

                        <div className='ui row'>
                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'http://www.dllr.state.md.us/workforcedashboard/'}>
                                        <a>
                                            <Image src={dllr} />
                                            <h4>DLLR Workforce Dashboard</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>

                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'esrgc1.salisbury.edu/EngineerDrawing/Desktop/Index'}>
                                        <a>
                                            <Image src={eng_draw} />
                                            <h4>Engineering Drawing Application</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>

                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'esrgc1.salisbury.edu/EngineerDrawing/Desktop/Index'}>
                                        <a>
                                            <Image src={pipes} />
                                            <h4>Pipelines Nearby</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>

                        </div>

                        <div className='ui row'>
                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'http://esrgc.org/dashboards/dnrtrustfunds/dashboard'}>
                                        <a>
                                            <Image src={dnr_dash} />
                                            <h4>Department of Natural Resources Trust Fund Dashboard</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>
                        
                            <div className="ui four wide column">
                                <Card fluid>
                                    <Link href={'http://givemaryland.org/'}>
                                        <a>
                                            <Image src={give_dash} />
                                            <h4>Give Maryland Dashboard</h4>
                                        </a>
                                    </Link>
                                </Card>
                            </div>
                            
                        </div>

                
                    </div>
                </div>
            <style jsx>
            {`a {
                color: inherit;
            }
            .imgHolder:
            max-width: 21vw; 
            max-height: 15vh;
        
            .padding {
                margin-left: 20vw;
                margin-right: 20vw;
            }
            
            .ui.row {
                padding-bottom: 35vh;
            }
            
            .box {
                border-radius:10px;
                border: 10px solid black;
                color: red;
              }
              .box:hover {
                box-shadow: 0 0 11px rgba(33,33,33,.2); 
              }`}
            </style>

            </div>
            
)

export default dashboards;

export const Maps = (props) => {
 
    return (
        <div className='ui centered grid'>

                <div className='ui row'>
                    <div className="ui four wide column">
                        <Link href={'https://salisburyu.maps.arcgis.com/apps/MapSeries/index.html?appid=c879229ee61740508c330f61a894ab2a'}>
                            <a>
                                <Card fluid className='box'
                                    image={`../static/images/salisbury.png`}
                                    header="Salisbury University Alumni Map"   
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui four wide column">
                        <Link href={'http://webmaps.esrgc.org/cbca/desktop/Map'}>
                            <a>
                                <Card fluid className='box'
                                    image={`../static/images/critical_map.png`}
                                    header="Maryland Critical Area Map"             
                                />
                            </a>
                        </Link>
                    </div>


                    <div className="ui four wide column">
                        <Link href={'http://webmaps.esrgc.org/crimemappingapps'}>
                            <a>
                                <Card fluid className='box'
                                    image={`../static/images/crimemap.png`}
                                    header="Crime Maps"                          
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='ui row'>
                    <div className="ui four wide column">
                        <Link href={'http://apps.esrgc.org/maps/md-lidar-viewer/#8/38.800/-77.300'}>
                            <a>
                                <Card fluid className='box'
                                    image={`../static/images/mdtopo.png`}
                                    header="Maryland Topo Viewer"                          
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
