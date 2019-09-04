import _ from 'lodash';
import {
	FETCH_SHIPMENTS,
	FETCH_SHIPMENT,
	EDIT_SHIPMENT
}        from '../actions/types';

export default ( state = {}, action ) => {
	switch (action.type) {
		case FETCH_SHIPMENTS:
			return { ...state, ..._.mapKeys( action.payload, 'id' ) };
		case FETCH_SHIPMENT:
			return { ...state, [ action.payload.id ]: action.payload };
		case EDIT_SHIPMENT:
			return { ...state, [ action.payload.id ]: action.payload };
		default:
			return state;
	}
}