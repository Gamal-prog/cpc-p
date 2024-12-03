import React, { useState } from 'react';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => setIsSignUp(!isSignUp);

  return (
    <div
      className="flex justify-center bg-cover bg-center"
    >
      <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Panel */}
          <div
            className={`p-8 transition-transform ${
              isSignUp ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            <div className="flex justify-center">
              <h1 className="text-5xl font-bold mb-10">Login</h1>
            </div>
            
            <div className="flex flex-col gap-6 mb-4">
              {/* Facebook Login Button */}
              <a
                href="https://facebook.com" // Замените ссылкой на авторизацию Facebook
                className="flex items-center justify-center w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                <img
                  src="/fb.png" // Замените на путь к иконке Facebook
                  alt="Facebook"
                  className="h-7 w-8 mr-2"
                />
                Facebook
              </a>

              {/* Google Login Button */}
              <a
                href="https://google.com" // Замените ссылкой на авторизацию Google
                className="flex items-center justify-center w-full bg-white text-gray-600 font-semibold py-2 border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-300"
              >
                <img
                  src="/gl.svg" // Замените на путь к иконке Google
                  alt="Google"
                  className="h-6 w-6 mr-2"
                />
                Google
              </a>
            </div>

            <div className="divider my-6">OR</div>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-6"
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-6"
              />
              <button className="btn btn-primary w-full ">Login</button>
            </form>
            <div className=" text-black text-center p-4">
              <p>
                Don't have an account yet?
                {' '}
                <button
                  className="underline text-sm text-gray-400"
                  onClick={handleToggle}
                > 
                Join 
                </button>
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div
            className={`p-8 transition-transform ${
              isSignUp ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            
            <div className="flex justify-center">
              <h1 className="text-5xl font-bold mb-10">Join Vibe</h1>
            </div>
            
            <form>
              <div className="flex flex-row mb-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full mr-2"
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered w-full ml-2"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-8"
              />
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full mb-8"
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-8"                          
              />
              <button className="btn btn-primary w-full">Join</button>
            </form>
            <div className=" text-black text-center p-4">
              <p> 
                Already have an account? 
                {' '}
                <button
                  className="underline text-sm text-gray-400"
                  onClick={handleToggle}
                >
                Login
                </button>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;










// import React, { useState } from 'react'

// const App = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleToggle = () => setIsSignUp(!isSignUp);

//   return (
    

//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* Left Panel */}
//           <div
//             className={`p-8 transition-transform ${
//               isSignUp ? '-translate-x-full' : 'translate-x-0'
//             }`}
//           >
//             <div className="flex justify-center">
//               <h1 className="text-5xl font-bold mb-10">Login</h1>
//             </div>
            
//             <div className="flex flex-col gap-6 mb-4">
//               {/* Facebook Login Button */}
//               <a
//                 href="https://facebook.com" // Замените ссылкой на авторизацию Facebook
//                 className="flex items-center justify-center w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
//               >
//                 <img
//                   src="/fb.png" // Замените на путь к иконке Facebook
//                   alt="Facebook"
//                   className="h-7 w-8 mr-2"
//                 />
//                 Facebook
//               </a>

//               {/* Google Login Button */}
//               <a
//                 href="https://google.com" // Замените ссылкой на авторизацию Google
//                 className="flex items-center justify-center w-full bg-white text-gray-600 font-semibold py-2 border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-300"
//               >
//                 <img
//                   src="/gl.svg" // Замените на путь к иконке Google
//                   alt="Google"
//                   className="h-6 w-6 mr-2"
//                 />
//                 Google
//               </a>
//             </div>

//             <div className="divider my-6">OR</div>
//             <form>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="input input-bordered w-full mb-6"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="input input-bordered w-full mb-6"
//               />
//               <button className="btn btn-primary w-full ">Login</button>
//             </form>
//             <div className=" text-black text-center p-4">
//               <p>
//                 Don't have an account yet?
//                 {' '}
//                 <button
//                   className="underline text-sm text-gray-400"
//                   onClick={handleToggle}
//                 > 
//                 Join 
//                 </button>
//               </p>
//             </div>
//           </div>

//           {/* Right Panel */}
//           <div
//             className={`p-8 transition-transform ${
//               isSignUp ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
            
//             <div className="flex justify-center">
//               <h1 className="text-5xl font-bold mb-10">Join Vibe</h1>
//             </div>
            
//             <form>
//               <div className="flex flex-row mb-8">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="input input-bordered w-full mr-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Lastname"
//                   className="input input-bordered w-full ml-2"
//                 />
//               </div>
              
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="input input-bordered w-full mb-8"
//               />
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="input input-bordered w-full mb-8"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="input input-bordered w-full mb-8"                          
//               />
//               <button className="btn btn-primary w-full">Join</button>
//             </form>
//             <div className=" text-black text-center p-4">
//               <p> 
//                 Already have an account? 
//                 {' '}
//                 <button
//                   className="underline text-sm text-gray-400"
//                   onClick={handleToggle}
//                 >
//                 Login
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>


//   );
// };

// export default App




// import React, { useState } from 'react';

// const App = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleToggle = () => setIsSignUp(!isSignUp);

//   return (
//     <div
//       className="flex h-screen items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('')",
//       }}
//     >
//       <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* Left Panel */}
//           <div
//             className={`p-8 transition-transform ${
//               isSignUp ? '-translate-x-full' : 'translate-x-0'
//             }`}
//           >
//             <h1 className="text-2xl font-bold mb-4">Sign In</h1>
//             <div className="mb-4 space-x-2">
//               <a
//                 href="#"
//                 className="btn btn-circle bg-gray-200 text-gray-600"
//               >
//                 G
//               </a>
//               <a
//                 href="#"
//                 className="btn btn-circle bg-gray-200 text-gray-600"
//               >
//                 F
//               </a>
//               <a
//                 href="#"
//                 className="btn btn-circle bg-gray-200 text-gray-600"
//               >
//                 Gh
//               </a>
//             </div>
//             <p className="mb-4">Or use your email account:</p>
//             <form>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="input input-bordered w-full mb-4"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="input input-bordered w-full mb-4"
//               />
//               <button className="btn btn-primary w-full">Sign In</button>
//             </form>
//           </div>

//           {/* Right Panel */}
//           <div
//             className={`p-8 transition-transform ${
//               isSignUp ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
//             <div className="mb-4 space-x-2">
//               <a
//                 href="#"
//                 className="btn btn-circle bg-gray-200 text-gray-600"
//               >
//                 G
//               </a>
//               <a
//                 href="#"
//                 className="btn btn-circle bg-gray-200 text-gray-600"
//               >
//                 F
//               </a>
//               <a
//                 href="#"
//                 className="btn btn-circle bg-gray-200 text-gray-600"
//               >
//                 Gh
//               </a>
//             </div>
//             <p className="mb-4">Or use your email for registration:</p>
//             <form>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="input input-bordered w-full mb-4"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="input input-bordered w-full mb-4"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="input input-bordered w-full mb-4"
//               />
//               <button className="btn btn-primary w-full">Sign Up</button>
//             </form>
//           </div>
//         </div>
//         <div className="bg-primary text-white text-center p-4">
//           <p>
//             {isSignUp
//               ? 'Already have an account?'
//               : "Don't have an account yet?"}{' '}
//             <button
//               className="underline text-sm"
//               onClick={handleToggle}
//             >
//               {isSignUp ? 'Sign In' : 'Sign Up'}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
