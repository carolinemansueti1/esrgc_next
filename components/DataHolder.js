import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react';

const assetPrefix = process.env.ASSET_PREFIX;

const DataHolder = (props) => (
    <Link href={`../../dataholder/${props.pathname}`} as={`${assetPrefix}/../../dataholder/${props.pathname}`}>
        <a>
            <div className="ui fluid card">
                <Card.Content>
                    <Image size="large"
                        src={`${assetPrefix}/../static/images/${props.image}`}
                        title={props.title}
                        centered
                    />
                </Card.Content>
                <Card.Content>
                    <h3 className="ui center aligned header">{props.title}</h3>
                </Card.Content>
            </div>
        </a>
    </Link>
)

export default DataHolder;