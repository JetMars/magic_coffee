import React from 'react';

import styles from './Card.module.scss';

import { Link } from 'react-router-dom';
import type { ICard } from '../../types/types';

const Card: React.FC<ICard> = ({ imageUrl, title }) => {
	const cardTitle = `${title[0].toUpperCase()}${title.slice(1)}`;
	return (
		<Link to={`/menu/${title}`} className={styles.card}>
			<div className={styles['card__block']}>
				<img src={imageUrl} alt='coffee' />
			</div>
			<div className={styles['card__title']}>{cardTitle}</div>
		</Link>
	);
};

export default Card;
