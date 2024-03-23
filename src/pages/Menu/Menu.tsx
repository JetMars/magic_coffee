import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Card, ItemCart, NotFound, Spinner } from 'components';

import { getFetchData } from 'services/fetchData';

import Profile from 'assets/img/menu/profile.svg?react';
import List from 'assets/img/select/list.svg?react';
import Present from 'assets/img/select/present.svg?react';
import Shop from 'assets/img/select/shop.svg?react';

import styles from './Menu.module.scss';

const Menu: React.FC = () => {
	const { data, isLoading, isError, isSuccess, error } = useQuery({
		queryKey: ['items'],
		queryFn: getFetchData,
	});

	let renderItems;

	if (isError) {
		renderItems = <NotFound color='white' />;
		console.log(error);
	}

	if (isLoading) {
		renderItems = <Spinner />;
	}

	if (isSuccess) {
		renderItems = data.map(item => {
			return <Card key={item.id} {...item} />;
		});
	}

	return (
		<>
			<div className={styles.menu}>
				<div className={styles['welcome-wrap']}>
					<div className={styles['welcome-massage']}>Welcome!</div>
					<div className={styles['welcome-name']}>Alex</div>
				</div>
				<div className={styles['nav']}>
					<button className={styles['nav-cart']}>
						<ItemCart />
					</button>
					<button className={styles['nav-profile']}>
						<Profile />
					</button>
				</div>
			</div>

			<div className={styles.select}>
				<div className={styles['select-title']}>Select your coffee</div>

				<div className={styles['select-wrap']}>{renderItems}</div>

				<div className={styles['select__nav']}>
					<ul className={styles['select__nav-lists']}>
						<li className={styles['select__nav-list']}>
							<a href='#'>
								<Shop />
							</a>
						</li>
						<li className={styles['select__nav-list']}>
							<a href='#'>
								<Present />
							</a>
						</li>
						<li className={styles['select__nav-list']}>
							<a href='#'>
								<List />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Menu;
