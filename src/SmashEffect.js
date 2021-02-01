import React, { useContext } from 'react';
import { SFXContext } from './context';
import { Effect } from 'windups';

export default function SmashEffect() {
	const smash = useContext(SFXContext);
	return <Effect fn={smash} />;
}
