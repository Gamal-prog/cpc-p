import { createContext, useState, useEffect } from 'react';
import { getPhotos, getPhotosBySearch } from '../api/query';

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      const data = await getPhotos(21);
      setPhotos(data);
      setLoading(false);
    };

    loadPhotos();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    const data = await getPhotosBySearch(query, 21);
    setPhotos(data);
    setLoading(false);
  };

  return (
    <PhotoContext.Provider value={{ photos, loading, handleSearch }}>
      {children}
    </PhotoContext.Provider>
  );
};
