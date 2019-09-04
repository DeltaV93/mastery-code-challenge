import React                     from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ListShipment              from './components/Shipment/ListShipments';
import ShowShipment              from './components/Shipment/ShowShipment';
import Header                    from './components/Layout/Header';
import history                   from './history';

function App() {
	return (
			<div>
				<Router history={ history }>
					<Header/>
					<div className='ui container'>
						<Switch>
							<Route path='/'
										 exact
										 component={ ListShipment }/>
							<Route path='/shipments/:id'
										 exact
										 component={ ShowShipment }/>
						</Switch>
					</div>
				</Router>
			</div>
	);

}

export default App;
