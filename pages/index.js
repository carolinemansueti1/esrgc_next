import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Card, Image } from 'semantic-ui-react';

const assetPrefix = process.env.ASSET_PREFIX;
const banner = `${assetPrefix}/static/images/home_banner.png`;
const logo =  `${assetPrefix}/static/images/ESRGC_Logo_Gold_no_text.png`;
const data = `${assetPrefix}/static/images/assateague2.png`;
const services = `${assetPrefix}/static/images/panelinstall.png`;
const about = `${assetPrefix}/static/images/network.png`;
const logo_svg = `${assetPrefix}/static/images/logoNoCaption.svg`;

const Home = () => (
  <Layout>
    <div className="landing">
      <div id='banner'>
        <img src={banner} />
      </div>
      <div id='logo'>
        <img src={logo_svg} />
      </div>
    </div>

    <div className='ui center aligned very padded basic segment'>
      <h2>Welcome to ESRGC</h2>
    </div>
    
    <div className="noz">
      <div className='ui grid container'>
        <div className='ui three column row'>
          <div className='ui column'>
          <Link href="/about">
                <div className="ui fluid card" key='33234'>
                    <Card.Content>
                    <Image size="large"
                        src={about}
                        title='About'
                    />
                    </Card.Content>
                    <Card.Content>
                        <h3 className="ui center aligned header">
                        About
                        </h3>
                    </Card.Content>
                </div>
            </Link>
          </div>

          <div className='ui column'>
          <Link href="/services">
                <div className="ui fluid card" key="9889">
                    <Card.Content>
                    <Image size="large"
                        src={services}
                        title='Services'
                    />
                    </Card.Content>
                    <Card.Content>
                        <h3 className="ui center aligned header">
                        Services
                        </h3>
                    </Card.Content>
                </div>
            </Link>
          </div>

          <div className='ui column'>
          <Link href="/data">
                <div className="ui fluid card" key="12312">
                    <Card.Content>
                    <Image size="large"
                        src={data}
                        title='Data'
                    />
                    </Card.Content>
                    <Card.Content>
                        <h3 className="ui center aligned header">
                        Data
                        </h3>
                    </Card.Content>
                </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
    
    <Footer />
    <style jsx>
      {`
     
        #banner img {
            margin-top: 1vh;
            position: relative;

            -webkit-animation: fadeout 2s; /* Safari, Chrome and Opera > 12.1 */
              -moz-animation: fadeout 2s; /* Firefox < 16 */
                -ms-animation: fadeout 2s; /* Internet Explorer */
                -o-animation: fadeout 2s; /* Opera < 12.1 */
                    animation: fadeout 2s;
                    animation-fill-mode: forwards;
        }

        @keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: .6; }
        }

        /* Firefox < 16 */
        @-moz-keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: .7; }
        }

        /* Safari, Chrome and Opera > 12.1 */
        @-webkit-keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: .7; }
        }

        /* Internet Explorer */
        @-ms-keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: .7; }
        }

        /* Opera < 12.1 */
        @-o-keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: .7; }
        }

        #logo img {
          position: absolute;
          top: 50%;
          left: 45%;


            -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
              -moz-animation: fadein 2s; /* Firefox < 16 */
                -ms-animation: fadein 2s; /* Internet Explorer */
                -o-animation: fadein 2s; /* Opera < 12.1 */
                    animation: fadein 2s;
                    animation-fill-mode: forwards;
                    animation-timing-function: ease-in;
        }

        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Firefox < 16 */
        @-moz-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Safari, Chrome and Opera > 12.1 */
        @-webkit-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Internet Explorer */
        @-ms-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Opera < 12.1 */
        @-o-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }`}
    </style>
  </Layout>
);

export default Home;
