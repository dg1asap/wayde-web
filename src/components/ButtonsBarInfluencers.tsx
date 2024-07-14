import React from 'react';

interface ButtonsBarInfluencersProps {
  images: string[];
  onAssignedOwnerClick: () => void;
  onCampaignClick: () => void;
  onClientClick: () => void;
  onWorkStatusClick: () => void;
  onDataOfCreationClick: () => void;
  onCountryClick: () => void;
}

const ButtonsBarInfluencers: React.FC<ButtonsBarInfluencersProps> = ({
  images,
  onAssignedOwnerClick,
  onCampaignClick,
  onClientClick,
  onWorkStatusClick,
  onDataOfCreationClick,
  onCountryClick,
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
        <button onClick={onAssignedOwnerClick}>Assigned owner</button>
        <button onClick={onCampaignClick}>Campaign</button>
        <button onClick={onClientClick}>Client</button>
        <button onClick={onWorkStatusClick}>Work status</button>
        <button onClick={onDataOfCreationClick}>Data of creation</button>
        <button onClick={onCountryClick}>Country</button>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            style={{ width: '200px', height: '30px', cursor: 'pointer' }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonsBarInfluencers;
