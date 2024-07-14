import React from 'react';

interface ImageItemProps {
  imageUrl: string;
  title: string;
  stats: {
    number: number;
    startDate: string;
    endDate: string;
  };
  buttonLabel: string;
  onButtonClick: () => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ imageUrl, title, stats, buttonLabel, onButtonClick }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
      <h3>{title}</h3>
      <div>
        <p>Number: {stats.number}</p>
        <p>Start Date: {stats.startDate}</p>
        <p>End Date: {stats.endDate}</p>
      </div>
      <img src="https://via.placeholder.com/150" alt="Thumbnail" style={{ width: '100%', maxWidth: '150px', height: 'auto', marginBottom: '10px' }} />
      <button onClick={onButtonClick}>{buttonLabel}</button>
    </div>
  );
};

export default ImageItem;
