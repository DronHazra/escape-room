import {
	useState,
	useCallback,
	createContext,
	useEffect,
	useContext,
} from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Effect, Pause, WindupChildren } from 'windups';
import SmashEffect from '../src/SmashEffect';
import Header from '../src/Header';

const useStyles = makeStyles(theme => ({
	// heading: {
	// 	animation: `$myEntry 1500ms ${theme.transitions.easing.easeInOut}`,
	// },
	// '@keyframes myEntry': {
	// 	from: {
	// 		opacity: 0,
	// 	},
	// 	to: {
	// 		opacity: 1,
	// 	},
	// },
}));
const SMASH_MS = 500;
const func = () => {};
export const SFXContext = createContext(func);

const smashStyles = makeStyles(theme => ({
	smashing: {
		animation: `$mySmash ${SMASH_MS}ms ${theme.transitions.easing.easeInOut}`,
	},
	'@keyframes mySmash': {
		'0%': {
			transform: 'translate(0px, 10px)',
		},
		'10%': {
			transform: 'translate(20px, -30px)',
		},
		'20%': {
			transform: 'translate(-12px, 17px)',
		},
		'40%': {
			transform: 'translate(7px, -9px)',
		},
		'60%': {
			transform: 'translate(-3px, 4px)',
		},
		'80%': {
			transform: 'translate(1px, -1px)',
		},
		'100%': {
			transform: 'translate(0px, 0px)',
		},
	},
}));

function SFX({ children }) {
	const [isSmashing, setIsSmashing] = useState(false);
	const classes = smashStyles();
	const smash = useCallback(() => {
		setIsSmashing(true);
	}, []);

	useEffect(() => {
		if (isSmashing) {
			setTimeout(() => {
				setIsSmashing(false);
			}, SMASH_MS);
		}
	}, [isSmashing]);

	return (
		<SFXContext.Provider value={smash}>
			<div className={clsx({ [classes.smashing]: isSmashing })}>
				{children}
			</div>
		</SFXContext.Provider>
	);
}

export default function Index() {
	const classes = smashStyles();
	const smash = useContext(SFXContext);
	// const [text] = useWindupString('welcome to ');
	return (
		<SFX>
			<Container maxWidth='md'>
				<Header />
			</Container>
		</SFX>
	);
}
