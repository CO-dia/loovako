import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import prisma from '@/lib/prisma'

export const authConfig = {
    providers: [],
    adapter: PrismaAdapter(prisma)
} satisfies NextAuthOptions;

export default NextAuth(authConfig)