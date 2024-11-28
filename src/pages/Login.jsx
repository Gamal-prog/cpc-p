// function LoginPage() {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <h1 className="text-4xl font-bold">Welcome to the Login Page</h1>
//       </div>
//     );
//   }
  
//   export default LoginPage;

import React, { useState } from "react";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative bg-white shadow-xl rounded-3xl w-[768px] h-[480px] overflow-hidden">
        {/* Форма для Sign In */}
        <div
          className={`absolute top-0 h-full w-1/2 transition-transform duration-500 ${
            isSignUp ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <div className="flex justify-center my-4 space-x-3">
              <button className="btn btn-circle bg-gray-200 text-black">
                G+
              </button>
              <button className="btn btn-circle bg-gray-200 text-black">
                f
              </button>
              <button className="btn btn-circle bg-gray-200 text-black">
                in
              </button>
              <button className="btn btn-circle bg-gray-200 text-black">
                git
              </button>
            </div>
            <span className="text-sm mb-2">or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <a href="#" className="text-sm text-blue-500">
              Forget Your Password?
            </a>
            <button className="btn btn-primary mt-4">Sign In</button>
          </form>
        </div>

        {/* Форма для Sign Up */}
        <div
          className={`absolute top-0 h-full w-1/2 transition-transform duration-500 ${
            isSignUp ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <div className="flex justify-center my-4 space-x-3">
              <button className="btn btn-circle bg-gray-200 text-black">
                G+
              </button>
              <button className="btn btn-circle bg-gray-200 text-black">
                f
              </button>
              <button className="btn btn-circle bg-gray-200 text-black">
                in
              </button>
              <button className="btn btn-circle bg-gray-200 text-black">
                git
              </button>
            </div>
            <span className="text-sm mb-2">
              or use your email for registration
            </span>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <button className="btn btn-primary mt-4">Sign Up</button>
          </form>
        </div>

        {/* Панель переключения */}
        <div
          className={`absolute top-0 left-1/2 h-full w-1/2 bg-cover bg-center transition-transform duration-500 ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{
            backgroundImage: './a.jpeg'
          }}
        >
          <div
            className={`absolute top-0 flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-600 to-purple-800 text-white transition-transform duration-500 ${
              isSignUp ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <h1 className="text-2xl font-bold mb-4">
              {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
            </h1>
            <p className="text-sm mb-6">
              {isSignUp
                ? "Enter your personal details to use all of site features"
                : "Register with your personal details to use all of site features"}
            </p>
            <button
              className="btn btn-outline text-white border-white hover:bg-white hover:text-black"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

  