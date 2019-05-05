import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const Title = styled(Typography)`
	color: red;
`;

import { incrementCount } from "../redux/store";

class Index extends Component {
	render() {
		const { count, incrementCount } = this.props;
		
		return (
			<Fragment>
				<Title variant="h1" component="h2" gutterBottom>
					Hello From NextJS.
				</Title>
				<Button variant="contained" onClick={incrementCount}>
					Clicked {count} time(s)
				</Button>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	count: state.count,
});

export default connect(mapStateToProps, { incrementCount })(Index);
