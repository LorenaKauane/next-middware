'use client';

import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  function submiLogin() {
    setCookie('user', 'Logged');
    router.push('/dashboard');
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="font-bold">LOGIN ROUTE</h1>
      <button
        onClick={submiLogin}
        className="p-3 bg-gray-500 border rounded text-white"
      >
        LOGIN
      </button>
    </main>
  );
}
