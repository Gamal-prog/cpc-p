import Greating from "../components/Greating";
import Statistics from "../components/Statistics";
import HomeImage from "../components/HomeImage";
import Card from "../components/Card";
// import { useEffect, useState } from 'react'
// import { getPhotos, getPhotosBySearch } from '../api/query'
import { useContext } from 'react';
import { PhotoContext } from "../api/PhotoContext";

function Home() {
    // const [photos, setPhotos] = useState([]);
    // const [loading, setLoading] = useState(true);
  
    // useEffect(() => {
    //   const loadPhotos = async () => {
    //     setLoading(true);
    //     const data = await getPhotos(21); // Запрашиваем 20 фото
    //     setPhotos(data); // Сохраняем фото в state
    //     setLoading(false);
    //   };
  
    //   loadPhotos();
    // }, []);
  
    // const handleSearch = async (query) => {
    //   setLoading(true);
    //   const data = await getPhotosBySearch(query, 21); // Поиск фотографий
    //   setPhotos(data);
    //   setLoading(false);
    // };
    const { photos, loading } = useContext(PhotoContext);

    return (
        <>
    <div className="grid grid-cols-12 gap-4 mt-6">
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
                  <div className="grid grid-cols-3 gap-4 mt-14">
                      {Array.from({ length: 21 }).map((_, index) => 
                        <div
                          key={index}
                          className="skeleton h-96 bg-zinc-200"
                        ></div>
                
                      )}
                  </div>
                   : (
                    <div className="grid grid-cols-12 gap-4 mt-14">
                      {photos.map((photo) => (
                        <div className="col-span-4">
                          <Card key={photo.id} photo={photo} />
                        </div> 
                      ))}
                    </div>
                  )}
        </>
    );
}

export default Home