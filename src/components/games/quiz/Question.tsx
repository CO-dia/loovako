import React from 'react';

interface QuestionProps {
  question: string;
  number: number;
}

const Question: React.FC<QuestionProps> = ({ question, number }) => {
	return (
		<div className='flex flex-col bg-red-400 h-32 w-1/3 rounded-lg shadow_perso'>
			<p className='m-2'>{number}</p>
			<p className='flex-1 w-2/3 text-center self-center'>{question}</p>
		</div>
	);
};

export default Question;
