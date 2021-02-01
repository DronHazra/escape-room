import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		background: {
			default: "#050614"
		}
	},
	typography: {
		fontFamily: ['Roboto', 'bold'],
		fontSize: 15
	},
});

export default theme;
