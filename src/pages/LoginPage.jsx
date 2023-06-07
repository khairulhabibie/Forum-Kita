import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen font-bold">
      <h3 className="pb-5 text-3xl">Login</h3>
      <form action="" className="flex flex-col gap-4">
        <input type="email" placeholder="email" className="px-5 py-2 border-2 border-gray-300 border-solid" />
        <input type="password" placeholder="password" className="px-5 py-2 border-2 border-gray-300 border-solid" />
        <button type="submit" className="p-1 text-xl text-white bg-blue-900">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
