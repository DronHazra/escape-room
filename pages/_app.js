import { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { DialogWrapper, HintWrapper, SFXWrapper } from '../src/context';
import { Button, Container, Fab } from '@material-ui/core';
import Link from '../src/Link';

const useStyles = makeStyles(theme => ({
	fab: {
		position: 'absolute',
		bottom: theme.spacing(5),
		right: theme.spacing(5),
	},
}));

export default function MyApp(props) {
	const { Component, pageProps } = props;
	const classes = useStyles();
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<Fragment>
			<Head>
				<title>space escape</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SFXWrapper>
					<HintWrapper>
						<Container maxWidth='md'>
							<Fab
								variant='extended'
								component={Link}
								href='/hints'
								className={classes.fab}
							>
								Hint
							</Fab>
							<Component {...pageProps} />
						</Container>
					</HintWrapper>
				</SFXWrapper>
			</ThemeProvider>
		</Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
