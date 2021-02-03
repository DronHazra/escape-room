import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { useState, useContext } from 'react';
import { OnChar, Pause, Pace } from 'windups';
import TextCard from '../src/clues/TextCard';
import { DialogContext } from '../src/context';
import Dialog from '../src/Dialog';
import Header from '../src/Header';
import SmashEffect from '../src/SmashEffect';
import { SFXContext } from '../src/context';
import { Link } from 'next/link';

const btoa = input_string => {
	return Buffer.from(input_string).toString('base64');
};

const useStyles = makeStyles({
	image: {
		objectFit: 'scale-down',
	},
});

export default function Index() {
	const correctCode = Buffer.from('yum').toString('base64');
	const [paymentCode, setPayCode] = useState(''); // 000 is a placeholder, i'll calc it once we have it
	const correctCard = Buffer.from('3468QA').toString('base64');
	const [cardInput, setCardInput] = useState('');
	const smash = useContext(SFXContext);
	return (
		<Container maxWidth='md'>
			<Dialog>
				<Header />
				<TextCard
					needsInput={true}
					answerCallback={input_string => {
						setPayCode(input_string);
					}}
					canProceed={paymentCode === correctCode}
				>
					First, have you paid for this escape room? Enter your code
					here:
				</TextCard>
				<TextCard needsInput={false}>
					Hey! I’m your ship’s computer! My name is Program 5000, but
					you can call me Rammy. I’ll help you throughout this
					journey. Whenever you are stumped, I will be here to give
					you hints, you just need to ask by typing the key "~".{' '}
					<br />
					<Pause ms={500} />
					<SmashEffect />
					HOWEVER! Bear in mind that each time you ask for a hint, 3
					minutes will be added to your total time.
				</TextCard>
				<TextCard
					needsInput={true}
					answerCallback={input_string => setCardInput(input_string)}
					canProceed={cardInput === correctCard}
				>
					Now... we’re set to blast off soon, but you seem to be
					missing the ignition key, so you’ll need to manually input
					the ignition key. I noticed some cards were left behind,
					<br />
					<Pause ms={200} />
					<Button
						href='https://drive.google.com/file/d/1sMtxXtTL6rXjp9wg8YXAikFW9AN2Unou/view?usp=sharing'
						target='_blank'
						variant='filled'
					>
						cards?
					</Button>
					<Pause ms={200} />
					<br />
					maybe they would be helpful? Make sure you know their values
					though, I always seem to mix those up.
				</TextCard>
				<TextCard needsInput={false}>
					Congratulations! <Pause ms={300} /> The ship will take off
					in ... <br />
					<Pace getPace={char => (char === ' ' ? 1000 : 40)}>
						Five! <br />
						Four! <br />
						Three! <br />
						Two! <br />
						One! <br />
					</Pace>
					<OnChar fn={smash}>{'BLASTOFF!!!'}</OnChar>
					<Pause ms={500} />
				</TextCard>
				<TextCard needsInput={false}>
					Alright! Now that you've successfully taken off, there are
					some files you should download:
					<Pause ms={500} />
					<Button
						href='https://drive.google.com/drive/folders/1TtWtfvKzZ1soRKgW755nj4Qn73zuXl4C?usp=sharing'
						target='_blank'
					>
						Very Important Files
					</Button>
					<Pause ms={500} /> <br />
					You don't need these files at the moment, but make sure you
					don't forget about them! Who knows, you may need them
					later...
				</TextCard>
				<TextCard>
					<SmashEffect />
					<Pause ms={500} />
					Wait. Mr. Pilot,{' '}
					<Pace getPace={() => 100}>I don’t feel so good.</Pace> My
					sensors indicate we hit an asteroid. You’ll need to fix the
					engine in order to get back in motion. It's time for you to
					speacialize! <br />
					<Pause ms={500} />
					<Link href='/roles/medic'>Medic</Link> <br />
					<Pause ms={500} />
					<Link href='/roles/cryptographer'>Cryptographer</Link>{' '}
					<br />
					<Pause ms={500} />
					<Link href='/roles/Pilot'>Pilot</Link> <br />
					<Pause ms={500} />
					<Link href='/roles/Technician'>Technician</Link>
				</TextCard>
			</Dialog>
		</Container>
	);
}
