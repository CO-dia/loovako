
/**
 * hooks to manage questions.
 * @returns 
 */
export function useQuestion() {

	function getQuestion() {
		return {
			question: 'Comment se dit chien en malgache ?',
			number: 1
		};
	}

	return {
		getQuestion,
	};
}
