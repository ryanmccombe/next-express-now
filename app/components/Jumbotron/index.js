import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
import Container from "@material-ui/core/Container/Container";

const Wrapper = styled.div`
	background-color: black;
	background: #555 url("https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/08/Shadow-of-the-tomb-raider-4.png") no-repeat center;
	background-size: cover;
	height: 600px;
	filter: grayscale(1)
`;

const Inner = styled.div`
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,0.6);
	padding-top: 300px;
`;

const Title = styled(Typography)`
	color: white;
`;

class Jumbotron extends Component {
	render() {
		return (
			<Wrapper>
				<Inner>
					<Container maxWidth="lg">
					<Title variant="h1" gutterBottom>
						header title
					</Title>
						<Title variant="h5" style={{ maxWidth: 800 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin dolor, in mollis dolor. Aliquam vitae dapibus dui.
						</Title>
					</Container>
				</Inner>
			</Wrapper>
		)
	}
}

export default Jumbotron;
