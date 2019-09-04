import React              from 'react';
import { connect }        from 'react-redux';
import { fetchShipments } from '../../actions';
import StyledCard         from '../Commen/Cards';

class ListShipments extends React.Component {
	componentDidMount() {
		this.props.fetchShipments();
	}

	renderShipmentList = () => {
		return this.props.shipments.map( record => {
					const statusColor = record.status === 'available' ? 'green' : 'grey';
					const icon = record.locked ? 'lock' : 'lock open';

					return (
							<StyledCard
									statusColor={ statusColor }
									icon={ icon }
									data={ record }/>
					);
				}
		);
	};

	render() {
		return (
				<section>
					<h1>Load Board</h1>
					<div className='ui cards three stackable'>
						{ this.renderShipmentList() }
					</div>
				</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		shipments: Object.values( state.shipments )
	};
};

export default connect(
		mapStateToProps,
		{ fetchShipments }
)( ListShipments );