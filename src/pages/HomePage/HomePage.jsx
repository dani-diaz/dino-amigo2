import ImageSlider from '../../components/Slider/ImageSlider';
import { SliderData } from '../../components/Slider/SliderData';

export default function HomePage() {
  return (
    <>
    <br />
    <br />
    <h1>Welcome to Dino Amigo!</h1>
    <br />
      <h3> Why cartoons and music?    
          Kids love cartoons and music so why not mix them to create a powerful learning tool?    
          Beyond the fun, there is also a strong educational basis:     
          Research has shown that music is one of the best ways to learn a foreign language.    
      </h3>
    <br />
    <br />
    <ImageSlider slides={SliderData}/>

    </>
  );
}