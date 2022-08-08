import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
  return (
    <div class="hero py-8 md:py-20 my-6 lg:my-20">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="a dental chair"
          class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div class="px-4">
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;