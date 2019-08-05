import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react';

const TaxDitch = (props) => (
    <Link href='../../dataholder/taxditch'>
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
                    <h3 className="ui center aligned header">Tax Ditches and PDAs</h3>
                </Card.Content>
            </div>
        </a>
    </Link>
)

export default TaxDitch;