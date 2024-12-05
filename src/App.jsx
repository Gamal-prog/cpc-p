import Navbar from './components/Navbar.jsx'
import HomeImage from './components/HomeImage.jsx'
import Greating from './components/Greating.jsx';
import Statistics from './components/Statistics.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './components/Card.jsx'
import { getPhotos } from './api/query.js'
import { useEffect, useState } from 'react'

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
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      const data = await getPhotos(21); // Запрашиваем 20 фото
      setPhotos(data); // Сохраняем фото в state
      setLoading(false);
    };

    loadPhotos();
  }, []);

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
                  
                  {loading ? 
                  <div className="grid grid-cols-3 gap-4 mt-10">
                      {Array.from({ length: 21 }).map((_, index) => 
                        <div
                          key={index}
                          className="skeleton h-96 bg-zinc-200"
                        ></div>
                
                      )}
                  </div>
                   : (
                    <div className="grid grid-cols-12 gap-4 mt-10">
                      {photos.map((photo) => (
                        <div className="col-span-4">
                          <Card key={photo.id} photo={photo} />
                        </div> 
                      ))}
                    </div>
                  )}

{/* {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-12 gap-4 mt-10">
          {photos.map((photo) => (
            <div className="col-span-4">
            <Card key={photo.id} photo={photo} />
            </div>
          ))}
        </div>
      )} */}
                    {/* <div className="grid grid-cols-12 gap-4 py-8">
                      
                    </div>   */}
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
  
  export default App
  