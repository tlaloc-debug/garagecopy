import React from 'react';
import AliceCarousel from 'react-alice-carousel';

class Gallery extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {
        position: true,
    }

this.onSlideChange = this.onSlideChange.bind(this);

    }

  onSlideChange(e) {
    this.setState({position: !this.state.position})
  }

  onSlideChanged(e) {
   
  }

  render() {
    
    return (
      <div>
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        
        onSlideChanged={this.onSlideChanged}
      >
        <div className="yours-custom-class"><h2>1</h2></div>
        <div className="yours-custom-class"><h2>2</h2></div>
        <div className="yours-custom-class"><h2>3</h2></div>
        <div className="yours-custom-class"><h2>4</h2></div>
        <div className="yours-custom-class"><h2>5</h2></div>
      </AliceCarousel>
      <div className={this.state.position ? "box" : "static"}></div>
      </div>
    );
  }
}
export default Gallery;