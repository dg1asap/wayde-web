import React from 'react';

interface ButtonsBarProps {
  images: string[];
  onClientClick: () => void;
  onStatusClick: () => void;
  onTimeClick: () => void;
  onAddNewCampaignClick: () => void;
}

const ButtonsBar: React.FC<ButtonsBarProps> = ({
  images,
  onClientClick,
  onStatusClick,
  onTimeClick,
  onAddNewCampaignClick,
}) => {
  const handleImageClick = (index: number) => {
    alert(`Clicked on image ${index}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        boxSizing: 'border-box',
        borderBottom: '1px solid #ccc',
        position: 'fixed',
        top: '50px', // Below the header
        left: '220px', // To start after the sidebar
        width: 'calc(100% - 220px)', // Full width minus the sidebar width
        backgroundColor: '#fff',
        zIndex: 1,
      }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={onClientClick}>Client</button>
        <button onClick={onStatusClick}>Status</button>
        <button onClick={onTimeClick}>Time</button>
        <button onClick={onAddNewCampaignClick}>Add New Campaign</button>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonsBar;
