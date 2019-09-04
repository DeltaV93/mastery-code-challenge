import React                from 'react';
import { Field, reduxForm } from 'redux-form';

class ShipmentForm extends React.Component {

	renderInput = ( { input, label, type, meta } ) => {
		console.log( type );
		const className = `field grid inline ${ meta.error && meta.touched ? 'error' : '' }`;
		return (
				<div className={ className }>
					<div className='field'>
						<label htmlFor={ input.name }>{ label }</label>
						<div className='ui action input'>
							<select className='ui '
											type={ type } { ...input }>
								<option disabled>Select Load Status</option>
								<option value='available'>Available</option>
								<option value='booked'>Booked</option>
							</select>
							<button className='ui green button'>Update Status</button>
						</div>
					</div>
				</div>
		);
	};

	onSubmit = ( formValues ) => {
		this.props.onSubmit( formValues );
	};

	render() {
		return (
				<form onSubmit={ this.props.handleSubmit( this.onSubmit ) }
							className='ui form  error'>
					<Field name='status'
								 component={ this.renderInput }/>
				</form>
		);
	}
}

export default reduxForm( {
	form: 'shipmentForm'
} )( ShipmentForm );
