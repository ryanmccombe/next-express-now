import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@material-ui/styles';
import {createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';

import { materialTheme, styledComponentsTheme } from '../theme';
import withReduxStore from '../redux/withStore'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(90deg, #FFF 50%, ${materialTheme.palette.background.offWhite} 50%);
  }
`;

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
				<StyledComponentsThemeProvider theme={styledComponentsTheme}>
					<ThemeProvider theme={materialTheme}>
						<GlobalStyle />
						<CssBaseline />
						<Provider store={reduxStore}>
							<Component {...pageProps} />
						</Provider>
					</ThemeProvider>
				</StyledComponentsThemeProvider>
			</Container>
		)
	}
}

export default withReduxStore(MyApp);
