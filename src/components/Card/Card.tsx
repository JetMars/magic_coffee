import React from 'react';

import styles from './Card.module.scss';

import { Link } from 'react-router-dom';
import type { ICard } from '../../types/types';

const Card: React.FC<ICard> = ({ id, imageUrl, title }) => {
	return (
		<Link to={`/menu/${id}`} className={styles.card}>
			<div className={styles['card__block']}>
				<img src={imageUrl} alt='coffee' />
			</div>
			<div className={styles['card__title']}>{title}</div>
		</Link>
	);
};

export default Card;
