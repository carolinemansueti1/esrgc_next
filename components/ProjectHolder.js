import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react'; 

const assetPrefix = process.env.ASSET_PREFIX;

export default (props) => {
    
    return (
            <Link href={{ pathname: '/projectholder', query: { id: props.id } }} as={`${assetPrefix}/`}>
                <div className="ui fluid card" key={props.title}>
                    <Card.Content>
                    <Image size="large"
                        src={`../static/images/${props.image}`}
                        title={props.title}
                    />
                    </Card.Content>
                    <Card.Content>
                        <h3 className="ui center aligned header">
                        {props.title}
                        </h3>
                    </Card.Content>
                </div>
            </Link>
 
    )
}

