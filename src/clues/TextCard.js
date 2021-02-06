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

const btoa = input_string => {
	return Buffer.from(input_string).toString('base64');
};

export default function TextCard({
	children,
	needsInput,
	answerCallback,
	canProceed,
}) {
	const { isActive, proceed } = useContext(DialogChildContext);
	const [finished, setFinished] = useState(false);
	useEffect(() => {
		if (finished && canProceed && isActive && needsInput) {
			proceed();
		}
	}, [canProceed, finished]);
	const textInput = (
		<TextField
			onChange={event =>
				answerCallback(btoa(event.target.value.toLowerCase()))
			}
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
				{needsInput || false ? (
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
