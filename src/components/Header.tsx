import React from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
  profileImageSrc: string;
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, profileImageSrc, onProfileClick }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
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
        top: 0,
        left: '220px', // To ensure it starts after the sidebar
        width: 'calc(100% - 220px)', // Full width minus the sidebar width
        backgroundColor: '#fff',
        zIndex: 1,
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        style={{
          flex: 1,
          marginRight: '10px',
          padding: '5px',
          maxWidth: '300px',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={profileImageSrc} alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
        <button onClick={onProfileClick}>Profile</button>
      </div>
    </div>
  );
};

export default Header;
