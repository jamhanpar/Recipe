import React from 'react';

const Main = () => {
  return (
    <div>
      <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold">Latest Recipes</h4>
          <div>
            {/* Cards go here */}
            <div>
              <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chicken-tikka-masala_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1567523604572.jpeg" alt="Chicken Tikka Masala" />
              <div>
                <span>Chicken Tikka Masala</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold">Latest Recipes</h4>
          <div>{/* Cards go here */}</div>

          <div>
              <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
