import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import prisma from '@/lib/prisma';
import Email from 'next-auth/providers/email';

export const authConfig = {
	providers: [
		Email({
			from: process.env.EMAIL_FROM,
			server: {
				host: process.env.SMTP_HOST,
				port: Number(process.env.SMTP_PORT),
				auth: {
					user: process.env.SMTP_USER,
					pass: process.env.SMTP_PASSWORD,
				},
			},
		})
	],
	callbacks: {
		session: async ({session, user}) => {
			console.log(user, session);
			if (session.user) {
				session.user.id = user.id;
			}
			return session;
		}
	},
	adapter: PrismaAdapter(prisma)
} satisfies NextAuthOptions;

export default NextAuth(authConfig);