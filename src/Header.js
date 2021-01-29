import { useContext } from 'react';
import { WindupChildren, Effect, Pause } from 'windups';
import { SFXContext } from '../pages';
import { Typography } from '@material-ui/core';
import SmashEffect from './SmashEffect';

export default function Header() {
	const smash = useContext(SFXContext);
	return (
		<Typography variant='h2'>
			<WindupChildren>
				{'Welcome to '}
				<Pause ms={500} />
				{'... '}
				<Pause ms={500} />
				<SmashEffect />
				{'Space Escape!'}
			</WindupChildren>
		</Typography>
	);
}
