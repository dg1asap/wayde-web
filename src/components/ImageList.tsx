import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

interface Image {
  imageUrl: string;
  title: string;
  buttonLabel: string;
}

interface ImageListProps {
  images: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState<Image[]>([]);

  const handleAddNewCampaignClick = () => {
    alert('image button clicked');
  };

  useEffect(() => {
    // Ładujemy pierwsze 10 obrazów
    const initialImages = images.slice(0, 10);
    setLoadedImages(initialImages);

    // Nasłuchujemy scrolla, aby ładować kolejne obrazy
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        // Ładujemy następne 10 obrazów lub mniej, jeśli to jest ostatni rząd
        const remainingImages = images.slice(loadedImages.length, loadedImages.length + 10);
        setLoadedImages(prevImages => [...prevImages, ...remainingImages]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images, loadedImages]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Po 4 obrazy na jeden rząd
        gap: '50px',
        padding: '10px',
        boxSizing: 'border-box',
        marginTop: '50px', // Wysokość ButtonsBar
      }}
    >
      {loadedImages.map((image, index) => (
        <ImageCard
          key={index}
          imageUrl={image.imageUrl}
          title={image.title}
          buttonLabel={image.buttonLabel}
          onButtonClick={() => handleAddNewCampaignClick()}
        />
      ))}
    </div>
  );
};

export default ImageList;
