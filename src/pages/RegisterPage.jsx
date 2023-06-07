import React from 'react';

function RegisterPage() {
  return (
    <div className="min-h-screen font-bold">
      <h3 className="pb-5 text-3xl">Register</h3>
      <form action="" className="flex flex-col gap-4">
        <input type="text" placeholder="nama" className="px-5 py-2 border-2 border-gray-300 border-solid" />
        <input type="email" placeholder="email" className="px-5 py-2 border-2 border-gray-300 border-solid" />
        <input type="password" placeholder="password" className="px-5 py-2 border-2 border-gray-300 border-solid" />
        <button type="submit" className="p-1 text-xl text-white bg-blue-900">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
