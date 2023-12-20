import React from 'react';
import { LoginButton } from '../components/auth/LoginButton';
import CategoryCard from '@/components/home/CategoryCard';

export default async function HomeScreen() {

	return (
		<>
			<div className='flex justify-end'>
				<LoginButton />
			</div>
			<div className='flex justify-center'>
				<CategoryCard
					game='pendu'/>
				<CategoryCard 
					game='quiz'/>
				<CategoryCard
					game='memory'/>
			</div>
		</>
	);
}
