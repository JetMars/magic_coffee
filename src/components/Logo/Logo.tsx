import React from 'react';

import logo from 'assets/img/logo.png';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			<div className={styles.img}>
				<img className={styles[`img_logo`]} src={logo} alt='Logo' />
			</div>
			<h1 className={styles.title}>Magic Coffee</h1>
		</div>
	);
};

export default Logo;
