import React, { useEffect, useState } from 'react';

const SignIn: React.FC<{ loading: boolean }> = (props) => {
  return (
    <div className="justify-center flex items-center mt-40">
      <div className="w-100 bg-white rounded-xl">
        <div className="grid gird-cols-2 grid-flow-col border-b w-full rounded-t-xl divide-x py-2">
          <div className="flex justify-center text-xl font-sans hover:opacity-90 bg-sky-400 rounded-tl-xl pl-3 py-2 uppercase">
            Sign In
          </div>
          <div className="flex justify-center text-xl text-sans hover:opacity-90 bg-sky-400 rounded-tr-xl pr-3 py-2 uppercase">
            Sign Up
          </div>
        </div>
        <div className="my-4 px-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-2 rounded-lg hover:bg-blue-900">
              Login
            </button>
            <a href="/" className="text-sm text-blue-2 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
