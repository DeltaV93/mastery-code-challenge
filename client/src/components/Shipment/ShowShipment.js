import _                               from 'lodash';
import React                           from 'react';
import { connect }                     from 'react-redux';
import { Link }                        from 'react-router-dom';
import history                         from '../../history';
import { fetchShipment, editShipment } from '../../actions';
import NumberFormat                    from 'react-number-format';

import Modal        from '../Commen/Modal';
import ShipmentForm from './ShipmentForm';

class StreamShow extends React.Component {

	componentDidMount() {
		this.props.fetchShipment( this.props.match.params.id );
	}

	onSubmit = formValues => {
		this.props.editShipment( this.props.match.params.id, formValues );
	};

	renderActions() {

		return (
				<React.Fragment>
					<Link to='/'
								className='ui black button'>
						Close
					</Link>
				</React.Fragment>
		);
	}

	renderHeader() {
		if ( !this.props.shipments ) {
			return 'Sorry we\'re having troubling loading this shipment. Please try again.';
		}
		const { id } = this.props.shipments;

		return (
				<div>
					<i className=' icon truck'/> Load ID: { id }
				</div>
		);

	}

	renderStatusSection( lockStatus, status ) {
		if ( !lockStatus ) {
			return (
					<div>
						<ShipmentForm onSubmit={ this.onSubmit }
													pristineDefinition={ this.props.shipments }
													initialValues={
														_.pick(
																this.props.shipments,
																'status' ) }/>
					</div>
			);
		}
		return <div>{status}</div>
	}

	renderContent() {

		if ( !this.props.shipments ) {
			return 'Are you sure you want to edit this stream?';
		}

		const {
			id,
			origin,
			destination,
			date,
			value,
			equipment,
			locked,
			status
		} = this.props.shipments;
		return (

				<div>
					<h2 className='ui header'>
						<i className='circular truck icon'/>
						<div className='content'>
							Shipment ID: { id }
						</div>
					</h2>
					<div className='ui divider'/>
					<div>

						<div className='ui grid'>
							<div className='eight wide column eight'>
								<div className=' ui  list '>
									<div className='item'>
										<h4 className='sub header'>Origin Location</h4>
										<span>{ origin }</span>
									</div>
									<div className='item'>
										<h4 className='sub header'>Shipment Date</h4>
										<span>{ date }</span>
									</div>
									<div className='item'>
										<h4 className='sub header'>Shipment Value</h4>
										<span>
											<NumberFormat value={ value }
																		displayType={ 'text' }
																		thousandSeparator={ true }
																		prefix={ '$' }/>
										</span>

									</div>
								</div>
							</div>
							<div className='eight wide column eight'>
								<div className=' ui  list '>
									<div className='item'>
										<h4 className='sub header'>Destination</h4>
										<span>{ destination }</span>
									</div>
									<div className='item'>
										<h4 className='sub header'>Equipment</h4>
										<span>{ equipment }</span>
									</div>
									<div className='item'>
										<h4 className='sub header'>Shipping status</h4>
										{ this.renderStatusSection( locked, status ) }
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}

	render() {
		return (
				<Modal
						modalSize='tiny'
						title={ this.renderHeader() }
						content={ this.renderContent() }
						actions={ this.renderActions() }
						onDismiss={ () => history.push( '/' ) }
				/>
		);
	}
}

const mapStateToProps = ( state, ownProps ) => {
	return { shipments: state.shipments[ ownProps.match.params.id ] };
};

export default connect(
		mapStateToProps,
		{ fetchShipment, editShipment }
)( StreamShow );
