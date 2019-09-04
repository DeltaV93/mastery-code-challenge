import React    from 'react';
import { Link } from 'react-router-dom';

const renderBtn = ( locked ) => {
	if ( !locked && locked !== undefined ) {
		return (
				<div className='ui label'>
					<i className='icon edit'/>
					Can Edit Status
				</div>
		);
	}
};

const StyledCard = ( { data: { id, origin, destination, date, status, locked }, statusColor } ) => (
		<div className='ui card'>
			<div className='content'>
				<div className='right floated'>
					<div className='ui labeled mini button'
							 tabIndex='0'>
						<div className={ `ui mini ${ statusColor } button` }>
							Status
						</div>
						<a className={ `ui basic left pointing ${ statusColor } label` }>
							{ status }
						</a>
					</div>
				</div>

				<div className='header'>Load ID: { id }</div>
				<div className='description'>
					<div className='ui grid'>
						<div className='six'>
							<div className='item'>
								<div>
									<p><strong>Origin: </strong>{ origin }</p>
								</div>
							</div>
							<div className='item'>
								<div>
									<p><strong>Destination: </strong>{ destination }</p>
								</div>
							</div>
							<div className='item'>
								<div>
									<p><strong>Date: </strong>{ date }</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='extra content'>
				<span className='left floated like'>
					{ renderBtn( locked, id ) }
				</span>
						<span className='right floated star'>
							<Link className='ui button black mini'
										to={ `shipments/${ id }` }>View { !locked ? '/ Edit' : '' }</Link>
				</span>
			</div>
		</div>
);

export default StyledCard;