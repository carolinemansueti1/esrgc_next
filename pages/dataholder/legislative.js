import Link from 'next/link';
import Layout from '../../components/Layout';
import { List } from 'semantic-ui-react';

const assetPrefix = process.env.ASSET_PREFIX;


const legislative = (props) => { 
    const image = `${assetPrefix}/static/images/cartographic.png`;
    return (
        <Layout>
            <div className="ui centered grid">
                <div className='ui row'>
                    <div className="ui eight wide column">
                        <img src={image} className='heroImage'/>
                    </div>
                </div>
        
                <div className="ui ten wide column">
                    <div className='ui center aligned basic segment'>
                        <h1>Legislative District Maps (2019)</h1>
                    </div>
                </div>

                <div className="ui eight wide column">
                    <div className="ui left aligned  basic segment">
                        <p>
                        To better inform Maryland's state delegates and senators about the land use issues in their district as well as to provide them with a useful reference map to use during discussions with constituents, the ESRGC has completed a project to create a large format map of land use for each 2012 state legislative district in Maryland. These maps were given as gifts to the senators and delegates in February 2019, with the compliments of Salisbury University, the MidShore Regional Council, and the Tri-County Council of the Lower Eastern Shore of Maryland.
                        </p>
                        <p>
                        The maps have a dimension of 24 " x 36 ", and are in .pdf file format. Adobe Acrobat Reader is required to view and print these maps. If you do not have Acrobat Reader, you can download it for free at www.adobe.com. Although the size of these files are larger than most printers can print, they can be printed in the standard size of 8.5" x 11" by selecting the "Fit to Paper" option under the "Page Scaling" drop-down menu.                        </p>
                        <p> To order a Legislative District map in its full printed size (24" x 36"), please contact the ESRGC at esrgc@salisbury.edu. Include in the email what district(s) you are requesting, whether its Legislative or Senatorial, and the quantity. The prices for printed maps are: $25 each or $35 if laminated, plus $7 shipping and handling up to 5 maps (allow 5-7 business days).</p>
                        <p> *56k Warning: The size of the District maps are voluminous and may require a high-speed internet connection to download and view.</p>
                        <p>The source of the data contained within these maps was provided by the Maryland Department of Planning and the Maryland State Highway Administration</p>
                   </div>
                </div>

                <div className="ui row">
                    <h3>Available Datasets</h3>
                </div>

                <div className='ui row'>
                    <h4>Legislative District Map List</h4>
                </div>
                <div className="ui row">
                    <div className="ui two wide column">
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist1A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist1A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                District 1A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist1B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist1B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 1B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist1C.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist1C.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 1C
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist2A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist2A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 2A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist2B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist2B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 2B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist3A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist3A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 3A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist3B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist3B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 3B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist4.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist4.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 4
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist5.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist5.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 5
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist6.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist6.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 6
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist7.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist7.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 7
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist8.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist8.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 8
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist9A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist9A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 9A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist9B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist9B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 9B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist10.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist10.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 10
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist11.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist11.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 11
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist12.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist12.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 12
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui two wide column">
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist13.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist13.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 13
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist14.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist14.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 14
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist15.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist15.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 15
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist16.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist16.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 16
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist17.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist17.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 17
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist18.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist18.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 18
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist19.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist19.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 19
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist20.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist20.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 20
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist21.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist21.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 21
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist22.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist22.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 22
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist23A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist23A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 23A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist23B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist23B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 23B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist24.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist24.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 24
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist25.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist25.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 25
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist26.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist26.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 26
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist27A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist27A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 27A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist27B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist27B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 27B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui two wide column">
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist27C.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist27C.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 27C
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist28.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist28.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 28
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist29A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist29A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 29A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist29B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist29B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 29B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist29C.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist29C.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 29C
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist30A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist30A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 30A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist30B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist30B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 30B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist31A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist31A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 31A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist31B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist31B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 31B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist32.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist32.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 32
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist33.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist33.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 1A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist34A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist34A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 34A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist34B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist34B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 1A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist35A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist35A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 35A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist35B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist35B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 35B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist36.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist36.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 36
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist37A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist37A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 37A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui two wide column">
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist37B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist37B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 37B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist38A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist38A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 38A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist38B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist38B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 38B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist38C.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist38C.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 38C
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist39.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist39.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 39
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist40.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist40.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 40
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist41.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist41.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 41
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist42A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist42A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 42A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist42B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist42B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 42B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist43.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist43.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 43
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist44A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist44A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 44A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist44B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist44B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 44B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist45.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist45.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 45
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist46.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist46.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 46
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist47A.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist47A.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 47A
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>

                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/legislative/Leg_Dist47B.pdf`} as={`${assetPrefix}/static/data/legislative/Leg_Dist47B.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 47B
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                </div>

                <div className='ui row'>
                    <h4>Senatorial District Map List</h4>
                </div>
                <div className="ui row">
                    <div className="ui two wide column">
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist1.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist1.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 1
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist2.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist2.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 2
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist3.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist3.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 3
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist4.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist4.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 4
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist5.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist5.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 5
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist6.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist6.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 6
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist7.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist7.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 7
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist8.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist8.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 8
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist9.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist9.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 9
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist10.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist10.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 10
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist11.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist11.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 11
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist12.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist12.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 12
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui two wide column">
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist13.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist13.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 13
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist14.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist14.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 14
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist15.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist15.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 15
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist16.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist16.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 16
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist17.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist17.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 17
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist18.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist18.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 18
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist19.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist19.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 19
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist20.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist20.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 20
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist21.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist21.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 21
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist22.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist22.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 22
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist23.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist23.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 23
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist24.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist24.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 24
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui two wide column">
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist25.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist25.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 25
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist26.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist26.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 26
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist27.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist27.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 27
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist28.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist28.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 28
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist29.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist29.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 29
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist30.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist30.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 30
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist31.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist31.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 31
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist32.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist32.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 32
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist33.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist33.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 33
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist34.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist34.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 34
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist35.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist35.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 35
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist36.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist36.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 36
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui two wide column">
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist37.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist37.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 37
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist38.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist38.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 38
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist39.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist39.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 39
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist40.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist40.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 40
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist41.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist41.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 41
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist42.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist42.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 42
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist43.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist43.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 43
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist44.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist44.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 44
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist45.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist45.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 45
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist46.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist46.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 46
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/sen/Sen_Dist47.pdf`} as={`${assetPrefix}/static/data/sen/Sen_Dist47.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide'>
                                            <i className='ui download icon' />
                                                District 47
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>
                </div>

            </div>
            <style jsx>
                {`
                .heroImage {
                    height: 50vh;
                    width: 50vw;
                    object-fit: cover;
                }
                .wide {
                    width: 10vw;
                }`}
            </style>
        </Layout>
    )
}

export default legislative;