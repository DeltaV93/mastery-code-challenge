import React    from 'react';
import { Link } from 'react-router-dom';
import styled   from 'styled-components';

const StyledHeader = styled.div`
	&&.nav {
		background: #fff;
	}
	
	&&.nav a {
		color: black;
	}
`;

const StyledHeaderLogo = styled.img`
	height: 2em;
	margin: 0.5em 5.2em;
`;


const Header = () => {
	return (
			<StyledHeader className='ui nav secondary pointing menu'>
				<StyledHeaderLogo src={process.env.PUBLIC_URL + '/logo-dark5.png'} />
			</StyledHeader>
	);
};

export default Header;