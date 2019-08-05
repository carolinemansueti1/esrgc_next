import { Card, Image } from 'semantic-ui-react';
import Link from 'next/link';
import { Accordion } from 'semantic-ui-react';
import React from 'react';

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
                    <div className="ui five wide column">
                        <Link href={'http://esrgc.org/dashboards/education/index'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/education_dash.png`}
                                    header="Maryland's Education Dashboard"   
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui five wide column">
                        <Link href={'http://apps.esrgc.org/dashboards/countycomparison/'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/dbed.png`}
                                    header="DBED Explorer"             
                                />
                            </a>
                        </Link>
                    </div>


                    <div className="ui five wide column">
                        <Link href={'http://salisburyu.maps.arcgis.com/apps/View/index.html?appid=d683d74e38f84bd5b62d86d0377b0c46'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/agIs_map.png`}
                                    header="AgGis: Grow Your Potential with GIS"                          
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='ui row'>
                    <div className="ui five wide column">
                        <Link href={'http://apps.esrgc.org/dashboards/health/'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/health_dash.png`}
                                    header="Maryland's Healthcare Dashboard"                          
                                />
                            </a>
                        </Link>
                    </div>
                    
                    <div className="ui five wide column">
                        <Link href={'http://apps.esrgc.org/maps/foodshed/'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/foodshed3.png`}
                                    header="Foodsheds"             
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui five wide column">
                        <Link href={'http://apps.esrgc.org/dashboards/mda/home'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/wip_dash.png`}
                                    header="Chesapeake Bay WIP Dashboard"             
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='ui row'>
                    <div className="ui five wide column">
                        <Link href={'http://www.dllr.state.md.us/workforcedashboard/'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/dllr.png`}
                                    header="DLLR Workforce Dashboard"             
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui five wide column">
                        <Link href={'esrgc1.salisbury.edu/EngineerDrawing/Desktop/Index'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/eng_draw.png`}
                                    header="Engineering Drawing Application"             
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui five wide column">
                        <Link href={'esrgc1.salisbury.edu/EngineerDrawing/Desktop/Index'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/pipes.png`}
                                    header="Pipelines Nearby"             
                                />
                            </a>
                        </Link>
                    </div>

                </div>

                <div className='ui row'>
                    <div className="ui five wide column">
                        <Link href={'http://esrgc.org/dashboards/dnrtrustfunds/dashboard'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/dnr_dash.png`}
                                    header="Department of Natural Resources Trust Fund Dashboard"             
                                />
                            </a>
                        </Link>
                    </div>
                
                    <div className="ui five wide column">
                        <Link href={'http://givemaryland.org/'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/give_dash.png`}
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
                    <div className="ui five wide column">
                        <Link href={'https://salisburyu.maps.arcgis.com/apps/MapSeries/index.html?appid=c879229ee61740508c330f61a894ab2a'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/salisbury.png`}
                                    header="Salisbury University Alumni Map"   
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="ui five wide column">
                        <Link href={'http://webmaps.esrgc.org/cbca/desktop/Map'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/critical_map.png`}
                                    header="Maryland Critical Area Map"             
                                />
                            </a>
                        </Link>
                    </div>


                    <div className="ui five wide column">
                        <Link href={'http://webmaps.esrgc.org/crimemappingapps'}>
                            <a>
                                <Card fluid className='spaced'
                                    image={`../static/images/crimemap.png`}
                                    header="Crime Maps"                          
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='ui row'>
                    <div className="ui five wide column">
                        <Link href={'http://apps.esrgc.org/maps/md-lidar-viewer/#8/38.800/-77.300'}>
                            <a>
                                <Card fluid className='spaced'
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
