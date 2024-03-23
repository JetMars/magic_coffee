import React from 'react';

import styles from './NotFound.module.scss';

import NotFoundSvg from '../../assets/img/not_found/404.svg?react';
import CoffeeSvg from '../../assets/img/not_found/coffee.svg?react';

interface INotFoundProps {
	color: string;
}

const NotFound: React.FC<INotFoundProps> = ({ color }) => {
	return (
		<div className={styles.error}>
			<div className={styles.block}>
				<h1 className={styles[`${color}`]}>Failed to loading data</h1>
				<CoffeeSvg />
			</div>
			<NotFoundSvg />
		</div>
	);
};

export default NotFound;
