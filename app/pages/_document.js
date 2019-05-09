import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet as StyledComponentsStyles } from 'styled-components';

import flush from 'styled-jsx/server';
import { materialTheme } from '../theme';



class MyDocument extends Document {
	render() {
		return (
			<html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					<meta name="theme-color" content={materialTheme.palette.primary.main} />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>
					
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = async ctx => {
	const sheets = new ServerStyleSheets();
	const styledComponentsSheet = new StyledComponentsStyles();
	
	const originalRenderPage = ctx.renderPage;
	
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props => styledComponentsSheet.collectStyles(sheets.collect(<App {...props} />)),
		});
	
	const initialProps = await Document.getInitialProps(ctx);
	
	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: (
			<React.Fragment>
				{sheets.getStyleElement()}
				{styledComponentsSheet.getStyleElement()}
				{flush() || null}
			</React.Fragment>
		),
	};
};

export default MyDocument;
