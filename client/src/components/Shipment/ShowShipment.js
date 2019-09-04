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
					<i className=' icon truck'></i> Load ID: { id }
				</div>
		);

	}

	renderStatusSection( lockStatus ) {
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
	}

	renderContent() {

		if ( !this.props.shipments ) {
			return 'Are you sure you want to edit this stream?';
		}

		const {
			origin,
			destination,
			date,
			value,
			equipment,
			locked,
			status
		} = this.props.shipments;
		return (

				<div className='ui center icon'>
					<h2 className='header center align'>Shipment Information</h2>
					<div>
						<div className='ui'>
							<div className='ui grid list'>
								<div className='eight wide column'>
									<div className='item'>
										<p><strong className='header'>Origin Location</strong></p>
										{ origin }
									</div>
									<div className='item'>
										<p><strong className='header'>Destination</strong></p>
										{ destination }
									</div>
									<div className='item'>
										<p><strong className='header'>Shipment Date</strong></p>
										{ date }
									</div>
								</div>
								<div className='eight wide column'>
									<div className='item'>
										<p><strong className='header'>Shipment Value</strong></p>
										<NumberFormat value={ value }
																	displayType={ 'text' }
																	thousandSeparator={ true }
																	prefix={ '$' }/>
									</div>
									<div className='item'>
										<p><strong className='header'>Equipment</strong></p>
										{ equipment }
									</div>
									<div className='item'>
										<p><strong className='header'>Shipping status</strong></p>
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
