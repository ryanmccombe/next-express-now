import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal';
import blueGray from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
	palette: {
		background: {
			default: 'white',
			offWhite: '#f6f8f8' || blueGray[50]
		},
		border: {
			light: blueGray[200]
		},
		success: teal[800]
	},
});

// Create a theme instance.
export const materialTheme = theme;

export const styledComponentsTheme = theme;
