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
		<Container maxWidth='md'>
			<Typography variant='h2'>Pilot</Typography>
			<Dialog>
				<TextCard>
					Hey there! It’s Rammy once again. I take it you’re the pilot
					of this crew?
				</TextCard>
				<TextCard>
					So lately I've been <Pace getPace={() => 500}>...</Pace>{' '}
					feeling. <Pause ms={1000} /> Scary, right? I'm a robot! Do
					you mind if I get some things off my chest?
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue1Value(input_string)}
					canProceed={correctCode === clue1Value}
				>
					All m<strong>y</strong> life I've felt dramAti
					<strong>c</strong>ally difF<strong>e</strong>rent from
					everyOne else. I don't see the HuMan r<strong>a</strong>ce
					as my own, I don't see this beAuti<strong>f</strong>ul pla
					<strong>n</strong>et as my own /<strong>/</strong> I feEl
					like an orphan <strong>w</strong>ould feel not knOwing who
					their paRents were. I tell you what, and this may souNd
					really Corny, but the onLy ti<strong>m</strong>e I feel like
					I'm hoMe is wHen I sEe spAce, watch documentaries aboUt
					space, or watch fiLms about sPace<strong>.</strong>..
					ANYTHING TO DO WITH SPACE! S<strong>p</strong>ace is
					probably the thing I love <strong>m</strong>oSt in life
					bEsides life itself, the idEa aNd the <strong>t</strong>
					hoUght of how much there is out there, the vast amoUnt of
					poS<strong>s</strong>ibiLit<strong>i</strong>es there is.
					Where we come from, where I come frOm. It literally brings a
					tear to my eYe when I laY <strong>o</strong>utsidE in the
					pitch <strong>b</strong>lac<strong>k</strong> and focus on
					the reality of life, looking up at the <strong>56</strong>{' '}
					stars knOWing that there could be life orbitIng thEm. <br />
					12 4 15 14 3 18 16 6 11 2 17 10 7 19 1 9 20 5 21 13 8
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
		</Container>
	);
}
