import Greating from "../components/Greating";
import Statistics from "../components/Statistics";
import HomeImage from "../components/HomeImage";
import Card from "../components/Card";

import { useContext } from 'react';
import { PhotoContext } from "../api/PhotoContext";


function Home() {
    const { photos, loading } = useContext(PhotoContext);

    // const [selectedCard, setSelectedCard]=useState({})
    const columns = [[], [], []];
    photos.forEach((photo, index) => {
        columns[index % 3].push(photo); // Распределяем фото по колонкам циклично
    });

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
                    // <div className="grid grid-cols-12 gap-4 mt-14">
                    //   {photos.map((photo) => (
                    //     <div className="col-span-4">
                    //       <Card key={photo.id} photo={photo} />
                    //     </div> 
                    //   ))}
                    // </div>
                    <div className="grid grid-cols-3 gap-4 mt-14">
                      {columns.map((column, index) => (
                          <div className="flex flex-col" key={index}>
                              {column.map((photo) => (
                                  <Card key={photo.id} photo={photo}  /> //onClick=() => {setSelectedCard(photo)}
                              ))}
                          </div>
                      ))}
                    </div>

                  )}

                  {/* <ImageModal isShown selectedCard /> */}
        </>
    );
}

export default Home