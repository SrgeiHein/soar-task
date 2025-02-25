import React from 'react';

interface CardIcon2Props {
  className?: string;
}

export const CardIcon2: React.FC<CardIcon2Props> = ({ className }) => {
  return (
    <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="15" cy="15" r="15" fill="#9199AF" fillOpacity="0.5"/>
      <circle cx="29" cy="15" r="15" fill="#9199AF" fillOpacity="0.5"/>
    </svg>
  );
};

export default CardIcon2;
