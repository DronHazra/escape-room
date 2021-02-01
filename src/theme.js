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
	breakpoints: {
		down: f down(50)
	}
});

export default theme;
