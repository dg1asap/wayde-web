// App Component
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ButtonsBar from './components/ButtonsBar';
import ImageList from './components/ImageList';
import CampaignModal from './components/CampaignModal';
import Calendar from './components/Calendar';
import Influencers from './components/Influencers'; 
import ButtonsBarInfluencers from './components/ButtonsBarInfluencers';

interface Campaign {
  imageUrl: string;
  title: string;
  buttonLabel: string;
  startDate: string;
  endDate: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Campaign[]>([
    { imageUrl: 'https://via.placeholder.com/150', title: 'Title 1', buttonLabel: 'Button 1', startDate: '2024-07-15', endDate: '2024-07-30' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Title 2', buttonLabel: 'Button 2', startDate: '2024-07-16', endDate: '2024-07-31' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Title 3', buttonLabel: 'Button 3', startDate: '2024-07-17', endDate: '2024-08-01' },
    // Dodaj więcej obiektów tutaj
  ]);

  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showInfluencers, setShowInfluencers] = useState(false);

  const handleDashboardClick = () => {
    setShowCalendar(false);
    setShowInfluencers(false);
  };

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
  const buttonPresed = () => {
    alert('button clicked');
  };
  const handleStatusClick = () => {
    alert('Status button clicked');
  };

  const handleTimeClick = () => {
    alert('Time button clicked');
  };

  const handleAddNewCampaignClick = () => {
    setShowCampaignModal(true);
  };

  const handleCloseCampaignModal = (imageUrl: string, title: string, buttonLabel: string, startDate: string, endDate: string) => {
    const newCampaign: Campaign = { imageUrl, title, buttonLabel, startDate, endDate };
    setImages([...images, newCampaign]);
    setShowCampaignModal(false);
  };

  const handleCancel = () => {
    setShowCampaignModal(false);
  };

  const handleCalendarClick = () => {
    setShowCalendar(true);
    setShowInfluencers(false);
  };

  const handleInfluencersClick = () => {
    setShowInfluencers(true);
    setShowCalendar(false);
  };

  const buttons = [
    { label: 'Dashboard', onClick: handleDashboardClick },
    { label: 'Influencers', onClick: handleInfluencersClick },
    { label: 'Campaigns', onClick: () => handleButtonClick('Campaigns') },
    { label: 'Clients', onClick: () => handleButtonClick('Clients') },
    { label: 'Mailing', onClick: () => handleButtonClick('Mailing') },
    { label: 'Calendar', onClick: handleCalendarClick },
  ];

  const logout = { label: 'Logout', onClick: handleLogout };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex' }}>
        <Sidebar 
          buttons={buttons} 
          logout={logout} 
          imageSrc="https://via.placeholder.com/150" 
          smallImageSrc="https://via.placeholder.com/50"
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '50px' }}>
          <Header
            onSearch={handleSearch}
            profileImageSrc="https://via.placeholder.com/30"
            onProfileClick={handleProfileClick}
          />
          <div style={{ flex: 1, overflowY: 'auto', marginTop: '60px' }}>
            {showCalendar && <Calendar />}
            {showInfluencers && (<><ButtonsBarInfluencers
              images={["https://via.placeholder.com/200x40", "https://via.placeholder.com/200x40"]}
              onAssignedOwnerClick={buttonPresed}
              onCampaignClick={buttonPresed}
              onClientClick={buttonPresed}
              onWorkStatusClick={buttonPresed}
              onDataOfCreationClick={buttonPresed}
              onCountryClick={buttonPresed}
            /><Influencers /></>)}

            {!showCalendar && !showInfluencers && (
              <> <ButtonsBar
              images={["https://via.placeholder.com/30", "https://via.placeholder.com/30"]}
              onClientClick={handleClientClick}
              onStatusClick={handleStatusClick}
              onTimeClick={handleTimeClick}
              onAddNewCampaignClick={handleAddNewCampaignClick}
            />
                <ImageList images={images} />
              </>)}
          </div>
          {showCampaignModal && <CampaignModal onClose={handleCloseCampaignModal} onCancel={handleCancel} />}
        </div>
      </div>
    </div>
  );
};

export default App;