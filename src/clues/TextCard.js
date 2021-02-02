import {
	Button,
	Card,
	CardContent,
	CardActions,
	Typography,
	TextField,
} from '@material-ui/core';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { WindupChildren } from 'windups';
import { DialogChildContext } from '../Dialog';

export default function TextCard({
	children,
	needsInput,
	answerCallback,
	canProceed = true,
}) {
	const { isActive, proceed } = useContext(DialogChildContext);
	const [finished, setFinished] = useState(false);
	useEffect(() => {
		if (finished && canProceed && isActive) {
			proceed();
		}
	}, [canProceed, finished]);
	const textInput = (
		<TextField
			onChange={event => answerCallback(event.target.value)}
			autoFocus
			error={!canProceed}
		/>
	);
	return (
		<Card>
			<CardContent>
				<Typography>
					<WindupChildren
						onFinished={() => setFinished(true)}
						skipped={finished}
					>
						{children}
					</WindupChildren>
				</Typography>
			</CardContent>
			<CardActions>
				{needsInput ? (
					finished ? (
						textInput
					) : (
						''
					)
				) : (
					<Button
						fullWidth
						variant='contained'
						onClick={
							finished
								? proceed
								: () => {
										setFinished(true);
								  }
						}
					>
						Continue
					</Button>
				)}
			</CardActions>
		</Card>
	);
}
