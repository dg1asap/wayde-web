import React from 'react';

interface ButtonComponentProps {
  label: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, onClick }) => {
  return (
    <button
      style={{
        display: 'block',
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        textAlign: 'left',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
