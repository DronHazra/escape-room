import React, { useContext } from 'react';
import { SFXContext } from '../pages/index';
import { Effect } from 'windups';

export default function SmashEffect() {
	const smash = useContext(SFXContext);
	return <Effect fn={smash} />;
}
