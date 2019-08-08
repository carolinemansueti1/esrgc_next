import 'semantic-ui-css/semantic.min.css';
import { Segment, Container, List, Header, Grid, Divider } from 'semantic-ui-react';
import Link from 'next/link';
import MapContainer from './MapContainer';

const assetPrefix = process.env.ASSET_PREFIX;
const salisbury =  `${assetPrefix}/static/images/salisbury.png`;
const tricountyLogo =  `${assetPrefix}/static/images/tricountyLogo.png`;
const msrc = `${assetPrefix}/static/images/msrc.png`;

const footerA = () => (
    <div className='ui segment'>
        <div className='ui container'>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='ui columnr'>
                        <h3>Contact</h3>
                    </div>
                    <div className='ui columnr'>
                        <h3>Contact</h3>
                    </div>
                    <div className='ui columnr'>
                        <h3>Contact</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='ui container'>
        </div>

        <style jsx>
        {`
        .base {
            background-color: #c7c4bb;
            box-shadow: inset 0px 11px 8px -10px #CCC,
        }
        .map {
            height: 17vh;
            object-fit: scale-down;
        }`}
        </style>
    </div>
);

export default footerA;