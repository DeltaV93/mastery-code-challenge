import { combineReducers }        from 'redux';
import shipmentReducer            from './shipmentReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers( {
	shipments: shipmentReducer,
	form: formReducer
} );