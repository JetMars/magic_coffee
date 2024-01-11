import React from 'react';

import { Description, Input, NextPage, PasswordInput, Title } from 'components';
import BackPage from 'components/BackPage/BackPage';
import styles from './RegistrationPage.module.scss';

interface Input {
	name: string;
	src: string;
	placeholder: string;
}

const inputs: Input[] = [
	{
		name: 'text',
		src: '/src/assets/img/svg/registration/profile.svg',
		placeholder: 'Create an account here',
	},
	{
		name: 'tel',
		src: '/src/assets/img/svg/registration/phone.svg',
		placeholder: 'Mobile Number',
	},
	{
		name: 'email',
		src: '/src/assets/img/svg/registration/message.svg',
		placeholder: 'Email address',
	},
];

const RegistrationPage: React.FC = () => {
	return (
		<div className={styles.registration}>
			<BackPage />
			<Title title='Sign up' />
			<Description desc='Create on account here' />

			<form className={styles.form} action='#'>
				{inputs.map(({ name, src, placeholder }, i) => {
					return (
						<div key={i} className={styles['form-wrap']}>
							<Input {...{ name, src, placeholder }} />
						</div>
					);
				})}
				<div className={styles['form-wrap']}>
					<PasswordInput />
				</div>
			</form>
			<div className={styles.agreement}>
				<a href='/#'>By signing up you agree with our Terms of Use</a>
			</div>
			<NextPage margin='registration-page' link='welcome' />
			<div className={styles['sign-up']}>
				Already a member?
				<a href=''> Sign in</a>
			</div>
		</div>
	);
};

export default RegistrationPage;
