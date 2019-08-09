import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react'; 

export default (props) => {
    
    const assetPrefix = process.env.ASSET_PREFIX;
    
    return (
            <Link href={{ pathname: '/ourworkholder', query: { id: props.id } }} as={`${assetPrefix}/ourworkholder`}>
                <div className="ui fluid card spaced" key={props.title}>
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

                    <style jsx>
                        {`
                        .spaced {
                            margin-top: 2vh;
                            margin-bottom:2vh;
                        }`}
                    </style>
                </div>
            </Link>
 
    )
}

