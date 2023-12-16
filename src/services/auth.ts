import { getServerSession } from 'next-auth';
import { authConfig } from '@/pages/api/auth/[...nextauth]';

/**
 * Get the auth session
 * @returns 
 */
export const getAuth = () => {
	return getServerSession(authConfig);
};

/**
 * Get the required auth session
 * @returns 
 */
export const getRequiredAuthSession = async () => {
	const session = await getAuth();

	if (!session) throw new Error('No session found');

	return session;
};