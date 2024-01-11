import { Logo } from 'components/index';
import React from 'react';

import styles from './StartupScreenPage.module.scss';

const StartupScreenPage: React.FC = () => {
	return (
		<div className={styles.startup}>
			<Logo />
		</div>
	);
};

export default StartupScreenPage;
