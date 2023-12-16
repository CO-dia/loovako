'use client';

import Link from 'next/link';
import React from 'react';
import { CiPlay1 } from 'react-icons/ci';

interface PlayButtonProps {
    game: string;
}

const PlayButton = ({game} : PlayButtonProps) => {    
	return (
		<Link href={`/games/${game}`}>
			<button 
				className='flex justify-center items-center text-black w-10 h-10 bg-blue-400 rounded-full'
				onClick={() => console.log(game)}>
				<CiPlay1 />
			</button>
		</Link>
	);
};

export default PlayButton;
