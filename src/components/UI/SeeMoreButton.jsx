import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SeeMoreButton.css';

const SeeMoreButton = ({ onClick, children = "See More Projects", href, to, className = '', style = {} }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
      <path d="M6.04892 5.38193L6.05184 0.668846C6.04998 0.581116 6.03081 0.494638 5.99544 0.414375C5.92793 0.252532 5.79931 0.123908 5.63747 0.056402C5.5572 0.0210296 5.47072 0.00186327 5.38299 2.71706e-06L0.66991 0.00292361C0.582022 0.00297804 0.494984 0.0203428 0.413765 0.0540263C0.332546 0.0877101 0.258737 0.137053 0.196552 0.199238C0.0709639 0.324826 0.000347585 0.495098 0.000237622 0.672596C0.000127653 0.850094 0.0705333 1.02028 0.195966 1.14571C0.321398 1.27114 0.491583 1.34155 0.669081 1.34144L3.77501 1.3348L0.195559 4.91425C0.0704824 5.03933 0.000153327 5.2089 4.37373e-05 5.38568C-6.55147e-05 5.56245 0.070053 5.73194 0.194974 5.85687C0.319895 5.98179 0.489387 6.05191 0.666161 6.0518C0.842936 6.05169 1.01251 5.98136 1.13759 5.85628L4.71704 2.27683L4.7104 5.38276C4.70999 5.47075 4.727 5.55793 4.76045 5.63927C4.79391 5.72061 4.84314 5.7945 4.90532 5.85668C4.9675 5.91886 5.04139 5.9681 5.12274 6.00155C5.20408 6.03501 5.29125 6.05202 5.37924 6.0516C5.46723 6.05191 5.55443 6.03479 5.63582 6.00123C5.7172 5.96768 5.79115 5.91835 5.85341 5.85609C5.91566 5.79384 5.96499 5.71988 5.99855 5.6385C6.0321 5.55712 6.04922 5.46992 6.04892 5.38193Z" fill="#C584F6"/>
    </svg>
  );

  const hoverIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path d="M4.47519 7.80296L7.80991 4.47238C7.87063 4.40903 7.91823 4.33432 7.94997 4.25256C8.01668 4.09038 8.01668 3.90848 7.94997 3.74631C7.91823 3.66454 7.87063 3.58984 7.80991 3.52649L4.47519 0.1959C4.41301 0.133792 4.33918 0.0845254 4.25794 0.0509129C4.17669 0.0173003 4.08961 0 4.00166 0C3.82405 0 3.65372 0.0704673 3.52813 0.1959C3.40254 0.321332 3.33199 0.491455 3.33199 0.668843C3.33199 0.846232 3.40254 1.01635 3.52813 1.14179L5.72905 3.33331H0.666944C0.490059 3.33331 0.320419 3.40349 0.195343 3.52842C0.0702667 3.65334 0 3.82277 0 3.99943C0 4.1761 0.0702667 4.34553 0.195343 4.47045C0.320419 4.59537 0.490059 4.66555 0.666944 4.66555H5.72905L3.52813 6.85708C3.46562 6.919 3.416 6.99267 3.38214 7.07385C3.34828 7.15502 3.33085 7.24208 3.33085 7.33002C3.33085 7.41796 3.34828 7.50502 3.38214 7.58619C3.416 7.66737 3.46562 7.74104 3.52813 7.80296C3.59013 7.8654 3.6639 7.91495 3.74517 7.94877C3.82645 7.98259 3.91362 8 4.00166 8C4.08971 8 4.17688 7.98259 4.25815 7.94877C4.33943 7.91495 4.41319 7.8654 4.47519 7.80296Z" fill="#151515"/>
    </svg>
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const buttonProps = {
    className: `seemore-button ${className} ${isHovered ? 'hovered' : ''}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick: handleClick,
    style: style
  };

  const content = (
    <>
      <span className="seemore-text">{children}</span>
      <div className="seemore-icon-container">
        <div className="icon-wrapper">
          {isHovered ? hoverIcon : defaultIcon}
        </div>
      </div>
    </>
  );

  // If 'to' prop provided, render as React Router Link
  if (to) {
    return (
      <Link 
        {...buttonProps}
        to={to}
        role="button"
      >
        {content}
      </Link>
    );
  }

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a 
        {...buttonProps}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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

export default SeeMoreButton;
