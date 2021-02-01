import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		background: {
			default: "#050614"
		}
	},
	typography: {
		fontFamily: ['Helvetica', 'bold'],
		fontSize: 15
	},
});

export default theme;
