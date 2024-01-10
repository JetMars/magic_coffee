import React from 'react';

import styles from './Input.module.scss';

const Title: React.FC<{ name: string; src: string; placeholder: string }> = ({
	name,
	src,
	placeholder,
}) => {
	return (
		<>
			<div className={styles['form-image']}>
				<img src={src} alt={name} />
			</div>
			<input type={name} placeholder={placeholder} />
		</>
	);
};

export default Title;
