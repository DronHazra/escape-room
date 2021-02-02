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
import useComponentSize from '@rehooks/component-size';
import React, {
	useState,
	useRef,
	useEffect,
	useContext,
	useCallback,
	Children,
	createContext,
} from 'react';
import { useInView } from 'react-intersection-observer';
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

function useKeepInViewer(height) {
	const measurementRef = useRef();
	const prevHeightRef = useRef(height);

	const [inViewRef, isInView] = useInView({
		rootMargin: '-100px 0px',
	});
	const setRef = useCallback(
		node => {
			measurementRef.current = node;
			inViewRef(node);
		},
		[inViewRef]
	);
	useEffect(() => {
		if (!measurementRef.current) {
			return;
		}

		const scrollBottom = window.scrollY + window.innerHeight;
		const bottomPos =
			measurementRef.current.offsetTop +
			measurementRef.current.offsetHeight;
		const isJustOutOfView = Math.abs(scrollBottom - bottomPos) < 200;
		if (!isInView && height !== prevHeightRef.current && isJustOutOfView) {
			window.scroll({
				top:
					measurementRef.current.offsetTop -
					(window.innerHeight / 3) * 2,
				behavior: 'smooth',
			});
		}
	}, [isInView, height]);

	return <div ref={setRef} />;
}

export default function Dialog({ children }) {
	const [numberOfCards, setNumberOfCards] = useState(1);
	const activeChildIndex = numberOfCards - 1;
	const rootRef = useRef(null);
	const { height } = useComponentSize(rootRef);
	const keepy = useKeepInViewer(height);

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
			<div ref={rootRef}>
				<Grid container direction='column' spacing={3}>
					{shownChildren}
				</Grid>
				{keepy}
			</div>
		</Container>
	);
}
