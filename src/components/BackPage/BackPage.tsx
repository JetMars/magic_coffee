import React from 'react';

import { useNavigate } from 'react-router-dom';

import arrow from 'assets/img/arrows/arrow-left.svg';

import styles from './BackPage.module.scss';

const BackPage: React.FC = () => {
	const navigate = useNavigate();
	const getPreviousPage = (): void => {
		navigate(-1);
	};

	return (
		<a onClick={getPreviousPage} className={styles.btn}>
			<img className={styles['arrow-back']} src={arrow} alt='arrow-back' />
		</a>
	);
};

export default BackPage;
