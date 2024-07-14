import React from 'react';
import ButtonComponent from './ButtonComponent';

interface SidebarProps {
  buttons: { label: string; onClick: () => void }[];
  logout: { label: string; onClick: () => void };
  imageSrc: string;
}

const Sidebar: React.FC<SidebarProps> = ({ buttons, logout, imageSrc }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '200px',
        borderRight: '1px solid #ccc',
        padding: '10px',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,  // Przylega do góry kontenera rodzica
      }}
    >
      <div>
        {buttons.map((button, index) => (
          <ButtonComponent key={index} label={button.label} onClick={button.onClick} />
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src={imageSrc} alt="Sidebar Image" style={{ width: '100%', marginBottom: '10px' }} />
        <ButtonComponent label={logout.label} onClick={logout.onClick} />
      </div>
    </div>
  );
};

export default Sidebar;
