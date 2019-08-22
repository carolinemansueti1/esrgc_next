
const assetPrefix = process.env.ASSET_PREFIX;
const tripod = `${assetPrefix}/static/images/tripod.png`;
const eval1 = `${assetPrefix}/static/images/eval.png`;
const cartographic = `${assetPrefix}/static/images/cartographic.png`;
const drone = `${assetPrefix}/static/images/drone.png`;
const compass = `${assetPrefix}/static/images/compass.png`;
const plan = `${assetPrefix}/static/images/plan.png`;

const ServiceList = (props) => (
    <div>
        <div className="ui center aligned basic padded segment">
            <div className='ui center aligned basic very padded segment'>
                <h1>GIS Services</h1>
            </div>
            

            <div className='ui centered grid'>
                    <div className='ui row'>
                        <div className='ui centered grid'>

                            <div className='ui six wide column'>
                                <div className="ui left aligned basic segment">
                                    
                                    <h1>Data Collection and Analysis</h1>
                                    <p>
                                        We offer data collection services for organizations in need of non-existing spatial data or that do not have the appropriate data collection tools. These services include: digitizing (tablet and on-screen), scanning, raster-to-vector conversion, and GPS data collection.  Analysis of GIS data may include a variety of techniques.
                                    </p>
                                </div>
                            </div>

                            <div className='ui two wide column'>
                                <div className="ui right aligned basic segment">
                                    <img className="ui center aligned large image" src={tripod} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='ui row'>
                        <div className='ui centered grid'>

                            <div className='ui two wide column'>
                                <div className="ui right aligned basic segment">
                                    <img className="ui center aligned large image" src={eval1} />
                                </div>
                            </div>


                            <div className='ui six wide column'>
                                <div className="ui left aligned basic segment">
                                    <h1>GIS Implementation and Program Evaluation</h1>
                                    <p>
                                    Implementation of a GIS system can be an extensive process.  We provide support and guidance to organizations looking to setup a GIS System to cater to their partcular needs.  Additionally,   Program evaluation can include a variety of different types of evaluation, such as needs assessments, cost/benefit analysis, effectiveness, efficiency, goal-based, process, outcomes, etc. The ESRGC provides services to organizations looking to evaluate GIS programs.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='ui row'>
                        <div className='ui centered grid'>

                            <div className='ui six wide column'>
                                <div className="ui left aligned basic segment">
                                    <h1>Cartographic Services and Technical Support</h1>
                                    <p>
                                    We offer map-making services for organizations in need of presentation quality maps. Our maps are made with proper cartographic design principles in mind to give your project the added sense of professionalism.    The ways in which GIS can be used to analyze and manipulate spatial data are countless. This also makes for a extensive amount of problems that can arise for a new user. The ESRGC provides technical support to organizations that need assistance with GIS related issues.
                                    </p>
                                </div>
                            </div>

                            <div className='ui two wide column'>
                                <div className="ui right aligned basic segment">
                                    <img className="ui center aligned large image" src={cartographic} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='ui row'>
                        <div className='ui centered grid'>

                            <div className='ui two wide column'>
                                <div className="ui right aligned basic segment">
                                    <img className="ui center aligned large image" src={drone} />
                                </div>
                            </div>


                            <div className='ui six wide column'>
                                <div className="ui left aligned basic segment">
                                    <h1>Drone Services</h1>
                                    <p>
                                    The ESRGC is currently working with Maryland’s Department of Information Technology (DoIT) to provide public access to bare earth LiDAR throughout the state. Raw LiDAR data is processed by the ESRGC and image services are published through ArcGIS for Server. There are six derivative products on our topography server which are all accessible through WMS connection, Google Earth, and ArcGIS software. These derivative products include aspect, hillshade, slope, shaded relief and DEMs in meters and feet. In addition to the server, we are also maintaining a topography viewer web application that allows users to interact directly with the LiDAR data hosted on our servers.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='ui row'>
                        <div className='ui centered grid'>

                            <div className='ui six wide column'>
                                <div className="ui left aligned basic segment">
                                    <h1>GIS Training</h1>
                                    <p>
                                        The ESRGC partners with the State of Maryland and other organiztions, such as the Maryland State Geograpic Infromation Committee, to offer multiple training opportunities.
                                    </p>
                                </div>
                            </div>

                            <div className='ui two wide column'>
                                <div className="ui right aligned basic segment">
                                    <img className="ui center aligned large image" src={compass} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='ui row'>
                        <div className='ui centered grid'>

                            <div className='ui two wide column'>
                                <div className="ui right aligned basic segment">
                                    <img className="ui center aligned large image" src={plan} />
                                </div>
                            </div>


                            <div className='ui six wide column'>
                                <div className="ui left aligned basic segment">
                                    <h1>Web Development and Data Visualization</h1>
                                    <p>
                                    The ESRGC is currently working with Maryland’s Department of Information Technology (DoIT) to provide public access to bare earth LiDAR throughout the state. Raw LiDAR data is processed by the ESRGC and image services are published through ArcGIS for Server. There are six derivative products on our topography server which are all accessible through WMS connection, Google Earth, and ArcGIS software. These derivative products include aspect, hillshade, slope, shaded relief and DEMs in meters and feet. In addition to the server, we are also maintaining a topography viewer web application that allows users to interact directly with the LiDAR data hosted on our servers.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
               
            </div>


        </div>
    </div>
);

export default ServiceList;