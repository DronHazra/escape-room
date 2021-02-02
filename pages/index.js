import { Button, Container, Grid } from '@material-ui/core';
import { useState, useContext } from 'react';
import { Pause } from 'windups';
import TextCard from '../src/clues/TextCard';
import { DialogContext } from '../src/context';
import Dialog from '../src/Dialog';
import Header from '../src/Header';

const btoa = input_string => {
	return Buffer.from(input_string).toString('base64');
};

export default function Index() {
	const { blockIndex } = useContext(DialogContext);
	const { currentBlock } = useContext(DialogContext);
	const correctCode = Buffer.from('yum').toString('base64');
	const [paymentCode, setPayCode] = useState(''); // 000 is a placeholder, i'll calc it once we have it

	return (
		<Container maxWidth='md'>
			<Dialog>
				<Header />
				<TextCard
					needsInput={true}
					answerCallback={input_string => {
						setPayCode(btoa(input_string));
					}}
					canProceed={paymentCode === correctCode}
				>
					First, have you paid for this escape room? Enter your code
					here:
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
			</Dialog>
		</Container>
	);
}
