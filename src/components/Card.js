import React from 'react';

const Card = ({ imgSrc, name, chef, cookTime }) => {
  return (
    <div className="card">
      <img
        src={imgSrc}
        alt="Chicken Tikka Masala"
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{name}</span>
        <span className="block text-gray-500 text-sm">Recipe by {chef}</span>
      </div>
      <div className="badge">
        <span>
          {cookTime} {cookTime > 1 ? 'mins' : 'min'}
        </span>
      </div>
    </div>
  );
};

export default Card;
