import React from 'react';

const Card = ({ imgSrc, name, chef, cookTime }) => {
  return (
    <div className="card hover:shadow-lg">
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
        <svg
          class="w-6 h-6 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>
          {cookTime} {cookTime > 1 ? 'mins' : 'min'}
        </span>
      </div>
    </div>
  );
};

export default Card;
