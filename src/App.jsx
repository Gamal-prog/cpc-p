import Navbar from './components/Navbar.jsx'
import HomeImage from './components/HomeImage.jsx'
import Greating from './components/Greating.jsx';
import Statistics from './components/Statistics.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
  