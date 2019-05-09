import React, { Component, Fragment } from 'react';
import Book from '../components/Book'
import Jumbotron from '../Components/Jumbotron';
import NavBar from '../Components/NavBar';
import CTA from '../Components/CTA';

class Index extends Component {
	render() {
		return (
			<Fragment>
				<Jumbotron />
				
				<CTA />
				<NavBar />
				<Book />
			</Fragment>
		)
	}
}
export default Index;
