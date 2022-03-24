import React from 'react';

const Card = () => {
  return (
    <div className="bg-white rounded overflow-hidden shadow-md">
      <img
        src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chicken-tikka-masala_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1567523604572.jpeg"
        alt="Chicken Tikka Masala"
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold">Chicken Tikka Masala</span>
        <span className="block text-gray-500 text-sm">Recipe by Mario</span>
      </div>
    </div>
  );
};

export default Card;
