import {
	Button,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import { useState, useContext } from 'react';
import { OnChar, Pause, Pace } from 'windups';
import TextCard from '../../src/clues/TextCard';
import { DialogContext } from '../../src/context';
import Dialog from '../../src/Dialog';
import Header from '../../src/Header';
import SmashEffect from '../../src/SmashEffect';
import { SFXContext } from '../../src/context';

const btoa = input_string => {
	return Buffer.from(input_string).toString('base64');
};

const useStyles = makeStyles({
	image: {
		objectFit: 'scale-down',
	},
});

export default function Cryptographer() {
	const correctCode = btoa('milky wayz');
	const [clue1Value, setClue1Value] = useState(''); // 000 is a placeholder, i'll calc it once we have it
	const [clue2Value, setClue2Value] = useState('');
	const correctClue2 = btoa('shooting star');
	const [clue3Value, setClue3Value] = useState('');
	const correctClue3 = btoa('Focus on the horizon');
	const smash = useContext(SFXContext);
	return (
		<Container maxWidth='md'>
			<Typography variant='h2'>Cryptographer</Typography>
			<Dialog>
				<TextCard>
					Hey there! It’s Rammy once again. I take it you’re the
					cryptographer of this crew?
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue1Value(input_string)}
					canProceed={correctCode === clue1Value}
				>
					Well, I’ll keep this straight to the point today. Our
					computer generated the following message in response to a
					security malfunction on board. Decrypt it and you’ll be
					given a key that lets you move on. <br />
					<Pace getPace={() => 500}>...</Pace>
					<br />
					Right! Almost forgot to show you the message. Here it is:
					<br />
					<Pause ms={500} />
					<Button
						href='https://cdn.discordapp.com/attachments/743587597414301869/806525703440564234/unknown.png'
						target='_blank'
					>
						Error logs
					</Button>
					<Pause ms={500} />
					<br />
					Good luck!
				</TextCard>
				<TextCard>Well done! Your decoding skills are superb.</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue2Value(input_string)}
					canProceed={correctClue2 === clue2Value}
				>
					You're getting there! <SmashEffect /> OH WOW!{' '}
					<Pause ms={500} /> <br />{' '}
					<Paper variant='outlined'>
						<img src='/stars.png' width='300' />
					</Paper>
					<Pause ms={500} /> <br />
					That's a pretty sky, can you figure out what's written in
					the stars?
				</TextCard>
				<TextCard>Awesome. You're rad.</TextCard>
			</Dialog>
		</Container>
	);
}
