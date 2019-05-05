import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../theme';
import withReduxStore from '../redux/withStore'

class MyApp extends App {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}
	
	render () {
		const { Component, pageProps, reduxStore } = this.props;
		
		return (
			<Container>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Provider store={reduxStore}>
						<Component {...pageProps} />
					</Provider>
				</ThemeProvider>
			</Container>
		)
	}
}

export default withReduxStore(MyApp);
