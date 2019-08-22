import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react'; 
import { Popup } from 'semantic-ui-react';
import '../styles/card.less';

const assetPrefix = process.env.ASSET_PREFIX;

export default (props) => {
    return (
        <div>
            <Link href={`${props.url}`} as={`${props.url}`}>
                <a>
                <Popup trigger={<div className="ui card" key={props.title} position='top center' inverted>
                    <Card.Content>
                    <Image size="large"
                        src={`${assetPrefix}/static/images/${props.image}`}
                        title={props.title}
                    />
                    </Card.Content>
                    <Card.Content>
                        <h3 className="ui center aligned header">
                        {props.title}
                        </h3>
                    </Card.Content>
                </div>}>
                    {props.description}
                </Popup>
                </a>
            </Link>

            <style jsx>
                {`.ui.content{
                    max-height: 20vh;
                }`}
            </style>
        </div>
    )
}

