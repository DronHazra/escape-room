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

export default function Medic() {
	const correctCode = btoa('temperature, exercise, soup, milk, home, apple');
	const [clue1Value, setClue1Value] = useState(''); // 000 is a placeholder, i'll calc it once we have it
	const [clue2Value, setClue2Value] = useState('');
	const correctClue2 = btoa('cupcake, scissors, sleep');
	const [clue3Value, setClue3Value] = useState('');
	const correctClue3 = btoa('focus on the horizon');
	const smash = useContext(SFXContext);
	return (
		<>
			<Typography variant='h2'>Medic</Typography>
			<Dialog>
				<TextCard>
					Hi there! Rammy here again. I take it that you’re the medic
					of this crew?
				</TextCard>
				<TextCard>
					Well, you never know when an emergency will strike, so it’s
					always best to brush up on your skills! And boy do we have
					just the right test for you.
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => {
						setClue1Value(input_string);
					}}
					canProceed={clue1Value === correctCode}
				>
					When travelling in space, the environment and circumstances
					are definitely different from those on Earth, so as the
					medic, it’s important to ensure that everyone onboard stays
					healthy. Here are some scenarios where patients have logged
					specific symptoms that they’ve been experiencing recently:{' '}
					<br />
					<Pause ms={500} />
					<Button
						href='https://drive.google.com/file/d/1gLWMm7gyzjdaaS3T5Z8-GobHkJV4vVgJ/view?usp=sharing'
						target='_blank'
					>
						Patient Logs
					</Button>
					<Pause ms={500} />
					<br />
					Correctly diagnose their situation and prescribe the best
					treatment for them. List the treatments{' '}
					<Pace getPace={() => 100}>
						<strong>(don't forget the commas!!) </strong>
					</Pace>
					in the correct order and that will be the key that lets you
					move on:) <br />
					<Pace getPace={() => 500}>...</Pace>
					<br />
					Right! Almost forgot. Here are some manuals to help you out:{' '}
					<br />
					<Pause ms={500} />
					<Button
						href='https://drive.google.com/drive/folders/1ym59YSDQISgzNxb68ojw6lEvuuWJ_IuK?usp=sharing'
						target='_blank'
					>
						Very Helpful Manuals. (For Free)
					</Button>
				</TextCard>
				<TextCard>
					Nice! Everyone should be healthy in no time. Let’s move onto
					the next part of our practice.
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue2Value(input_string)}
					canProceed={clue2Value === correctClue2}
				>
					X-Rays are a major part of a medic’s work life — how else
					would we get those snazzy pictures of our bones? Here are
					some photos that have some clues to help you move on, but
					you might need to make some adjustments to actually{' '}
					<strong>see</strong> what’s going on here. <br />
					<Pace getPace={() => 500}>...</Pace>
					<br />
					I forgot the manuals again! My memory must need repairing:)
					Here they are:
					<br />
					<Pause ms={500} />
					<Button
						href='https://drive.google.com/drive/folders/1m-kKMe6bYkgHFhHCq6Rn3pbo5KYBKKYl?usp=sharing'
						target='_blank'
					>
						Some more (totally free) manuals.
					</Button>
					<Pause ms={500} />
				</TextCard>
				<TextCard>
					Good, good. You strike me as a pretty skillful medic! We’re
					glad to have you onboard. There’s just one more evaluation
					we need to complete in order for you to be deemed the
					perfect medic:)
				</TextCard>
				<TextCard>
					Here’s another puzzle to test your skills as a medic — it
					never hurts to practice a little bit more. This time, we’re
					going to test your knowledge about the human body in space
					and then see if your visual motor skills are up to
					standards.
				</TextCard>
				<TextCard>
					First, answer these multiple choice questions and their
					answers will help you solve the visual puzzles accordingly.
					Feel free to use the internet as your all-knowing friend.
				</TextCard>
				<TextCard>
					Question 1! A major health risk for astronauts in space is
					the exposure to: <br />
					Red. High-Energy Radiation <br />
					Blue. Aliens <br />
					Green. Mercury <br />
					Yellow. Zero Gravity <br />
				</TextCard>
				<TextCard>
					Question 2! In space, astronauts lose approximately __% to
					__% of their bone mass each month: <br />
					Red. 8% - 10%
					<br />
					Blue. 1% - 2%
					<br />
					Green. 0.5% - 0.75%
					<br />
					Yellow. 20% - 25%
					<br />
				</TextCard>
				<TextCard>
					Question 3! Puffy face syndrome (in space) occurs because?{' '}
					<br />
					Red. Astronauts tend to miss their families and then cry:(
					<br />
					Blue. The pores on astronauts’ skins open up due to zero
					gravity
					<br />
					Green. Space food lacks nutrition and affects the way their
					bodies utilize water
					<br />
					Yellow. Fluids travel upwards to the head due to zero gravity
					<br />
				</TextCard>
				<TextCard>
					Question 4! The first person to eat in space was?
					<br />
					Red. John Glenn
					<br />
					Blue. Yuri A. Gagarin
					<br />
					Green. Niel Armstrong
					<br />
					Yellow. Valentina V. Tereshkova
					<br />
				</TextCard>
				<TextCard
					needsInput
					answerCallback={input_string => setClue3Value(input_string)}
					canProceed={clue3Value === correctClue3}
				>
					<strong>
						The key to complete this task is to answer this
						question:
					</strong>{' '}
					<br />
					<Pace getPace={() => 100}>
						What is the first thing you can do to prevent [redacted]
						?
					</Pace>
					This site might help you find an answer, but some of the
					characters went missing:( I wonder if there’s anything we
					can do to figure that out... <br />
					https://mayocl.in/?it???5 <br />
					See you when you're finished:) <br />
					<Pace getPace={() => 500}>...</Pace>
					<br />
					This is getting old fast!
					<br />
					<Pause ms={500} />
					<Button
						href='https://drive.google.com/drive/folders/1WUqarM5JHjEPF36rwTNiMdV1fRnzYgi7?usp=sharing'
						target='_blank'
					>
						We have a lot of manuals. Note that the colours of the answers are very important.
					</Button>
					<Pause ms={500} />
				</TextCard>
				<TextCard>
					Amazing! You ARE one of the best medics I’ve come across so
					far — good job :D Now just hang tight and wait until the
					other crewmates are done with their own tasks, unless
					they’re waiting for you, and if that’s the case then{' '}
					<OnChar fn={smash}>HURRY UP!!</OnChar>
				</TextCard>
				<TextCard>
					Do I hear something? Better go check it out.{' '}
					<strong>Your access code is mayonnaise.</strong>
					<br />
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
