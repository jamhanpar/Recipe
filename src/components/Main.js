import React from 'react';

const Main = () => {
  return (
    <div>
      <main class="px-16 py-6">
        <div className="flex justify-center md:justify-end">
          <a href="#" className="text-red-400">Log in</a>
          <a href="#" className="text-red-400 ml-2">Sign up</a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
          <div className="mt-8">
            {/* Cards go here */}
            <div>
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chicken-tikka-masala_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1567523604572.jpeg"
                alt="Chicken Tikka Masala"
              />
              <div>
                <span>Chicken Tikka Masala</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
          <div className="mt-8">{/* Cards go here */}</div>

          <div className="flex justify-center">
            <div className="bg-gray-200 text-gray-400">Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
