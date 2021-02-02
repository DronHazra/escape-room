// Based on https://github.com/sgwilym/windups-docs/blob/master/src/Dialog.tsx
import {
	Button,
	Card,
	CardContent,
	Container,
	makeStyles,
	Typography,
	Grid,
} from '@material-ui/core';
import React, {
	useState,
	useRef,
	useEffect,
	useContext,
	useCallback,
	Children,
	createContext,
} from 'react';
import theme from './theme';

const useStyles = makeStyles(theme => {
	return {
		root: {
			paddingBottom: 0,
		},
	};
});

export const DialogChildContext = createContext({
	isActive: true,
	proceed: () => {},
});

export default function Dialog({ children }) {
	const [numberOfCards, setNumberOfCards] = useState(1);
	const activeChildIndex = numberOfCards - 1;

	const shownChildren = Children.toArray(children)
		.slice(0, numberOfCards)
		.map((child, i) => {
			return (
				<DialogChildContext.Provider
					value={{
						isActive: i === activeChildIndex,
						proceed: () => {
							if (i + 2 > numberOfCards) {
								setNumberOfCards(i + 2);
							}
						},
					}}
					key={i}
				>
					<Grid item>{child}</Grid>
				</DialogChildContext.Provider>
			);
		});
	return (
		<Container maxWidth='sm'>
			<Grid container direction='column' spacing={3}>
				{shownChildren}
			</Grid>
		</Container>
	);
}
