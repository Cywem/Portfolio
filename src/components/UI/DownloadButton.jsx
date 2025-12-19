import { useState } from 'react';
import './downloadButton.css';

const DownloadButton = ({ onClick, children = "DOWNLOAD CV", href, download }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
      <path d="M3.70005 0.5H4.76672V3.7H6.10005L3.70005 6.1M3.70005 0.5H2.63338V3.7H1.30005L3.70005 6.1" fill="#2FA8FF"/>
      <path d="M3.70005 0.5H4.76672V3.7H6.10005L3.70005 6.1L1.30005 3.7H2.63338V0.5H3.70005Z" stroke="#2FA8FF" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.5 8.5H6.9" stroke="#2FA8FF" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const hoverIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
      <path d="M0.5 3.7L0.5 2.63334L3.7 2.63334L3.7 1.3L6.1 3.7M0.5 3.7L0.5 4.76667L3.7 4.76667L3.7 6.1L6.1 3.7" fill="#151515"/>
      <path d="M0.5 3.7L0.5 2.63334L3.7 2.63334L3.7 1.3L6.1 3.7L3.7 6.1L3.7 4.76667L0.5 4.76667L0.5 3.7Z" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 6.9L8.5 0.500001" stroke="#151515" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const buttonProps = {
    className: `download-button ${isHovered ? 'hovered' : ''}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick: handleClick
  };

  const content = (
    <>
      <span className="download-text">{children}</span>
      <div className="download-icon-container">
        <div className="icon-wrapper">
          {isHovered ? hoverIcon : defaultIcon}
        </div>
      </div>
    </>
  );

  // If href is provided, render as anchor tag for download
  if (href) {
    return (
      <a 
        {...buttonProps}
        href={href}
        download={download}
        role="button"
      >
        {content}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button {...buttonProps}>
      {content}
    </button>
  );
};

export default DownloadButton;