import React from 'react';
import HomeScreen from '@/screens/HomeScreen';
import { getAuth } from '@/services/auth';

export default async function App() {
	const session = await getAuth();

	/** 
  if (session) {
    return (
      <pre>{JSON.stringify(session, null, 2)}</pre>
    )
  }*/

	return (
		<main>
			<HomeScreen />
		</main>
	);
}
