import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react';

const assetPrefix = process.env.ASSET_PREFIX;

const JohnSmith = (props) => (
    <Link href='../../dataholder/johnsmith' as={`${assetPrefix}/../../dataholder/johnsmith`}>
        <a>
            <div className="ui fluid card">
                <Card.Content>
                    <Image size="large"
                        src={`../static/images/${props.image}`}
                        title={props.title}
                        centered
                    />
                </Card.Content>
                <Card.Content>
                    <h3 className="ui center aligned header">John Smith Project</h3>
                </Card.Content>
            </div>
        </a>
    </Link>
)

export default JohnSmith;