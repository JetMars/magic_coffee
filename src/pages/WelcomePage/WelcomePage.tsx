import React from 'react';

import { motion } from 'framer-motion';

import { Logo, NextPage } from 'components';

import styles from './WelcomePage.module.scss';

const WelcomePage: React.FC = () => {
	return (
		<motion.section
			className={styles.welcome}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className={styles['logo-wrap']}>
				<Logo />
			</div>
			<h2 className={styles.title}>Feel yourself like a barista!</h2>
			<div className={styles.desc}>Magic coffee on order.</div>
			<div className={styles.dots}>
				<div className={styles['dot-active']}></div>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
			</div>
			<NextPage margin='welcome-page' link='authorization' />
		</motion.section>
	);
};

export default WelcomePage;
