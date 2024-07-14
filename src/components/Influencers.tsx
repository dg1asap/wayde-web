import React from 'react';

interface Influencer {
  fullName: string;
  campaigns: string[];
  owners: string[];
  instagramUrl: string;
  tiktokUrl: string;
  clients: string[];
}

const Influencers: React.FC = () => {
  const influencers: Influencer[] = [
    {
      fullName: 'John Doe',
      campaigns: ['Campaign 1', 'Campaign 2'],
      owners: ['Owner 1', 'Owner 2'],
      instagramUrl: 'https://www.instagram.com/johndoe',
      tiktokUrl: 'https://www.tiktok.com/@johndoe',
      clients: ['client 1 3', 'client 4 3']
    },
    {
      fullName: 'Jane Smith',
      campaigns: ['Campaign 3', 'Campaign 4'],
      owners: ['Owner 3', 'Owner 4'],
      instagramUrl: 'https://www.instagram.com/janesmith',
      tiktokUrl: 'https://www.tiktok.com/@janesmith',
      clients: ['client 1 3', 'client 4 5']
    }
    // Dodaj więcej influencerów w razie potrzeby
  ];

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