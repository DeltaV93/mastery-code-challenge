import loads   from '../apis/loads';
import history from '../history';
import {
	FETCH_SHIPMENTS,
	FETCH_SHIPMENT,
	EDIT_SHIPMENT
}              from './types';

export const fetchShipments = () => async dispatch => {
	const response = await loads.get( '/shipments' );

	dispatch( { type: FETCH_SHIPMENTS, payload: response.data } );
};

export const fetchShipment = id => async dispatch => {
	const response = await loads.get( `/shipments/${ id }` );

	dispatch( { type: FETCH_SHIPMENT, payload: response.data } );
};

export const editShipment = ( id, formValues ) => async dispatch => {
	const response = await loads.patch( `/shipments/${ id }`, formValues );

	dispatch( { type: EDIT_SHIPMENT, payload: response.data } );
	history.push( '/' );
};