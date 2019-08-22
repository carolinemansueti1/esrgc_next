import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react'; 

export default (props) => {
    
    const assetPrefix = process.env.ASSET_PREFIX;
    
    return (
            <Link href={{ pathname: '/projectholder', query: { id: props.id } }} as={`${assetPrefix}/projectholder`}>
                <div className="ui fluid card spaced" key={props.title}>
                    <Card.Content>
                        <div className='cutoff'>
                            <img src={`${assetPrefix}/static/images/${props.image}`} />
                        </div>
                    </Card.Content>
                    <Card.Content>
                        <div className='ui titled'>
                            <h3 className="ui center aligned header">
                            {props.title}
                            </h3>
                        </div>
                    </Card.Content>

                    <style jsx>{`
                    .ui.fluid.card {
                        cursor: pointer;
                    }
                    
                    .spaced {
                        margin-top: 2vh;
                        margin-bottom:2vh;
                    }
                    
                    .cutoff {
                        height: 20vh;
                        object-fit: contain;
                        
                    }
                    
                    img {
                        height: 100%;
                        width: 100%;
                        object-fit: contain;
                        
                    }
                    
                    .titled {
                        height: 5vh;
                        text-align: center;
                        vertical-align: middle;
                    }`
                    }</style>
                </div>
            </Link>
 
    )
}