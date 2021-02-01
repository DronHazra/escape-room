import { makeStyles } from '@material-ui/core';
import { createContext, useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';

export const SFXContext = createContext(() => {});
const SMASH_MS = 500;

const useStyles = makeStyles(theme => ({
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

export function SFXWrapper({ children }) {
	const [isSmashing, setIsSmashing] = useState(false);
	const classes = useStyles();
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
