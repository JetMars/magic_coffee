import React from 'react';

import {
	BackPage,
	Description,
	Input,
	NextPage,
	PasswordInput,
	Title,
} from 'components';

import styles from './AuthorizationPage.module.scss';

const AuthorizationPage: React.FC = () => {
	return (
		<section className={styles.authorization}>
			<BackPage />
			<Title title='Sing in' />
			<Description desc='Welcome back' />

			<form className={styles.form} action='#'>
				<div className={styles['form-wrap']}>
					<Input
						{...{
							name: 'email',
							src: '/src/assets/img/svg/registration/message.svg',
							placeholder: 'Email address',
						}}
					/>
				</div>
				<div className={styles['form-wrap']}>
					<PasswordInput />
				</div>
			</form>
			<div className={styles['password-restore']}>
				<a href='#' className={styles['restore-link']}>
					Forgot Password?
				</a>
			</div>
			<NextPage margin='authorization-page' link='registration' />
			<div className={styles['sign-up']}>
				New member?
				<a href=''> Sign up</a>
			</div>
		</section>
	);
};

export default AuthorizationPage;
