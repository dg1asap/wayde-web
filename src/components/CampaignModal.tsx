import React, { useState } from 'react';

interface CampaignModalProps {
  onClose: (imageUrl: string, title: string, buttonLabel: string, startDate: string, endDate: string) => void;
  onCancel?: () => void; // Opcjonalna właściwość onCancel
}

const CampaignModal: React.FC<CampaignModalProps> = ({ onClose, onCancel }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddCampaign = () => {
    if (!imageUrl || !title || !buttonLabel || !startDate || !endDate) {
      alert('Proszę wypełnić wszystkie pola przed dodaniem kampanii.');
      return;
    }

    onClose(imageUrl, title, buttonLabel, startDate, endDate);
    clearInputs();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const clearInputs = () => {
    setImageUrl('');
    setTitle('');
    setButtonLabel('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
        width: '300px',
        borderRadius: '8px',
      }}
    >
      <button
        onClick={handleCancel}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
        }}
      >
        &times;
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <h3 style={{ marginBottom: '10px' }}>Dodaj nową kampanię</h3>
        <input
          type="text"
          placeholder="ImageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Button Label"
          value={buttonLabel}
          onChange={(e) => setButtonLabel(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <button onClick={handleAddCampaign} style={{ marginTop: '10px' }}>Akceptuj</button>
      </div>
    </div>
  );
};

export default CampaignModal;
