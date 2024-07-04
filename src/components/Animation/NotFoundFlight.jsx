import React from 'react';
import Lottie from 'lottie-react';
import notFoundFlightAnimation from './../../assets/animation/Animation-Flight-Not-Found.json';

const NotFoundFlight = () => {
  return (
    <div className="mx-auto">
      <Lottie
        style={{ width: '600px' }}
        animationData={notFoundFlightAnimation}
        loop={true}
      />
    </div>
  );
};

export default NotFoundFlight;
