import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import Title from './Title';
import ChapterList from './ChapterList';
import Page from './Page';

const Left = styled(Grid)`
	text-align: right;
`;

const Right = styled(Grid)`
	background: ${props => props.theme.palette.background.offWhite};
	border-left: 1px ${props => props.theme.palette.border.light} solid;
	min-height: 100vh;
`;

class Book extends Component {
	render() {
		return (
				<Grid container>
					<Left item xs={4}>
						<Title />
						<ChapterList />
					</Left>
					<Right item xs>
						<Page />
					</Right>
				</Grid>
		)
	}
}

export default Book;
