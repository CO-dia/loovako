import Image from 'next/image';
import React from 'react';
import PlayButton from './PlayButton';
import { useCategoryCard } from '@/hooks/home/useCategoryCard';

interface CategoryCardProps {
  game: string;
}

const CategoryCard = ({game}: CategoryCardProps) => {
	const { getGame } = useCategoryCard();
	const category = getGame(game);

	return (
		<div className='ml-20 flex flex-col bg-gray-300 rounded-2xl w-40 shadow_perso'>
			<div>
				<Image src={category.image_src} alt='Pendu' width={200} height={100} className='rounded-t-2xl'/>
			</div>
			<div className='flex flex-col items-center py-5 px-2 h-52 justify-around'>
				<p className='text-sm text-center'>{category.name}</p>
				<p className='text-xs text-center'>{category.description}</p>
				<PlayButton game={game}/>
			</div>
		</div>
	);
};

export default CategoryCard;
