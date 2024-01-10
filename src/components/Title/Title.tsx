import React from 'react';

import styles from './Title.module.scss';

const Title: React.FC<{ title: string }> = ({ title }) => {
	return <h1 className={styles.title}>{title}</h1>;
};

export default Title;
