import { Card, Image } from 'semantic-ui-react';
import Link from 'next/link';
import { Accordion } from 'semantic-ui-react';
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

export default class Dashboards extends React.Component {
    state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
    return (
        <div>
            
            <div className='padding'>

            <div className='ui centered grid'>

                <div className='ui row'>
                    <div className="ui four wide column">
                        <Link href={'http://esrgc.org/dashboards/education/index'}>
                            <a>
                                <Card fluid className='box'
                                    image={education_dash}
                                    header="Maryland's Education Dashboard"   
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui four wide column">
                        <Link href={'http://apps.esrgc.org/dashboards/countycomparison/'}>
                            <a>
                                <Card fluid className='box'
                                    image={dbed}
                                    header="DBED Explorer"             
                                />
                            </a>
                        </Link>
                    </div>


                    <div className="ui four wide column">
                        <Link href={'http://salisburyu.maps.arcgis.com/apps/View/index.html?appid=d683d74e38f84bd5b62d86d0377b0c46'}>
                            <a>
                                <Card fluid className='box'
                                    image={agIs_map}
                                    header="AgGis: Grow Your Potential with GIS"                          
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='ui row'>
                    <div className="ui four wide column">
                        <Link href={'http://apps.esrgc.org/dashboards/health/'}>
                            <a>
                                <Card fluid className='box'
                                    image={health_dash}
                                    header="Maryland's Healthcare Dashboard"                          
                                />
                            </a>
                        </Link>
                    </div>
                    
                    <div className="ui four wide column">
                        <Link href={'http://apps.esrgc.org/maps/foodshed/'}>
                            <a>
                                <Card fluid className='box'
                                    image={foodshed3}
                                    header="Foodsheds"             
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui four wide column">
                        <Link href={'http://apps.esrgc.org/dashboards/mda/home'}>
                            <a>
                                <Card fluid className='box'
                                    image={wip_dash}
                                    header="Chesapeake Bay WIP Dashboard"             
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='ui row'>
                    <div className="ui four wide column">
                        <Link href={'http://www.dllr.state.md.us/workforcedashboard/'}>
                            <a>
                                <Card fluid className='box'
                                    image={dllr}
                                    header="DLLR Workforce Dashboard"             
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui four wide column">
                        <Link href={'esrgc1.salisbury.edu/EngineerDrawing/Desktop/Index'}>
                            <a>
                                <Card fluid className='box'
                                    image={eng_draw}
                                    header="Engineering Drawing Application"             
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui four wide column">
                        <Link href={'esrgc1.salisbury.edu/EngineerDrawing/Desktop/Index'}>
                            <a>
                                <Card fluid className='box'
                                    image={pipes}
                                    header="Pipelines Nearby"             
                                />
                            </a>
                        </Link>
                    </div>

                </div>

                <div className='ui row'>
                    <div className="ui four wide column">
                        <Link href={'http://esrgc.org/dashboards/dnrtrustfunds/dashboard'}>
                            <a>
                                <Card fluid className='box'
                                    image={dnr_dash}
                                    header="Department of Natural Resources Trust Fund Dashboard"             
                                />
                            </a>
                        </Link>
                    </div>
                
                    <div className="ui four wide column">
                        <Link href={'http://givemaryland.org/'}>
                            <a>
                                <Card fluid className='box'
                                    image={give_dash}
                                    header="Give Maryland Dashboard"             
                                />
                            </a>
                        </Link>
                    </div>
                    
                </div>

         
            </div>

            </div>
            <style jsx>
            {`.imgHolder:
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
}
}

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
