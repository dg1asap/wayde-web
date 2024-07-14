import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, buttonLabel, onButtonClick }) => {
  const handleButtonClick = () => {
    onButtonClick();
  };

  return (
    <div style={{
      marginBottom: '20px',
      textAlign: 'center',
      border: '1px solid #ddd',  // Dodanie ramki
      borderRadius: '8px',       // Zaokrąglenie rogów
      padding: '10px'            // Wewnętrzny padding
    }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
      <h3 style={{ margin: '10px 0', fontWeight: 'bold' }}>{title}</h3>
      <p style={{ margin: '5px 0' }}>{buttonLabel}</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <div style={{ textAlign: 'center', margin: '0 10px' }}>
          <p style={{ margin: '5px', fontWeight: 'bold' }}>10 kg</p>
          <p style={{ margin: '5px' }}>Weight</p>
        </div>
        <div style={{ textAlign: 'center', margin: '0 10px' }}>
          <p style={{ margin: '5px', fontWeight: 'bold' }}>2024-07-15</p>
          <p style={{ margin: '5px' }}>Data start</p>
        </div>
        <div style={{ textAlign: 'center', margin: '0 10px' }}>
          <p style={{ margin: '5px', fontWeight: 'bold' }}>2024-07-30</p>
          <p style={{ margin: '5px' }}>Data end</p>
        </div>
      </div>
      
      <img src="https://via.placeholder.com/200x40" alt="Divider" style={{ margin: '10px auto', display: 'block' }} />
      
      <button onClick={handleButtonClick} style={{ fontSize: '14px' }}>Button</button>
    </div>
  );
};

export default ImageCard;
