import React from 'react';

import styles from './Amount.module.scss';

import { useAppDispatch, useAppSelector } from 'hooks/redux.hooks';
import { decrement, increment } from '../../redux/slices/counterSlice';

const Amount: React.FC<{ title: string }> = ({ title }) => {
	const count = useAppSelector(state => state.counterSlice.count);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.amount}>
			<div className={styles['amount-title']}>{title}</div>
			<div className={styles.count}>
				<div
					onClick={() => dispatch(decrement())}
					className={styles['count-minus']}
				>
					-
				</div>
				<div className={styles['count-number']}>{count}</div>
				<div
					onClick={() => dispatch(increment())}
					className={styles['count-plus']}
				>
					+
				</div>
			</div>
		</div>
	);
};

export default Amount;
