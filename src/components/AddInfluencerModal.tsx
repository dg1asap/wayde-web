import React, { useState } from 'react';

interface AddInfluencerModalProps {
  onClose: () => void;
  onAdd: (influencer: Influencer) => void;
}

interface Influencer {
  fullName: string;
  campaigns: string[];
  owners: string[];
  instagramUrl: string;
  tiktokUrl: string;
  clients: string[];
}

const AddInfluencerModal: React.FC<AddInfluencerModalProps> = ({ onClose, onAdd }) => {
  const [fullName, setFullName] = useState('');
  const [campaigns, setCampaigns] = useState('');
  const [owners, setOwners] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [tiktokUrl, setTiktokUrl] = useState('');
  const [clients, setClients] = useState('');

  const handleAdd = () => {
    const newInfluencer: Influencer = {
      fullName,
      campaigns: campaigns.split(',').map(c => c.trim()),
      owners: owners.split(',').map(o => o.trim()),
      instagramUrl,
      tiktokUrl,
      clients: clients.split(',').map(c => c.trim()),
    };
    onAdd(newInfluencer);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '400px', zIndex: 1000,
    }}>
      <h2>Add Influencer</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Full Name: </label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Campaigns (comma separated): </label>
          <input type="text" value={campaigns} onChange={(e) => setCampaigns(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Owners (comma separated): </label>
          <input type="text" value={owners} onChange={(e) => setOwners(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Instagram URL: </label>
          <input type="text" value={instagramUrl} onChange={(e) => setInstagramUrl(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>TikTok URL: </label>
          <input type="text" value={tiktokUrl} onChange={(e) => setTiktokUrl(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Clients (comma separated): </label>
          <input type="text" value={clients} onChange={(e) => setClients(e.target.value)} required />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="button" onClick={onClose} style={{ marginRight: '10px' }}>Cancel</button>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddInfluencerModal;
