import React from 'react';
import { LoginButton } from '../components/auth/LoginButton';
import CategoryCard from '@/components/home/CategoryCard';

export default async function HomeScreen() {

	return (
		<>
			<div className='flex justify-end'>
				<LoginButton />
			</div>
			<div>
				<CategoryCard 
					game='pendu'/>
			</div>
		</>
	);
}
