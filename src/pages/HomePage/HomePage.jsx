import ImageSlider from '../../components/Slider/ImageSlider';
import { SliderData } from '../../components/Slider/SliderData';

export default function HomePage() {
  return (
    <>
    <br />
    <br />
    <h1 className="about-title">Welcome to the magical world of Dino Amigo!</h1>
    <br />
    <br />
    <ImageSlider slides={SliderData}/>

    </>
  );
}