import React from 'react';
import AnswersList from '@/components/games/quiz/AnswersList';
import Question from '@/components/games/quiz/Question';
import { FaPaw } from 'react-icons/fa';
import { useQuestion } from '@/hooks/games/quiz/useQuestion';

const QuizScreen = () => {
	const { getQuestion,
		question,
		number,
		answer,
		wrongAnswers,
		themeIcon } = useQuestion();

	return (
		<div className='flex flex-col items-center'>
			<FaPaw className='text-5xl my-10'/>
			<Question question={question} number={number}/>
			<AnswersList wrongAnswers={wrongAnswers} answer={answer}/>
		</div>
	);
};

export default QuizScreen;
