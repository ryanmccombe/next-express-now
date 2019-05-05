import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'

import withReduxStore from '../redux/withStore'

class MyApp extends App {
	render () {
		const { Component, pageProps, reduxStore } = this.props;
		
		return (
			<Container>
				<Head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
				</Head>
				<Provider store={reduxStore}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}

export default withReduxStore(MyApp);
