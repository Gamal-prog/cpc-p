import Greating from "../components/Greating";
import Statistics from "../components/Statistics";
import HomeImage from "../components/HomeImage";
import Card from "../components/Card";

import { useContext, useState } from 'react';
import { PhotoContext } from "../api/PhotoContext";

import Modal from "../components/Modal";


function Home() {
    const { photos, loading } = useContext(PhotoContext);

    const columns = [[], [], []];
    photos.forEach((photo, index) => {
        columns[index % 3].push(photo); 
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  // const [isRed, setIsRed] = useState(false);
  const [likedCards, setLikedCards] = useState({}); // Общее состояние цвета

  const toggleColor = (cardId) => {
    setLikedCards((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId],
    }));
  };

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
                    
                    <div className="grid grid-cols-3 gap-4 mt-14">
    
                      {columns.map((column, columnIndex) => (
                        <div className="flex flex-col" key={columnIndex}>
                          {column.map((photo, rowIndex) => (
                            <Card
                              key={photo.id}
                              photo={photo}
                              onClick={() => openModal(rowIndex * Math.ceil(photos.length / 7) + columnIndex)}
                              isRed={likedCards[photo.id] || false}
                              toggleColor={() => toggleColor(photo.id)}
                            />
                          ))}
                        </div>
                      ))}

                      {isModalOpen && currentIndex !== null && (
                        <Modal
                          isOpen={isModalOpen}
                          onClose={closeModal}
                          content={{
                            image: photos[currentIndex].urls.small,
                            author: photos[currentIndex].user.name,
                            description: photos[currentIndex].description,
                            date: photos[currentIndex].created_at,
                          }}
                          onPrev={handlePrev}
                          onNext={handleNext}
                          isRed={likedCards[photos[currentIndex].id] || false}
                          toggleColor={() => toggleColor(photos[currentIndex].id)}
                        />
                      )}
                    </div>

                  )}

        </>
    );
}

export default Home

// <div className="grid grid-cols-12 gap-4 mt-14">
                    //   {photos.map((photo) => (
                    //     <div className="col-span-4">
                    //       <Card key={photo.id} photo={photo} />
                    //     </div> 
                    //   ))}
                    // </div>

                    // <div className="grid grid-cols-3 gap-4 mt-14">
                    //   {columns.map((column, index) => (
                    //       <div className="flex flex-col" key={index}>
                    //           {column.map((photo) => (
                    //               <Card 
                    //                 key={photo.id} 
                    //                 photo={photo}
                                  
                    //               /> //onClick=() => {setSelectedCard(photo)}
                    //           ))}
                    //       </div>
                    //   ))}
                    // </div>