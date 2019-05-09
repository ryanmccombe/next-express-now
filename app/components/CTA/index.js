import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
import Container from "@material-ui/core/Container/Container";

const Wrapper = styled.div`
	background-color: black;
	background: #ddd url("https://wallpapertag.com/wallpaper/full/8/d/8/156695-full-size-white-gradient-background-1920x1200-screen.jpg") no-repeat center;
	background-size: cover;
	height: 400px;
	filter: grayscale(1)
`;

const Inner = styled.div`
	height: 100%;
	width: 100%;
	background-color: rgba(255,255,255,0.3);
	padding-top: 150px;
`;

const Title = styled(Typography)`
	color: black;
`;

class CTA extends Component {
	render() {
		return (
			<Wrapper>
				<Inner>
					<Container maxWidth="lg">
						<Title variant="overline">
							Chapter 1
						</Title>
					<Title variant="h3">
						IMMORTAL COILS
					</Title>
						<Title variant="h6" style={{ maxWidth: 800 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin dolor, in mollis dolor. Aliquam vitae dapibus dui.
						</Title>
					</Container>
				</Inner>
			</Wrapper>
		)
	}
}

export default CTA;
