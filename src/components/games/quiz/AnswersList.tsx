import React from 'react';
import Answer from './Answer';

const AnswersList = () => {
	return (
		<div className='flex flex-wrap w-1/3 my-10 h-60 justify-between'>
			<div className='bg-yellow-300 rounded-lg shadow_perso h-1/3 w-5/12'>
				<Answer answer='Trondro' isRightAnswer={false}/>
			</div>
			<div className='bg-orange-400 rounded-lg shadow_perso h-1/3 w-5/12'>
				<Answer answer='Saka' isRightAnswer={false}/>
			</div>
			<div className='bg-blue-300 rounded-lg shadow_perso h-1/3 w-5/12'>
				<Answer answer='Aliaka' isRightAnswer={true}/>
			</div>
			<div className='bg-green-600 rounded-lg shadow_perso h-1/3 w-5/12'>
				<Answer answer='Vorona' isRightAnswer={false}/>
			</div>
		</div>
	);
};

export default AnswersList;
