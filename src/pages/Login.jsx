import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => setIsSignUp(!isSignUp);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    //logic of working with form data
  };

  return (
    <div className="relative flex justify-center items-center">
      <div className="container bg-white overflow-hidden max-w-4xl w-full">
        <div className="relative flex transition-transform duration-700 ease-in-out">
          {/* Форма Sign In */}
          <div
            className={`form-container p-8 w-1/2 ${
              isSignUp ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            } transition-all duration-700`}
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
                  className="h-5 w-5 mr-2"
                />
                Google
              </a>
            </div>

            <div className="divider my-6">OR</div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control w-full">
                <div className="label">
                  { errors.email && <span className="label-text text-error">{errors.email.message}</span> }
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  // className="input input-bordered w-full mb-6 "
                  className={`input input-bordered w-full ${errors.email && "input-error"} ${errors.email ? 'mb-4' : 'mb-6'}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </label>
              {/* {errors.email && <p className="text-error text-sm">{errors.email.message}</p>} */}
              <label className="form-control w-full">
                <div className="label">
                  { errors.password && <span className="label-text text-error">{errors.password.message}</span> }
                </div>
              
                <input
                  type="password"
                  placeholder="Password"
                  // className="input input-bordered w-full mb-6"
                  className={`input input-bordered w-full mb-6 ${errors.password && "input-error"}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
              </label>
              {/* {errors.password && <p className="text-error text-sm">{errors.password.message}</p>} */}
              <button type="submit" className="btn btn-primary w-full ">Login</button>
            </form>
            <div className=" text-black text-center p-4">
              <p>
                Don't have an account yet?
                {' '}
                <button
                  className="underline  text-gray-400"
                  onClick={handleToggle}
                > 
                Join 
                </button>
              </p>
            </div>
          </div>

          {/* Форма Sign Up */}
          <div
            className={`form-container p-8 w-1/2 ${
              isSignUp ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } transition-all duration-700`}
          >
            <div className="flex justify-center">
              <h1 className="text-5xl font-bold mb-10">Join Seeglance</h1>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={`flex flex-row ${errors.name ? 'mb-6' : 'mb-8'}`}>
                <label className="form-control w-full">
                  <div className="label">
                    { errors.name && <span className="label-text text-error">{errors.name.message}</span> }
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    // className="input input-bordered w-full mr-2"
                    className={`input input-bordered w-full ${errors.name && "input-error"} mr-2`}
                    {...register("name", { required: "Name is required" })}
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    { errors.lastName && <span className="label-text text-error">{errors.lastName.message}</span> }
                  </div>
                  <input
                    type="text"
                    placeholder="Lastname"
                    // className="input input-bordered w-full ml-2"
                    className={`input input-bordered w-full ${errors.lastName && "input-error"} ml-2`}
                    {...register("lastName", { required: "Last Name is required" })}
                  />
                </label>
              </div>
              
              {/* <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-8"
              /> */}
              <label className="form-control w-full">
                <div className="label">
                  { errors.email && <span className="label-text text-error">{errors.email.message}</span> }
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  // className="input input-bordered w-full mb-6 "
                  className={`input input-bordered w-full ${errors.email && "input-error"} ${errors.email ? 'mb-6' : 'mb-8'}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </label>
              {/* <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full mb-8"
              /> */}
              <label className="form-control w-full">
                  <div className="label">
                    { errors.username && <span className="label-text text-error">{errors.username.message}</span> }
                  </div>
                  <input
                    type="text"
                    placeholder="Username"
                    // className="input input-bordered w-full ml-2"
                    className={`input input-bordered w-full ${errors.username && "input-error"} ${errors.username ? 'mb-6' : 'mb-8'}`}
                    {...register("username", { required: "Username is required" })}
                  />
                </label>
              {/* <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-8"                          
              /> */}
              <label className="form-control w-full">
                <div className="label">
                  { errors.password && <span className="label-text text-error">{errors.password.message}</span> }
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  // className="input input-bordered w-full mb-6"
                  className={`input input-bordered w-full ${errors.password && "input-error"} ${errors.password ? 'mb-6' : 'mb-8'}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
              </label>
              <button type="submit" className="btn btn-primary w-full">Join</button>
            </form>
            <div className=" text-black text-center p-4">
              <p> 
                Already have an account? 
                {' '}
                <button
                  className="underline text-gray-400"
                  onClick={handleToggle}
                >
                Login
                </button>
              </p>
            </div>
          </div>

          {/* Фиолетовый перекрывающий элемент */}
          <div
            className={`toggle-container absolute top-0 h-full w-1/2 text-white flex flex-col justify-center items-center p-8 ${
              isSignUp ? 'translate-x-0' : 'translate-x-full'
            } transition-all duration-700`}
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1731353160468-9bac2e2e894f?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover", // Изображение заполняет элемент
              backgroundPosition: "center", // Центрируем изображение
              backgroundRepeat: "no-repeat",
            }}  
          >
            <div className="absolute top-2 left-2">
              <Link to="/">
                <img
                  src="/logo.jpg"
                  alt="Small Icon"
                  className="w-14 h-14 object-contain" 
                />
              </Link>
            </div>

            <h1 className="text-4xl font-bold mb-4">
              {isSignUp ? 'Hello, Friend!' : 'Welcome Back!'}
            </h1>
            <p className="mb-8">
              {isSignUp
                ? 'Registration and start your journey with us'
                : 'Log in to continue your journey with us'}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App













//mine mine mine
// import React, { useState } from 'react';

// const App = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleToggle = () => setIsSignUp(!isSignUp);

//   return (
//     <div
//       className="flex justify-center bg-cover bg-center"
//     >
//       <div className=" bg-white rounded-lg w-full max-w-4xl overflow-hidden">
//       <div className="grid grid-cols-1 md:grid-cols-2">

        

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
//             className={`p-8 transition-transform  ${
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


//       </div>
//     </div>
//   );
// };

// export default App;
