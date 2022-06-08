// import ImageSlider from '../../components/Slider/ImageSlider';
// import { SliderData } from '../../components/Slider/SliderData';
import Slideshow from '../../components/Slideshow/Slideshow';

export default function HomePage() {
  return (
    <>
    <h1>Welcome to Dino Amigo!</h1>
      <p> Why cartoons and music?    
          Kids love cartoons and music so why not mix them to create a powerful learning tool?    
          Beyond the fun, there is also a strong educational basis:     
          Research has shown that music is one of the best ways to learn a foreign language.    
      </p>
    <br />
    {/* <ImageSlider slides={SliderData} /> */}
    <br />
    <Slideshow />
    </>
  );
}