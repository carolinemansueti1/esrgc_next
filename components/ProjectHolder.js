import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react'; 

export default (props) => {
    
    const assetPrefix = process.env.ASSET_PREFIX;
    
    return (
            <Link href={{ pathname: '/projectholder', query: { id: props.id } }} as={`${assetPrefix}/projectholder`}>
                <div className="ui fluid card" key={props.title}>
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
                </div>
            </Link>
 
    )
}

