import { useEffect, useState } from 'react';

/**
 * hooks to manage questions.
 * @returns 
 */
export function useQuestion() {
	const [question, setQuestion] = useState<string>('');
	const [number, setNumber] = useState<number>(1);
	const [answer, setAnswer] = useState<string>('');
	const [wrongAnswers, setWrongAnswers] = useState<string[]>([]);
	const [themeIcon, setThemeIcon] = useState<string>('');

	useEffect(() => {
		fetch('/api/games/quiz', {
			method: 'POST',
			body: JSON.stringify({ word: 'test' }),
		})
			.then((res) => res.json())
			.then((data) => {
				setQuestion(data[0].question);
				setAnswer(data[0].answer);
				setThemeIcon(data[0].theme.icon_path);
				setWrongAnswers([data[1], data[2], data[3]]);
			});
	}, []);
	
	function getQuestion() {
		return {
			question: question,
			number: number
		};
	}

	return {
		getQuestion,
		question,
		number,
		answer,
		wrongAnswers,
		themeIcon,
	};
}
