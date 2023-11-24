'use client';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React from 'react';

const Dashboard: React.FC = () => {
  const router = useRouter();

  function submiLogout() {
    deleteCookie('user');
    router.push('/');
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold">DASHBOARD ROUTE</h1>
      <button
        onClick={submiLogout}
        className="p-3 bg-gray-500 border rounded text-white"
      >
        LOGOUT
      </button>
    </main>
  );
};

export default Dashboard;
