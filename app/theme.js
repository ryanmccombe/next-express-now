import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blueGray from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
	palette: {
		background: {
			default: 'white',
			offWhite: blueGray[50]
		},
		border: {
			light: blueGray[200]
		}
	},
});

// Create a theme instance.
export const materialTheme = theme;

export const styledComponentsTheme = theme;
