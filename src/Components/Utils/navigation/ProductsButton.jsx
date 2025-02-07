import Button from '../Button';
import { TiLocationArrow } from 'react-icons/ti';

const ProductsButton = () => (
  <Button
    srcAudio={'/audio/btn.mp3'}
    id="product-btn"
    containerClass="md:flex md:w-[140px] px-2 py-2 gap-1 hidden items-center justify-center bg-blue-50 text-black "
    title="Products"
    rightIcon={
      <TiLocationArrow className="group-hover:rotate-[45deg] group-hover:translate-x-1 transition-transform duration-300 ease-in" />
    }
  />
);

export default ProductsButton;
