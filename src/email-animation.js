import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './images/email_after/data.json';

class Emailanimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
        />
      </div>
    );
  }
}

export default Emailanimation;