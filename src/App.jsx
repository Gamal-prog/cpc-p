import Navbar from './components/Navbar.jsx'
import HomeImage from './components/HomeImage.jsx'
import Greating from './components/Greating.jsx';
import Statistics from './components/Statistics.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './components/Card.jsx'

// function App() {
//     return (
//         <>
//         <Router>

//             <div className="min-h-screen">
//             {/* Навбар сверху */}
//                 <Navbar />

//                 {/* Основной контент */}
//                 <main className="flex-grow px-4 py-4 bg-base-100">
//                 <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <div className="grid grid-cols-7 gap-2">
//                             <Greating />
//                             <Statistics />
//                             <HomeImage /> 
//                         </div>
//                         // <div className="flex flex-row flex-wrap">

//                         // </div>
//                     }/>
//                     <Route path="/login" element={<Login />} />
//                 </Routes>
//                 </main>
//             </div>
//             </Router>
//         </>
//     );
// }

// export default App

function App() {
    return (
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Навбар сверху */}
          <Navbar />
  
          {/* Основной контент */}
          <main className="flex-grow px-6 py-8 bg-base-100">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5">
                      <Greating />
                    </div>

                    <div className="col-span-2">
                      <Statistics />
                    </div>

                    <div className="col-span-5">
                      <HomeImage />
                    </div>

                  </div>
                    <div className="grid grid-cols-12 gap-4 py-8">
                      <div className="col-span-4">
                      <Card />
                      </div>
                      <div className="col-span-4">
                      <div className="relative group max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1733000546765-b3cbea52e6c4?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Укажите URL для вашей картинки
        alt="Modern House"
      />

      {/* Overlay for icons */}
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        {/* Top Right Buttons */}
        <div className="flex justify-end gap-2">
          <button className="p-2 rounded-sm bg-white shadow-md hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill text-gray-700"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </button>
          <button className="p-2 rounded-sm bg-white shadow-md hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg text-gray-700"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Content */}
        <div className="flex items-center justify-between">
          {/* User Info */}
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full">
                <img
                  src="/a.jpg"
                  alt="User"
                />
              </div>
            </div>
            <div>
              <p className="text-white font-medium">Jigar Panchal</p>
              {/* <p className="text-gray-300 text-sm">For Unsplash+</p> */}
            </div>
          </div>

          {/* Download Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-80 text-gray-700 rounded-lg shadow-md hover:bg-opacity-100 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
                      </div>
                      <div className="col-span-4">
                      <Card />
                      </div>
                      <div className="col-span-4">
                      <Card />
                      </div>
                      <div className="col-span-4">
                      <Card />
                      </div>

                    </div>  
                  </div>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
  
  export default App;
  