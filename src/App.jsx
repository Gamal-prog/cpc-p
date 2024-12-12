import Navbar from './components/Navbar.jsx'
import HomeImage from './components/HomeImage.jsx'
import Greating from './components/Greating.jsx';
import Statistics from './components/Statistics.jsx'
// import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './components/Card.jsx'
import { getPhotos, getPhotosBySearch } from './api/query.js'
import { useEffect, useState } from 'react'
// import Contact from './pages/Contact.jsx'
// import Help from './pages/Help.jsx';

// function App() {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadPhotos = async () => {
//       setLoading(true);
//       const data = await getPhotos(21); // Запрашиваем 20 фото
//       setPhotos(data); // Сохраняем фото в state
//       // setLoading(false);
//     };

//     loadPhotos();
//   }, []);

//   const handleSearch = async (query) => {
//     setLoading(true);
//     const data = await getPhotosBySearch(query, 21); // Поиск фотографий
//     setPhotos(data);
//     setLoading(false);
//   };



//     return (
//       <Router>
//         <div className="min-h-screen flex flex-col">
//           {/* Навбар сверху */}
//           <Navbar onSearch={handleSearch} />
  
//           {/* Основной контент */}
//           <main className="flex-grow px-6 py-8 bg-base-100">
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <div>
//                   <div className="grid grid-cols-12 gap-4 mt-6">
//                     <div className="col-span-5">
//                       <Greating />
//                     </div>

//                     <div className="col-span-2">
//                       <Statistics />
//                     </div>

//                     <div className="col-span-5">
//                       <HomeImage />
//                     </div>

//                   </div>
                  
//                   {loading ? 
//                   <div className="grid grid-cols-3 gap-4 mt-14">
//                       {Array.from({ length: 21 }).map((_, index) => 
//                         <div
//                           key={index}
//                           className="skeleton h-96 bg-zinc-200"
//                         ></div>
                
//                       )}
//                   </div>
//                    : (
//                     <div className="grid grid-cols-12 gap-4 mt-14">
//                       {photos.map((photo) => (
//                         <div className="col-span-4">
//                           <Card key={photo.id} photo={photo} />
//                         </div> 
//                       ))}
//                     </div>
//                   )}

//                   </div>
//                 }
//               />
//               <Route path="/login" element={<Login />} />
//               {/* <Route path="/contact-us" element={<Contact />} /> */}
//             </Routes>
//           </main>
//           <Routes>
//             <Route path="/contact-us" element={<Contact />} />
//           </Routes>
//           <Routes>
//             <Route path="/help-center" element={<Help />} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
  
//   export default App
import FullLayout from './layouts/FullLayout.jsx';
import TopLayout from './layouts/TopLayout.jsx';
import BottomLayout from './layouts/BottomLayout.jsx'
import NullLayout from './layouts/NullLayout.jsx';
import Home from './pages/Home.jsx';
import Help from './pages/Help.jsx';  
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import { PhotoProvider } from './api/PhotoContext.jsx';
import Profile from './pages/Profile';
import Toplayout2 from "./layouts/Toplayout2.jsx";

function App() {
  
  return (
    <PhotoProvider>
    <Router>
      <Routes>
        {/* Главный макет для страниц с navbar и footer */}
        <Route
          path="/"
          element={
            <TopLayout>
              <Home />
            </TopLayout>
          }
        />
        <Route
          path="/about"
          element={
            <FullLayout>
              <About />
            </FullLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <FullLayout>
              <Contact />
            </FullLayout>
          }
        />
        <Route
          path="/help-center"
          element={
            <BottomLayout>
              <Help />
            </BottomLayout>
          }
        />

        {/* Отдельный макет для авторизации */}
        <Route
          path="/login"
          element={
            <NullLayout>
              <Login />
            </NullLayout>
          }
        />
              <Route path="/profile" element={

                  <Toplayout2>
                      <Profile />
                  </Toplayout2>


              } />
      </Routes>
    </Router>
    </PhotoProvider>
  );
}

export default App
  