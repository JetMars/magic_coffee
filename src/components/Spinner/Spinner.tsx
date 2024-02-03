import React from 'react';

import { FadeLoader } from 'react-spinners';

import styles from './Spinner.module.scss';

const Spinner: React.FC = () => {
	return (
		<div className={styles.spinner}>
			<FadeLoader
				height={40}
				width={7}
				radius={7}
				margin={15}
				color='#36d7b7'
			/>

			<div className={styles.title}>Loading...</div>
		</div>
	);
};

export default Spinner;
