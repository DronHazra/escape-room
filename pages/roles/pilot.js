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
import Link from '../../src/Link';

const btoa = input_string => {
	return Buffer.from(input_string).toString('base64');
};

const useStyles = makeStyles({
	image: {
		objectFit: 'scale-down',
	},
});

export default function Pilot() {
	const correctCode = btoa('astronomically');
	const [clue1Value, setClue1Value] = useState(''); // 000 is a placeholder, i'll calc it once we have it
	const [clue2Value, setClue2Value] = useState('');
	const correctClue2 = btoa('starfall');
	const [clue3Value, setClue3Value] = useState('');
	const correctClue3 = btoa('pods');
	const smash = useContext(SFXContext);
	return (
		<>
			<Typography variant='h2'>Pilot</Typography>
			<Dialog>
				<TextCard>
					Hey there! It’s Rammy once again. I take it you’re the pilot
					of this crew?
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue1Value(input_string)}
					canProceed={correctCode === clue1Value}
				>
					So lately I've been <Pace getPace={() => 500}>...</Pace>{' '}
					feeling. <Pause ms={1000} /> Scary, right? I'm a robot! Do
					you mind if I get some things off my chest?
					<br />
					<Pause ms={500} />
					<Button
						href='https://drive.google.com/file/d/1h8C5KeSD79l5RrsY4rqhaFlVdat7_Vq6/view'
						target='_blank'
					>
						feelings:(
					</Button>
				</TextCard>
				<TextCard>
					Well done. A good pilot must be able to understand what we
					send, even if bits and pieces <Pause ms={1000} /> *sniff*{' '}
					<Pause ms={1000} /> fall apart along the way.
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue2Value(input_string)}
					canProceed={correctClue2 === clue2Value}
				>
					Maybe some banger music will help me. I mean, you need to
					know how to set the tunezzz, you know what I mean? <br />
					<Pause ms={500} />
					<Button
						href='https://open.spotify.com/playlist/4ypn70omFrRVexZ1bKzvQN?si=QDeT2uvwREq97DWqmBGVPQ'
						target='_blank'
					>
						The Only Bangers
					</Button>
				</TextCard>
				<TextCard>
					Good job! Although the (banger) music didn’t really help,
					you still managed to get the answer that we needed.
				</TextCard>
				<TextCard>Now to test your navigation skills.</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue3Value(input_string)}
					canProceed={correctClue3 === clue3Value}
				>
					<Pause ms={500} />
					<Button
						href='https://drive.google.com/file/d/1OIUOOWcHWe8M5BCaTbPIXrYfpKnGq8gZ/view?usp=sharing'
						target='_blank'
					>
						(i'm communicating in pictures, numbers and words)
					</Button>
				</TextCard>
				<TextCard>
					Great. Let’s head over to the pods and get out of here as
					soon as we can.
					<Button component={Link} href='../teams/cryptographerpilot'>
						Your access code is: tomato
					</Button>
				</TextCard>
			</Dialog>
		</>
	);
}
