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

export default function MedicTechnician() {
	const correctCode = btoa('mayonnaise mustard');
	const [codeValue, setCodeValue] = useState('');
	const correctClue1 = btoa(
		'coupler, gas mask, rubber tape, sealant, welder'
	);
	const [clue1Value, setClue1Value] = useState(''); // 000 is a placeholder, i'll calc it once we have it
	const [clue2Value, setClue2Value] = useState('');
	const correctClue2 = btoa('bed, cupcake, scissors');
	const [clue3Value, setClue3Value] = useState('');
	const correctClue3 = btoa('Focus on the horizon');
	const smash = useContext(SFXContext);
	return (
		<Dialog>
			<TextCard>
				Uh oh… do you smell that? This doesn’t feel good at all...
			</TextCard>
			<TextCard>
				I don’t think it’s because someone forgot to flush the toilet —
				this smells like a gas leak! Quick! Check the pipes on this
				spaceship, I think some of them are broken and you’ll need to
				fix them ASAP. If we don’t do something soon, the lives of your
				crewmates may be in danger...
			</TextCard>
			<TextCard
				needsInput
				answerCallback={input_string => setCodeValue(input_string)}
				canProceed={codeValue === correctCode}
			>
				Medic! Technician! Put in your access codes so I can give you
				the information. Here's what it might look like: "pointer
				carrot", where pointer is the medic code and carrot is the
				technician code. You're gonna have to work together.
			</TextCard>
			<TextCard
				needsInput
				answerCallback={i => setClue1Value(i)}
				canProceed={clue1Value === correctClue1}
			>
				Examine the pipes to see where the major gas leak sites are,
				they should be marked with a blob of colour. Hurry! <br />
				<Pace getPace={() => 500}>...</Pace>
				<SmashEffect />
				Oh no, I haven't sent the files to you! Here they are:
				<br />
				<Button
					href='https://drive.google.com/drive/folders/1zxfbMH3sjbqndVJ9YvHLpcmN4h157U1v?usp=sharing'
					target='_blank'
				>
					Gas Leak Analysis
				</Button>
			</TextCard>
			<TextCard>
				Phew! That was a close one, good thing we acted quickly before
				it got worse. <br />
				<Button component={Link} href='../final/dlul'>
					Go meet up with your other teammates! Your access codes are
					now bread.
				</Button>
			</TextCard>
		</Dialog>
	);
}
