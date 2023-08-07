import React from "react";
import '../css/Nigalvugal.css'
import image1 from '../assets/nigalvugal-images/image1.jpg'
import image2 from '../assets/nigalvugal-images/image2.jpg'
import image3 from '../assets/nigalvugal-images/image3.jpg'
import image4 from '../assets/nigalvugal-images/image4.jpg'
import image5 from '../assets/nigalvugal-images/image5.jpg'
import image6 from '../assets/nigalvugal-images/image6.jpg'
import image7 from '../assets/nigalvugal-images/image7.jpg'
import image8 from '../assets/nigalvugal-images/image8.jpg'
import image9 from '../assets/nigalvugal-images/image9.jpg'
import image10 from '../assets/nigalvugal-images/image10.jpg'

const Nigazhvugal = ({ title }) => {
  document.title = title;
  return (
    <div>
      <div class="gallery">
        <div class="gallery-item">
          <img src={image1} alt="Image 1" />
        </div>
        <div class="gallery-item">
          <img src={image2} alt="Image 2" />
        </div>
        <div class="gallery-item">
          <img src={image3} alt="Image 3" />
        </div>
        <div class="gallery-item">
          <img src={image4} alt="Image 4" />
        </div>
        <div class="gallery-item">
          <img src={image5} alt="Image 5" />
        </div>
        <div class="gallery-item">
          <img src={image6} alt="Image 6" />
        </div>
        <div class="gallery-item">
          <img src={image7} alt="Image 7" />
        </div>
        <div class="gallery-item">
          <img src={image8} alt="Image 8" />
        </div>
        <div class="gallery-item">
          <img src={image9} alt="Image 9" />
        </div>
        <div class="gallery-item">
          <img src={image10} alt="Image 10" />
        </div>
      </div>
    </div>
  );
};

export default Nigazhvugal;
