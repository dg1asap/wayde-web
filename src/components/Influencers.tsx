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
  return (
    <div style={{ padding: '0px', textAlign: 'center', marginTop: '100px' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc', background: '#f2f2f2' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Full Name</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Campaigns</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Owners</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Instagram URL</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>TikTok URL</th>
              <th style={{ padding: '10px', textAlign: 'right', paddingRight: '50px' }}>Client</th>
            </tr>
          </thead>
          <tbody>
            {influencers.map((influencer, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px', textAlign: 'left' }}>{influencer.fullName}</td>
                <td style={{ padding: '10px', textAlign: 'left' }}>
                  <ul style={{ margin: 0, padding: 0 }}>
                    {influencer.campaigns.map((campaign, idx) => (
                      <li key={idx}>{campaign}</li>
                    ))}
                  </ul>
                </td>
                <td style={{ padding: '10px', textAlign: 'left' }}>
                  <ul style={{ margin: 0, padding: 0 }}>
                    {influencer.owners.map((owner, idx) => (
                      <li key={idx}>{owner}</li>
                    ))}
                  </ul>
                </td>
                <td style={{ padding: '10px', textAlign: 'left' }}>
                  <a href={influencer.instagramUrl} target="_blank" rel="noopener noreferrer">{influencer.instagramUrl}</a>
                </td>
                <td style={{ padding: '10px', textAlign: 'left' }}>
                  <a href={influencer.tiktokUrl} target="_blank" rel="noopener noreferrer">{influencer.tiktokUrl}</a>
                </td>
                <td style={{ padding: '10px', textAlign: 'right', paddingRight: '50px' }}>
                  <ul style={{ margin: 0, padding: 0 }}>
                    {influencer.clients.map((client, idx) => (
                      <li key={idx}>{client}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Influencers;
