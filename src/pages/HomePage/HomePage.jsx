import ImageSlider from '../../components/Slider/ImageSlider';
import { SliderData } from '../../components/Slider/SliderData';

export default function HomePage() {
  return (
    <>
    <h1>Home Page</h1>
    <ImageSlider slides={SliderData} />
    </>
  );
}