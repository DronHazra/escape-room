import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		background: {
			default: '#050614',
		},
	},
	typography: {
		fontFamily: ['Roboto Mono', 'monospace'],
	},
});

export default theme;
