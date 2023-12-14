import { LoginButton } from '@/components/auth/LoginButton'
import { getAuth } from '@/components/services/auth'

export default async function Home() {
  const session = await getAuth();

  /** 
  if (session) {
    return (
      <pre>{JSON.stringify(session, null, 2)}</pre>
    )
  }*/

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <LoginButton />
      </div>
    </main>
  )
}
