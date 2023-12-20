import React from 'react';

interface AnswerProps {
	answer: string;
	isRightAnswer: boolean;
}

const Answer = ({answer, isRightAnswer} : AnswerProps) => {
    
	return (
		<button 
			className='text-center w-full h-full'
			onClick={() => alert(`${answer} is ${isRightAnswer}`)}>
			{answer}
		</button>
	);
};

export default Answer;
