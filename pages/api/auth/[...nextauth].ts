import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import prisma from '@/lib/prisma'

export const authConfig = {
    providers: [],
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

export default NextAuth(authConfig)