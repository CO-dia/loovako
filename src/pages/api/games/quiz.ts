import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const quiz = await prisma.quiz.findMany({
		select: {
			question: true,
			answer: true,
			theme : {
				select: {
					icon_path: true,
				}
			}
		},
	});

	const wrongAnswers = await prisma.word.findMany({
		select: {
			word: true,
		},
		where: {
			WordTheme: {
				every: {
					theme: {
						is: quiz[0].theme,
					}
				}
			},
			word: {
				not: quiz[0].answer,
			}
		}
	});

	// Mixing the wrong answers array.
	for (let i = wrongAnswers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[wrongAnswers[i], wrongAnswers[j]] = [wrongAnswers[j], wrongAnswers[i]];
	}

	// Taking the first 3 elements of the array.
	const selectedWrongAnswers = wrongAnswers.slice(0, 3);
	const wrongAnswersArray = selectedWrongAnswers.map((item) => item.word);
	res.status(200).json([...quiz , ...wrongAnswersArray]);
}