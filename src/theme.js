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
	import { positions } from '@material-ui/system';
		position: "absolute"
		top: 30
	},
});

export default theme;
