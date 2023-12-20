import React from 'react';
import AnswersList from '@/components/games/quiz/AnswersList';
import Question from '@/components/games/quiz/Question';
import { FaPaw } from 'react-icons/fa';

const QuizScreen = () => {
	return (
		<div className='flex flex-col items-center'>
			<FaPaw className='text-5xl my-10'/>
			<Question />
			<AnswersList />
		</div>
	);
};

export default QuizScreen;
