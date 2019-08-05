import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends React.Component {
	render() {
		const style = {
			width: '250px',
        	height: '170px'
		}

		const pos = {
			lat: 38.36534,
			lng: -75.602202
		}

		return (
			<div>
				<Map
					google={this.props.google}
					zoom={15}
					style={style}
					initialCenter={pos}
				>
					<Marker
						title='ESRGC'
						name='ESRGC'
						position={pos}
					/>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyA0eLph8dO_6VkpRXZZIKhHNC6DIM4wQfE')
})(MapContainer);
