import React from 'react';

interface IconContainerProps {
  iconType: 'navBar' | 'profileMenu';
  onClick: () => void;
}

const IconContainer: React.FC<IconContainerProps> = ({ iconType, onClick }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'navBar':
        return (
          <svg width="24" height="24" fill="currentColor">
            <path d="@icon-microscope.svg" />
          </svg>
        );
      case 'profileMenu':
        return (
          <svg width="24" height="24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default IconContainer;
