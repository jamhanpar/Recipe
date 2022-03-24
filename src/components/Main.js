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
          <h2>Recipes</h2>
          <h3>For Ninjas</h3>
        </header>

        <div>
          <h4>Latest Recipes</h4>
          <div>
            {/* Cards go here */}
            <div>
              <img src="" alt="Chicken Tikka Masala" />
              <div>
                <span>Chicken Tikka Masala</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4>Latest Recipes</h4>
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
