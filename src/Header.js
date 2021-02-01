import { useContext } from 'react';
import { WindupChildren, Effect, Pause } from 'windups';
// import { useSFXContext } from './context';
import { Typography } from '@material-ui/core';
import SmashEffect from './SmashEffect';

export default function Header() {
	return (
		<Typography variant='h2' align='center'>
			<WindupChildren>
				{'Welcome to '}
				<Pause ms={500} />
				{'... '}
				<Pause ms={500} />
				<SmashEffect />
				<br />
				{'Space Escape!'}
			</WindupChildren>
		</Typography>
	);
}
