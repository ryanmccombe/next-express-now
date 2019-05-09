import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

import styled from 'styled-components';

const Title = styled(Typography)`
	flex-grow: 1;
`;

const StyledAppbar = styled(AppBar)`
	background-color: #333 !important;
`;

class NavBar extends Component {
	render() {
		return (
			
			<StyledAppbar position="static" elevation={0}>
				<Container maxWidth="lg">
				<Toolbar disableGutters={true}>
					<Title variant="h6">
						Title
					</Title>
					<Button color="inherit">Button</Button>
				</Toolbar>
				</Container>
			</StyledAppbar>
			
		)
	}
}

export default NavBar;
