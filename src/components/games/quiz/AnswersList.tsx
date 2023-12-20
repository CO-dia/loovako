import React from 'react';
import Answer from './Answer';

interface AnswerProps {
	wrongAnswers: string[];
	answer: string;
}

const AnswersList: React.FC<AnswerProps> = ({wrongAnswers, answer}) => {
	// Array of answers
	const answers = wrongAnswers;
	// Add the right answer at a random position
	const random = Math.floor(Math.random() * 4);
	answers.splice(random, 0, answer);

	return (
		<div className='flex flex-wrap w-1/3 my-10 h-60 justify-between'>
			<div className='bg-yellow-300 rounded-lg shadow_perso h-1/3 w-5/12'>
				<Answer answer={answers[0]} isRightAnswer={random == 0}/>
			</div>
			<div className='bg-orange-400 rounded-lg shadow_perso h-1/3 w-5/12'>
				<Answer answer={answers[1]} isRightAnswer={random == 1}/>
			</div>
			<div className='bg-blue-300 rounded-lg shadow_perso h-1/3 w-5/12'>
				<Answer answer={answers[2]} isRightAnswer={random == 2}/>
			</div>
			<div className='bg-green-600 rounded-lg shadow_perso h-1/3 w-5/12'>
				<Answer answer={answers[3]} isRightAnswer={random == 3}/>
			</div>
		</div>
	);
};

export default AnswersList;
