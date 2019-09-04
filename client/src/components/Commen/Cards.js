import React    from 'react';
import { Link } from 'react-router-dom';
import styled   from 'styled-components';

const StyledStatus = styled.div`
&&.book-status {
	text-transform: capitalize;
	}
`;

const renderBtn = ( locked ) => {
	if ( !locked && locked !== undefined ) {
		return (
				<div className='ui basic label'>
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
						<StyledStatus className={ `ui book-status basic left ${ statusColor } label` }>
							{ status }
						</StyledStatus>
					</div>
				</div>

				<div className='header'>Load ID: { id }</div>
				<div className='description'>
					<div className='ui grid'>
						<div className='six'>
							<div className='item'>
								<div>
									<p><strong className='header black'>Origin: </strong>{ origin }</p>
								</div>
							</div>
							<div className='item'>
								<div>
									<p><strong className='header black'>Destination: </strong>{ destination }</p>
								</div>
							</div>
							<div className='item'>
								<div>
									<p><strong className='header black'>Date: </strong>{ date }</p>
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