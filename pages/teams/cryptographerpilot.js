import {
	Button,
	Container,
	Grid,
	makeStyles,
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

export default function CryptographerPilot() {
	const correctCode = btoa('lettuce tomato');
	const [codeValue, setCodeValue] = useState('');
	const correctClue1 = btoa('nebula');
	const [clue1Value, setClue1Value] = useState(''); // 000 is a placeholder, i'll calc it once we have it
	const [clue2Value, setClue2Value] = useState('');
	const correctClue2 = btoa('blue');
	const [clue3Value, setClue3Value] = useState('');
	const correctClue3 = btoa('194966');
	const smash = useContext(SFXContext);
	return (
		<Container maxWidth='md'>
			<Dialog>
				<TextCard>
					Phew, a group of friendly aliens think your pilot is hot,
					and decides to try to help them. I dont really understand
					them, but maybe you two could figure it out?
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setCodeValue(input_string)}
					canProceed={codeValue === correctCode}
				>
					Put in your access codes so I can give you the messages.
					Here's what it might look like: "pointer carrot", where
					pointer is the cryptographer code and carrot is the pilot
					code. You're gonna have to work together:)
				</TextCard>
				<TextCard>
					Here's what they sent, can you figure it out? <br />
					<Pause ms={500} />
					<Button
						href='https://docs.google.com/document/d/11L7afYXDCctLolKY-tFaW_lRiTxs76d8nvWtwQ6p8Mk/edit?usp=sharing'
						target='_blank'
					>
						kinda cute ngl
					</Button>
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue1Value(input_string)}
					canProceed={correctClue1 === clue1Value}
				>
					The first one's to the pilot, what do you think it means?
				</TextCard>
				<TextCard>Nice.</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue2Value(input_string)}
					canProceed={correctClue2 === clue2Value}
				>
					The next couple seem to be connected somehow... what does
					this one mean?
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue3Value(input_string)}
					canProceed={correctClue3 === clue3Value}
				>
					What a strange communication style!
				</TextCard>
				<TextCard>
					Nice. We were able to get things sorted out. What a great
					cryptographer and pilot we have! Best go{' '}
					<Button component={Link} href='../final/dlul'>
						meet up with your teammates now
					</Button>
					, your code is cheese.
				</TextCard>
			</Dialog>
		</Container>
	);
}
