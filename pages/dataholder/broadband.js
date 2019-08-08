import Link from 'next/link';
import Layout from '../../components/Layout';
import { List } from 'semantic-ui-react';

const assetPrefix = process.env.ASSET_PREFIX;


const broadband = (props) => { 
    const image = `${assetPrefix}/static/images/cartographic.png`;
    return (
        <Layout>
            <div className="ui centered grid">
                <div className='ui five column row'>
                    <div className="ui eight wide column">
                        <img src={image} className='heroImage'/>
                    </div>
                </div>
        
                <div className="ui ten wide column">
                    <div className='ui center aligned basic segment'>
                        <h1>Broadband Maps</h1>
                    </div>
                </div>

                <div className="ui eight wide column">
                    <div className="ui left aligned  basic segment">
                        <p> The maps available for download on this page represent the areas served by broadband for each county in Maryland as collected by the Maryland Broadband Mapping Initiative (MBBMI), current as of June 30, 2014. The MBBMI was part of a nationwide five year National Telecommunications and Information Administration project to map broadband availability. During this time the Maryland Broadband Cooperative, assisted by the ESRGC and Center for GIS, collected data from broadband providers including the location service, technology of transmission, and download/upload speed. At the time the FCC and NTIA defined broadband as greater than or equal to 200 kbps download. As a national project, census blocks were selected as the smallest continuous geometric layer to identify areas served by broadband providers. The ESRGC used 14 verification methods to test the data received from broadband providers, however, there are a number of issues that may result in misrepresentation of the data for Maryland, including, (1) any census block with one served location was considered served; (2) census blocks greater than 2 square miles were delivered as road segments and then converted to census blocks; and (3) any location currently unserved by a provider but could be served within 5 to 10 business days was accepted as a served location. </p>
                   </div>
                </div>

                <div className="ui five column row">
                    <h3>Available Datasets</h3>
                </div>

                <div className='ui five column row'>
                    <h4>Legislative District Map List</h4>
                </div>
                <div className="ui eight column row">
                    
                    <div className="ui center aligned column">
                        <h4>Allegany</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/allegany/Allegany_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/allegany/Allegany_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/allegany/Allegany_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/allegany/Allegany_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/allegany/Allegany_DSL.pdf`} as={`${assetPrefix}/static/data/broadband/allegany/Allegany_DSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/allegany/Allegany_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/allegany/Allegany_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/allegany/Allegany_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/allegany/Allegany_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/allegany/Allegany_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/allegany/Allegany_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/allegany/Allegany_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/allegany/Allegany_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/allegany/Allegany_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/allegany/Allegany_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>


                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Anne Arundel</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/annearundel/AnneArundel_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Baltimore City</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/baltcity/BaltCity_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Baltimore</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/baltcity/Baltimore_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/baltimore/Baltimore_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                </div>

                <div className="ui eight column row">

                <div className="ui center aligned column">
                        <h4>Calvert</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/calvert/Calvert_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/calvert/Calvert_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/calvert/Calvert_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/calvert/Calvert_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/calvert/Calvert_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/calvert/Calvert_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/calvert/Calvert_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/calvert/Calvert_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/calvert/Calvert_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/calvert/Calvert_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/calvert/Calvert_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/calvert/Calvert_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/calvert/Calvert_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/calvert/Calvert_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Caroline</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/caroline/Caroline_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/caroline/Caroline_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/caroline/Caroline_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/caroline/Caroline_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/caroline/Caroline_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/caroline/Caroline_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/caroline/Caroline_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/caroline/Caroline_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/caroline/Caroline_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/caroline/Caroline_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/caroline/Caroline_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/caroline/Caroline_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/caroline/Caroline_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/caroline/Caroline_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Carroll</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/carroll/Carroll_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/carroll/Carroll_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/carroll/Carroll_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/carroll/Carroll_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/carroll/Carroll_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/carroll/Carroll_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/carroll/Carroll_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/carroll/Carroll_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/carroll/Carroll_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/carroll/Carroll_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/carroll/Carroll_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/carroll/Carroll_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/carroll/Carroll_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/carroll/Carroll_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/carroll/Carroll_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/carroll/Carroll_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Cecil</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cecil/Cecil_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/cecil/Cecil_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cecil/Cecil_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/cecil/Cecil_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cecil/Cecil_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/cecil/Cecil_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cecil/Cecil_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/cecil/Cecil_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cecil/Cecil_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/cecil/Cecil_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cecil/Cecil_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/cecil/Cecil_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cecil/Cecil_Wireless.pdf`} as={`${assetPrefix}/static/data/broadband/cecil/Cecil_Wireless.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireless
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cecil/Cecil_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/cecil/Cecil_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>
                </div>

                <div className="ui eight column row">

                    <div className="ui center aligned column">
                        <h4>Charles</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/charles/Charles_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/charles/Charles_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/charles/Charles_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/charles/Charles_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/charles/Charles_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/charles/Charles_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/charles/Charles_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/charles/Charles_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/charles/Charles_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/charles/Charles_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/charles/Charles_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/charles/Charles_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/charles/Charles_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/charles/Charles_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Dorchester</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/cdorchester/Dorchester_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/dorchester/Dorchester_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Frederick</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/frederick/Frederick_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/frederick/Frederick_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/frederick/Frederick_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/frederick/Frederick_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/frederick/Frederick_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/frederick/Frederick_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/frederick/Frederick_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/frederick/Frederick_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/frederick/Frederick_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/frederick/Frederick_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/frederick/Frederick_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/frederick/Frederick_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/frederick/Frederick_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/frederick/Frederick_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/frederick/Frederick_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/frederick/Frederick_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Garrett</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/garrett/Garrett_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/garrett/Garrett_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/garrett/Garrett_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/garrett/Garrett_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/garrett/Garrett_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/garrett/Garrett_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/garrett/Garrett_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/garrett/Garrett_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/garrett/Garrett_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/garrett/Garrett_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/garrett/Garrett_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/garrett/Garrett_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/garrett/Garrett_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/garrett/Garrett_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                </div>

                <div className="ui eight column row">

                    <div className="ui center aligned column">
                        <h4>Harford</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/harford/Harford_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/harford/Harford_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/harford/Harford_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/harford/Harford_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/harford/Harford_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/harford/Harford_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/harford/Harford_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/harford/Harford_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/harford/Harford_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/harford/Harford_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/harford/Harford_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/harford/Harford_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/harford/Harford_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/harford/Harford_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/harford/Harford_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/harford/Harford_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Howard</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/howard/Howard_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/howard/Howard_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/howard/Howard_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/howard/Howard_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/howard/Howard_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/howard/Howard_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/howard/Howard_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/howard/Howard_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/howard/Howard_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/howard/Howard_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/howard/Howard_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/howard/Howard_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/howard/Howard_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/howard/Howard_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/howard/Howard_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/howard/Howard_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Kent</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/kent/Kent_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/kent/Kent_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/kent/Kent_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/kent/Kent_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/kent/Kent_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/kent/Kent_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/kent/Kent_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/kent/Kent_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/kent/Kent_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/kent/Kent_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/kent/Kent_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/kent/Kent_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/kent/Kent_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/kent/Kent_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Montgomery</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/montgomery/Montgomery_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                </div>

                <div className="ui eight column row">

                    <div className="ui center aligned column">
                        <h4>Prince Georges</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/pg/PrinceGeorges_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Queen Annes</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/queenannes/QueenAnnes_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Somerset</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/somerset/Somerset_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/somerset/Somerset_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/somerset/Somerset_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/somerset/Somerset_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/somerset/Somerset_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/somerset/Somerset_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/somerset/Somerset_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/somerset/Somerset_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/somerset/Somerset_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/somerset/Somerset_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/somerset/Somerset_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/somerset/Somerset_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/somerset/Somerset_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/somerset/Somerset_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>St. Marys</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/stmarys/StMarys_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/stmarys/StMarys_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/stmarys/StMarys_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/stmarys/StMarys_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/stmarys/StMarys_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/stmarys/StMarys_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/stmarys/StMarys_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/stmarys/StMarys_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/stmarys/StMarys_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/stmarys/StMarys_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/stmarys/StMarys_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/stmarys/StMarys_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/stmarys/StMarys_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/stmarys/StMarys_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                </div>

                <div className="ui eight column row">

                    <div className="ui center aligned column">
                        <h4>Talbot</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/talbot/Talbot_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/talbot/Talbot_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/talbot/Talbot_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/talbot/Talbot_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/talbot/Talbot_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/talbot/Talbot_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/talbot/Talbot_FixedWireless.pdf`} as={`${assetPrefix}/static/data/broadband/talbot/Talbot_FixedWireless.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed Wireless
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/talbot/Talbot_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/talbot/Talbot_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/talbot/Talbot_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/talbot/Talbot_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/talbot/Talbot_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/talbot/Talbot_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/talbot/Talbot_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/talbot/Talbot_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Washington</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/washington/Washington_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/washington/WashingtonCable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/washington/Washington_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/washington/Washington_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/washington/Washington_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/washington/Washington_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/washington/Washington_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/washington/Washington_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/washington/Washington_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/washington/Washington_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/washington/Washington_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/washington/Washington_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/washington/Washington_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/washington/Washington_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Wicomico</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/wicomico/Wicomico_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                        </List>
                    </div>

                    <div className="ui center aligned column">
                        <h4>Worcester</h4>
                        <List>
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/worcester/Worcester_Cable.pdf`} as={`${assetPrefix}/static/data/broadband/worcester/Worcester_Cable.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>
                            
                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/worcester/Worcester_CableAndDSL.pdf`} as={`${assetPrefix}/static/data/broadband/worcester/Worcester_CableAndDSL.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Cable and DSL
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/worcester/Worcester_Fiber.pdf`} as={`${assetPrefix}/static/data/broadband/worcester/Worcester_Fiber.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fiber
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/worcester/Worcester_Fixed.pdf`} as={`${assetPrefix}/static/data/broadband/worcester/Worcester_Fixed.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Fixed
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/worcester/Worcester_Mobile.pdf`} as={`${assetPrefix}/static/data/broadband/worcester/Worcester_Mobile.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Mobile
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/worcester/Worcester_NumProv.pdf`} as={`${assetPrefix}/static/data/broadband/worcester/Worcester_NumProv.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                NumProv
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/worcester/Worcester_OCW.pdf`} as={`${assetPrefix}/static/data/broadband/worcester/Worcester_OCW.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                OCW
                                        </button>
                                    </a>
                                </Link>
                            </List.Item>

                            <List.Item>
                                <Link href={`${assetPrefix}/static/data/broadband/worcester/Worcester_Wireline.pdf`} as={`${assetPrefix}/static/data/broadband/worcester/Worcester_Wireline.pdf`}>
                                    <a>
                                        <button className='ui labeled icon teal button wide' >
                                            <i className='ui download icon' />
                                                Wireline
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
                    width: 9vw;
                }`}
            </style>
        </Layout>
    )
}

export default broadband;