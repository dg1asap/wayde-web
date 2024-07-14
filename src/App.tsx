import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ButtonsBar from './components/ButtonsBar';
import ImageList from './components/ImageList';

const App: React.FC = () => {
  const handleButtonClick = (buttonLabel: string) => {
    alert(`Button ${buttonLabel} clicked`);
  };

  const handleLogout = () => {
    alert('Logout button clicked');
  };

  const handleSearch = (query: string) => {
    console.log(`Search query: ${query}`);
  };

  const handleProfileClick = () => {
    alert('Profile button clicked');
  };

  const handleClientClick = () => {
    alert('Client button clicked');
  };

  const handleStatusClick = () => {
    alert('Status button clicked');
  };

  const handleTimeClick = () => {
    alert('Time button clicked');
  };

  const handleAddNewCampaignClick = () => {
    alert('Add New Campaign button clicked');
  };


  
  const buttons = [
    { label: 'Home', onClick: () => handleButtonClick('Home') },
    { label: 'Profile', onClick: () => handleButtonClick('Profile') },
    { label: 'Settings', onClick: () => handleButtonClick('Settings') },
  ];

  const logout = { label: 'Logout', onClick: handleLogout };
  const images = [
    { imageUrl: 'https://via.placeholder.com/150', title: 'Title 1', buttonLabel: 'Button 1' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Title 2', buttonLabel: 'Button 2' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Title 3', buttonLabel: 'Button 3' },

    // Dodaj więcej obiektów tutaj
  ];
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex' }}>
        <Sidebar buttons={buttons} logout={logout} imageSrc="https://via.placeholder.com/150" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '200px' }}>
          <Header
            onSearch={handleSearch}
            profileImageSrc="https://via.placeholder.com/30"
            onProfileClick={handleProfileClick}
          />
          <ButtonsBar
            images={["https://via.placeholder.com/30", "https://via.placeholder.com/30"]}
            onClientClick={handleClientClick}
            onStatusClick={handleStatusClick}
            onTimeClick={handleTimeClick}
            onAddNewCampaignClick={handleAddNewCampaignClick}
          />
          <div style={{ flex: 1, overflowY: 'auto', marginTop: '60px' }}>
            <ImageList images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;