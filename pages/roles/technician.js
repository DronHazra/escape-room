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

export default function Technician() {
	const correctClue1 = btoa('galactic');
	const [clue1Value, setClue1Value] = useState(''); // 000 is a placeholder, i'll calc it once we have it
	const [clue2Value, setClue2Value] = useState('');
	const correctClue2 = btoa('bed, cupcake, scissors');
	const [clue3Value, setClue3Value] = useState('');
	const correctClue3 = btoa('Focus on the horizon');
	const smash = useContext(SFXContext);
	return (
		<>
			<Typography variant='h2'>Technician</Typography>
			<Dialog>
				<TextCard>
					Hi there! Rammy here again. I take it that you’re the
					technician of this crew?
				</TextCard>
				<TextCard>
					You're going to have to deal with a bunch of unexpected
					situations. <SmashEffect /> Here's one right now!
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue1Value(input_string)}
					canProceed={correctClue1 === clue1Value}
				>
					Our manuals have been corrupted! Our lives hang in the
					balance. Find the missing words, take the first letters and
					unscramble them. <br />
					<Pause ms={1000} />
					According to all known 52t0hewiohoe of 09238f07h8, there is
					no way that a bee should be able to fly. Its wings are too
					small to fq-8027 its fat little body off the ground. The
					bee, of qf89arpw, flies p9nwqa8e, because bees don't
					qn80rg4v what humans qvnr98w is qfn8r.
				</TextCard>
				<TextCard>
					Congratulations! You know your letters. You're almost there,
					but we need you to complete one more task.
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue2Value(input_string)}
					canProceed={correctClue2 === clue2Value}
				>
					You have just noticed an uptick in microwave radiation. Try
					to decipher where the radiation is coming from. <br />
					<Pace getPace={() => 500}>...</Pace> <br />
					Right! You need the radiation logs. Here they are: <br />
					<Button
						href='https://drive.google.com/drive/folders/1Gc-3c5oVO8ZH3oKq0NdUKmGTwxVQ78wM?usp=sharing'
						target='_blank'
					>
						Radiation Logs (banger!)
					</Button>
				</TextCard>
				<TextCard>
					Do I hear something? Better go check it out. Your access
					code is mustard. <br />
					<Pause ms={500} />
					<Button component={Link} href='../teams/medictechnician'>
						uh oh.
					</Button>
					<Pause ms={500} />
				</TextCard>
			</Dialog>
		</>
	);
}
