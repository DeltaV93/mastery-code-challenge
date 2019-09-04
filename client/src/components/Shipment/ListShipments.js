import React                from 'react';
import { connect }          from 'react-redux';
import { fetchShipments }   from '../../actions';
import StyledCard           from '../Commen/Cards';
import styled               from 'styled-components';

const StyledCardWrapper = styled.section`
	&& .card {
		border-radius: 0;
		-webkit-box-shadow: 0 1px 3px 0 #efefef, 0 0 0 1px #efefef;
		box-shadow: 0 1px 3px 0 #efefef, 0 0 0 1px #efefef;
		padding: 5px;
	}
	
	&& .card .content .description {
	  padding-top: 20px;
    padding-bottom: 20px;
	}
	
	&& .ui.card>.content p,
	.ui.cards>.card>.content p{
		margin-bottom: 3px;
	}
`;

const StyledPageTitle = styled.h1`
	padding-top: 0.5em;
	margin-bottom: 1.5em;
`;

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
					<StyledPageTitle>Load Board</StyledPageTitle>
					<StyledCardWrapper className='ui cards three stackable'>
						{ this.renderShipmentList() }
					</StyledCardWrapper>
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