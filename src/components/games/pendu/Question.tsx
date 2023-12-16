import { useQuestion } from '@/hooks/games/pendu/useQuestion';
import React from 'react';

const Question = () => {
	const { getQuestion } = useQuestion();
	const {question, number} = getQuestion();
    
	return (
		<div className='flex flex-col bg-red-400 h-32 w-80 rounded-lg shadow_perso'>
			<p className='m-2'>{number}</p>
			<p className='flex-1 w-40 text-center self-center'>{question}</p>
		</div>
	);
};

export default Question;
