"use client";

import { signIn } from 'next-auth/react';

export const LoginButton = () => {
    return (
        <button 
            onClick={async () => {
                await signIn();
            }}
            className=' text-black py-2 px-2 m-5 rounded'
            >
            Connexion
        </button>
    )
}