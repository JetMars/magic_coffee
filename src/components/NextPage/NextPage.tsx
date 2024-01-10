import React from 'react';

import { Link } from 'react-router-dom';

import arrow from 'assets/img/arrows/arrow-next.svg';

import styles from './NextPage.module.scss';

const NextPage: React.FC<{ margin: string; link: string }> = ({
	margin,
	link,
}) => {
	return (
		<Link to={`/${link}`} className={`${styles.btn} ${styles[margin]}`}>
			<img className={styles['arrow-next']} src={arrow} alt='arrow-next' />
		</Link>
	);
};

export default NextPage;
