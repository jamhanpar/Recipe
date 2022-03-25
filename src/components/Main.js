import React from 'react';
import Card from './Card';

const Main = () => {
  return (
    <div className="md:col-span-5">
      <main class="px-16 py-6 bg-gray-100">
        <div className="flex justify-center md:justify-end">
          <a
            href="#"
            className="btn text-red-400 border-red-400 md:border-2 hover:bg-red-400 hover:text-white transition ease-out duration-500"
          >
            Log in
          </a>
          <a
            href="#"
            className="btn text-red-400 ml-2 border-red-400 md:border-2 hover:bg-red-400 hover:text-white transition ease-out duration-500"
          >
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            {/* Cards go here */}
            <Card
              imgSrc="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chicken-tikka-masala_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1567523604572.jpeg"
              name="Chicken Tikka Masala"
              chef="Mario"
              cookTime={25}
            />
            <Card
              imgSrc="https://norecipes.com/wp-content/uploads/2019/04/mentaiko-pasta-002.jpg"
              name="Mentaiko Pasta"
              chef="James"
              cookTime={10}
            />
            <Card
              imgSrc="https://mahatmarice.com/wp-content/uploads/2019/05/Shrimp-Fried-Rice-w-Pineapple-Egg-020.jpg"
              name="Shrimp Fried Rice"
              chef="Jennifer"
              cookTime={20}
            />
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div className="mt-8">{/* Cards go here */}</div>

          <div className="flex justify-center">
            <div className="btn bg-gray-200 text-gray-400 hover:shadow-inner tranform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              Load more
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
