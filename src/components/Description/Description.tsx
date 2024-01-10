import React from 'react';

import styles from './Description.module.scss';

const Description: React.FC<{ desc: string }> = ({ desc }) => {
	return <h2 className={styles.description}>{desc}</h2>;
};

export default Description;
