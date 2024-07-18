import React from 'react';

interface Influencer {
  fullName: string;
  campaigns: string[];
  owners: string[];
  instagramUrl: string;
  tiktokUrl: string;
  clients: string[];
}

interface InfluencersProps {
  influencers: Influencer[];
}

const Influencers: React.FC<InfluencersProps> = ({ influencers }) => {
  const handlePanelClick = (fullName: string) => {
    alert(`Clicked on ${fullName}'s panel`);
  };

  return (
    <div style={{ 
      padding: '10px', 
      marginTop: '100px',
    }}>
      {influencers.map((influencer, index) => (
        <div key={index} style={{ 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          margin: '20px', 
          padding: '20px', 
          display: 'flex',
          cursor: 'pointer', // Dodajemy kursor wskazujący na możliwość kliknięcia
        }} onClick={() => handlePanelClick(influencer.fullName)}>
          <img 
            src="https://via.placeholder.com/50"  
            alt={`${influencer.fullName}'s image`} 
            style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }}
          />
          <div>
            <h3>{influencer.fullName}</h3>
            <p><strong>Instagram:</strong> <a href={influencer.instagramUrl} target="_blank" rel="noopener noreferrer">{influencer.instagramUrl}</a></p>
            <p><strong>TikTok:</strong> <a href={influencer.tiktokUrl} target="_blank" rel="noopener noreferrer">{influencer.tiktokUrl}</a></p>
          </div>
          <div style={{ }}>
            <p><strong>Campaigns:</strong></p>
            <ul style={{}}>
              {influencer.campaigns.map((campaign, idx) => (
                <li key={idx}>{campaign}</li>
              ))}
            </ul>
          </div>
          <div style={{}}>
            <p><strong>Owners:</strong></p>
            <ul style={{}}>
              {influencer.owners.map((owner, idx) => (
                <li key={idx}>{owner}</li>
              ))}
            </ul>
          </div>
          <div style={{ }}>
            <p><strong>Clients:</strong></p>
            <ul style={{ margin: '10px 0'}}> 
              {influencer.clients.map((client, idx) => (
                <li key={idx}>{client}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Influencers;
