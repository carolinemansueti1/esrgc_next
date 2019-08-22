import 'semantic-ui-css/semantic.min.css';
import { Segment, Container, List, Header, Grid, Divider } from 'semantic-ui-react';
import Link from 'next/link';
import MapContainer from './MapContainer';

const assetPrefix = process.env.ASSET_PREFIX;
const salisbury =  `${assetPrefix}/static/images/salisbury.png`;
const tricountyLogo =  `${assetPrefix}/static/images/tricountyLogo.png`;
const msrc = `${assetPrefix}/static/images/msrc.png`;

const footer = () => (
    <div className='bottom'>
     <Segment inverted vertical color='grey'>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
         
          <Grid.Column width={4}>
            <Header inverted as='h3' content='Contact Us' />
            <List>
            <div className='differentcolor'>
              <div className='text'>
              <List.Item>1101 Camden Ave<br />Salisbury, MD 21801</List.Item>
              <List.Item>esrgc@salisbury.edu</List.Item>
              <List.Item>Twitter: @esrgc</List.Item>
              </div>
            </div>
              
            </List>
          </Grid.Column>
       
          <Grid.Column width={8}>
            <Header inverted as='h3' content='Our Partners' />
                <div className='differentcolor'>
                  <div className="ui basic segment">
                    <div className='ui centered grid'>
                      <div className='ui row'>
                        
                        <Link href={'http://www.midshore.org/index'}>
                          <a>
                            <img className='ui small image' src={msrc} />
                          </a>
                        </Link>
                        
                        
                        <Link href={'http://www.midshore.org/index'}>
                          <a>
                            <img className='ui small image' src={tricountyLogo}/>
                          </a>
                        </Link>
                        
                        
                        <Link href={'http://www.lowershore.org/'}>
                          <a>
                            <img className='ui small image' src={salisbury}/>
                          </a>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
          </Grid.Column>

          <Grid.Column width={4}>
            <Header inverted as='h4' content='Our Location' />
            <div className='map'>
              <MapContainer />
            </div>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            <i className="copyright outline icon" />Copyright ESRGC 2019
          </List.Item>
        </List>
        
      </Container>
    </Segment>

    <style jsx>
      {`
      .bottom {
        margin-top: 7vh;
        margin-bottom: 0vh;
      }
      .differentcolor {
        color: black;
        background-color: white;
        height: 17vh;
        object-fit: contain;
        margin: auto;
        border-radius: 25px;
      }
      .text {
        text-align: center;
        font-weight: bold;
        padding-top: 2vh;
        font-size: large;
        line-height: 1.6;
      }
      
      .map {
        height: 17vh;
        object-fit: scale-down;
      }`}
    </style>
  </div>
);

export default footer;