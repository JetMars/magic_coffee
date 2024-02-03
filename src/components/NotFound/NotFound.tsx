import React from 'react';

import styles from './NotFound.module.scss';

import NotFoundSvg from '../../assets/img/not_found/404.svg?react';
import CoffeeSvg from '../../assets/img/not_found/coffee.svg?react';

const NotFound: React.FC = () => {
	return (
		<div className={styles.error}>
			<div className={styles.block}>
				<h1 className={styles.title}>Failed to loading data</h1>
				<CoffeeSvg />
			</div>
			<NotFoundSvg />
		</div>
	);
};

export default NotFound;
