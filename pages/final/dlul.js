import { Button, Container } from '@material-ui/core';
import { useState, useContext } from 'react';
import { OnChar, Pause, Pace } from 'windups';
import TextCard from '../../src/clues/TextCard';
import Dialog from '../../src/Dialog';
import { SFXContext } from '../../src/context';

const btoa = input_string => {
	return Buffer.from(input_string).toString('base64');
};

export default function Dlul() {
	const correctCode = btoa('cheese bread');
	const [codeValue, setCodeValue] = useState('');
	const correctClue1 = btoa('orion');
	const [clue1Value, setClue1Value] = useState(''); // 000 is a placeholder, i'll calc it once we have it
	const [clue2Value, setClue2Value] = useState('');
	const correctClue2 = btoa('hyperspace activate');
	const smash = useContext(SFXContext);
	return (
		<Dialog>
			<TextCard>
				Your engine is primed, your passengers are healthy, your ship’s
				navigation has been set, and you’ve scored a date with an alien
				cutie {'<3'}
			</TextCard>
			<TextCard
				needsInput
				answerCallback={input_string => setCodeValue(input_string)}
				canProceed={codeValue === correctCode}
			>
				Put your new access codes in, with the pilot team first and the
				medic team second:
			</TextCard>
			<TextCard
				needsInput
				answerCallback={input_string => setClue1Value(input_string)}
				canProceed={correctClue1 === clue1Value}
			>
				Your crew back at WASA headquarters on earth have been hard at
				work, figuring out a way to open the gateway to hyperspace, but
				they’re still missing one key piece of information to complete
				their research. This information is contained within one of the
				files that you had received earlier from our ship’s database.
				Your final task on this ship is to upload the right file, so I
				can send it to WASA headquarters and you can finally reach your
				goal/destination.
				<Pause ms={1000} />
				<br />
				Maybe you should take a look at the contents of each file in
				order to decide which answer to choose! Before I forget, I
				should mention that the correct file’s code is related to outer
				space… Good luck!
			</TextCard>
			<TextCard>Nice.</TextCard>
			<TextCard
				needsInput
				answerCallback={input_string => setClue2Value(input_string)}
				canProceed={correctClue2 === clue2Value}
			>
				Good job, the correct file has been uploaded and it has been
				transmitted to WASA. There is no more use for the remaining
				files, so you don’t need to worry about them anymore. You have
				to find the right command to get your engines firing before you
				can enter hyperspace. In the following clue you’ll find the
				remaining letters form a two-word keyphrase that will ignite the
				engine! You're almost there! <br />
				<Button
					href='https://media.discordapp.net/attachments/506257844287569920/804111753599254609/unknown.png?width=855&height=702'
					target='_blank'
				>
					i can taste it!
				</Button>
			</TextCard>
			<TextCard>
				Oh! <Pause ms={1000} /> Looks like headquarters is ready, so get
				ready to enter hyperspace in{' '}
				<Pace getPace={char => (char === ' ' ? 1000 : 40)}>
					Five! <br />
					Four! <br />
					Three! <br />
					Two! <br />
					One! <br />
				</Pace>
				<OnChar fn={smash}>{'TO INFINITY, AND BEYOND!!!'}</OnChar>
				<Pause ms={500} />
			</TextCard>
			<TextCard>
				Congratulations everyone! Thanks to your hard work you’ve
				reached hyperspace and your mission is now complete. Stay tuned
				for future missions, brave crew members...
			</TextCard>
			<TextCard>
				<Pace getPace={() => 100}>The End.</Pace> <br />
				Make sure to fill out the completion form:
				<br />
				<Button
					href='https://forms.gle/Zu7qqXHbUqyaK4Mg7'
					target='_blank'
				>
					thanks for playing:)
				</Button>
			</TextCard>
		</Dialog>
	);
}
