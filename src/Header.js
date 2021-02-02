import { useContext } from 'react';
import { WindupChildren, Pause } from 'windups';
// import { useSFXContext } from './context';
import { Typography } from '@material-ui/core';
import SmashEffect from './SmashEffect';
import { DialogChildContext } from './Dialog';

export default function Header() {
	const { isActive, proceed } = useContext(DialogChildContext);
	return (
		<div>
			<Typography variant='h2' align='center'>
				<WindupChildren onFinished={() => setTimeout(proceed, 1000)}>
					{'Welcome to '}
					<Pause ms={500} />
					{'... '}
					<Pause ms={500} />
					<SmashEffect />
					<br />
					{'SPACE ESCAPE!'}
				</WindupChildren>
			</Typography>
		</div>
	);
}
