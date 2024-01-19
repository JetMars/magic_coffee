import React from 'react';

import Cart from '../../assets/img/menu/cart.svg?react';
import Profile from '../../assets/img/menu/profile.svg?react';
import List from '../../assets/img/select/list.svg?react';
import Present from '../../assets/img/select/present.svg?react';
import Shop from '../../assets/img/select/shop.svg?react';

import cappuccino from 'assets/img/card/cappuccino.png';
import coffee from 'assets/img/card/coffee.png';

import styles from './Menu.module.scss';

const Menu: React.FC = () => {
	return (
		<>
			<div className={styles.menu}>
				<div className={styles['welcome-wrap']}>
					<div className={styles['welcome-massage']}>Welcome!</div>
					<div className={styles['welcome-name']}>Alex</div>
				</div>
				<div className={styles['nav']}>
					<button className={styles['nav-cart']}>
						<Cart />
					</button>
					<button className={styles['nav-profile']}>
						<Profile />
					</button>
				</div>
			</div>

			<div className={styles.select}>
				<div className={styles['select-title']}>Select your coffee</div>

				<div className={styles['select-wrap']}>
					<div className={styles.card}>
						<div className={styles['card-block']}>
							<img src={coffee} alt='coffee' />
						</div>
						<div className={styles['card-title']}>Americano</div>
					</div>

					<div className={styles.card}>
						<div className={styles['card-block']}>
							<img src={cappuccino} alt='cappuccino' />
						</div>
						<div className={styles['card-title']}>Cappuccino</div>
					</div>

					<div className={styles.card}>
						<div className={styles['card-block']}>
							<img src={coffee} alt='coffee' />
						</div>
						<div className={styles['card-title']}>Americano</div>
					</div>

					<div className={styles.card}>
						<div className={styles['card-block']}>
							<img src={coffee} alt='coffee' />
						</div>
						<div className={styles['card-title']}>Americano</div>
					</div>
				</div>

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
