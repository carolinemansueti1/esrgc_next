import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react';

const assetPrefix = process.env.ASSET_PREFIX;

const TaxDitch = (props) => (
    <Link href='../../dataholder/taxditch' as={`${assetPrefix}/../../dataholder/taxditch`}>
        <a>
            <div className="ui fluid card">
                <Card.Content>
                    <Image size="large"
                        src={`${assetPrefix}/static/images/${props.image}`}
                        title={props.title}
                        centered
                    />
                </Card.Content>
                <Card.Content>
                    <h3 className="ui center aligned header">Tax Ditches and PDAs</h3>
                </Card.Content>
            </div>
        </a>
    </Link>
)

export default TaxDitch;