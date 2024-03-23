import React from 'react';

import { useParams } from 'react-router-dom';

import {
	Amount,
	BackPage,
	CheckedSVG,
	FilterSVG,
	ItemCart,
	NotFound,
	Spinner,
} from 'components';

import Assemblage from 'assets/img/selections/assemblage_arrow.svg?react';
import CupLarge from 'assets/img/selections/cup_large.svg?react';
import CupMedium from 'assets/img/selections/cup_medium.svg?react';
import CupSmall from 'assets/img/selections/cup_small.svg?react';
import Onsite from 'assets/img/selections/onsite.svg?react';
import Takeaway from 'assets/img/selections/takeaway.svg?react';

import { useQuery } from '@tanstack/react-query';
import { getFetchItem } from 'services/fetchData';
import styles from './OrderCard.module.scss';

const OrderCard: React.FC = () => {
	const { id } = useParams();

	const { data, isLoading, isError, isSuccess, error } = useQuery({
		queryKey: ['items', 'id'],
		queryFn: () => getFetchItem(id),
	});

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		console.log(error);
		return <NotFound color='black' />;
	}

	if (isSuccess) {
		return (
			<section className={styles.order}>
				<div className={styles['order-header']}>
					<BackPage />
					<h1 className={styles['order-title']}>Order</h1>
					<ItemCart />
				</div>
				<div className={styles['image-wrap']}>
					<img
						src={`/${data.imageUrl}`}
						alt={data.title}
						className='styles.image'
					/>
				</div>

				<div className={styles['order-selection']}>
					<Amount title={data.title} />

					<div className={styles.liner}></div>

					<div className={styles.ristretto}>
						<div className={styles['ristretto-title']}>Ristretto</div>
						<div className={styles['ristretto-choice']}>
							<div className={styles['ristretto-block']}>One</div>
							<div className={styles['ristretto-block']}>Two</div>
						</div>
					</div>

					<div className={styles.liner}></div>

					<div className={styles.cup}>
						<div className={styles['cup-title']}>Onsite / Takeaway</div>
						<div className={styles['cup-choice']}>
							<div className={styles['cup-onside']}>
								<Onsite />
							</div>
							<div className={styles['cup-takeaway']}>
								<Takeaway />
							</div>
						</div>
					</div>

					<div className={styles.liner}></div>

					<div className={styles.size}>
						<div className={styles['size-title']}>Volume, ml</div>
						<div className={styles['size-items']}>
							<div className={styles['size-item']}>
								<CupSmall />
								<div className={styles['item-ml']}>250</div>
							</div>
							<div className={styles['size-item']}>
								<CupMedium />
								<div className={styles['item-ml']}>350</div>
							</div>
							<div
								onClick={() => console.log('hello')}
								className={styles['size-item']}
							>
								<CupLarge />
								<div className={styles['item-ml']}>450</div>
							</div>
						</div>
					</div>
					<div className={styles.liner}></div>

					<div className={styles.preparation}>
						<div className={styles['preparation-title']}>
							Prepare by a certain time today?
						</div>
						<CheckedSVG />
					</div>

					<div className={styles['time-wrapper']}>
						<div className={styles.time}>
							{/* <div className={styles['time-wrap']}> */}
							<input className={styles.input} type='number' />
							<div className={styles.sep}> : </div>
							<input className={styles.input} type='number' />
							{/* </div> */}
						</div>
					</div>

					<div className={styles.assemblage}>
						<div className={styles['assemblage-wrap']}>
							<FilterSVG />
							<div className={styles['assemblage-title']}>
								Coffee lover assemblage
							</div>
						</div>
						<Assemblage />
					</div>

					<div className={styles.price}>
						<div className={styles['price-title']}>Total Amount</div>
						<div className={styles['price-total']}>BYN 3.00</div>
					</div>

					<button className={styles.button}>Next</button>
				</div>
			</section>
		);
	}
};

export default OrderCard;
