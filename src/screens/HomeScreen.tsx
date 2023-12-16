import React from 'react';
import { getAuth } from '@/services/auth';
import { LoginButton } from '../components/auth/LoginButton';

export default async function HomeScreen() {
	const session = await getAuth();

	/** 
  if (session) {
    return (
      <pre>{JSON.stringify(session, null, 2)}</pre>
    )
  }*/

	return (
		<>
			<div className='flex justify-end'>
				<LoginButton />
			</div>
			<div>
        
			</div>
		</>
	);
}
