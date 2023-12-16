interface Category {
    name: string;
    description: string;
    image_src: string;
  }
  
type Categories = {
    [key: string]: Category;
}

/**
 * hooks to manage category card.
 * @returns 
 */
export function useCategoryCard() {
          
	const categories: Categories = {
		pendu: {
			name: 'Le pendu',
			description: 'Trouvez le mot caché en proposant des lettres',
			image_src: '/images/pendu_test.jpg'
		},
		quiz: {
			name: 'Le quiz',
			description: 'Répondez aux questions pour gagner des points',
			image_src: ''
		},
		memory: {
			name: 'Memory',
			description: 'Retrouvez les paires de cartes.',
			image_src: ''
		},
	};

	function getGame(name: string) {
		return categories[name];
	}

	return {
		getGame,
	};
}
