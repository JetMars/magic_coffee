import { Logo } from 'components/index';
import React from 'react';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import styles from './StartupScreenPage.module.scss';

const StartupScreenPage: React.FC = () => {
	const navigate = useNavigate();
	React.useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/menu');
		}, 3000);

		return () => clearTimeout(timer);
	});

	return (
		<motion.div
			className={styles.startup}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Logo />
		</motion.div>
	);
};

export default StartupScreenPage;
