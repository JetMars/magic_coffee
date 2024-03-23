import { ICard } from 'types/types';

const BASE = 'https://6446573fee791e1e29fc6cd1.mockapi.io/data';

export async function getFetchData(): Promise<ICard[]> {
	const res = await fetch(`${BASE}`);

	if (!res.ok) throw new Error('Failed to fetch data');

	return await res.json();
}

export async function getFetchItem(id: string | undefined): Promise<ICard> {
	const res = await fetch(`${BASE}/${id}`);

	if (!res.ok || id === undefined) throw new Error('Failed to fetch data');

	return await res.json();
}
