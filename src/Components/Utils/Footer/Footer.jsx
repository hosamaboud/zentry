import { TiLocationArrow } from 'react-icons/ti';
import Button from '../Button';
import Logo from '../Logo';

const Footer = () => {
  const foterItem = ['About', 'Contact', 'Zigma', 'Terms & Conditions'];
  return (
    <div className="bg-[#5724ff] h-[70vh] md:h-[60vh] py-6 flex flex-col items-center justify-between w-[100%] ">
      <div className="bg-black w-[90%] h-[1px]"></div>
      <div className="flex  justify-between items-center w-[90%] mx-auto">
        <Logo size="w-[0px] h-[100px]" style="h-[50px] w-[50px] bg-black" />
        <div className="flex gap-y-2 md:gap-4 flex-col md:flex-row mt-10 justify-center items-start">
          {foterItem.map((item, index) => (
            <Button
              key={index}
              title={item}
              containerClass="px-7 py-3 font-general hover:text-[#5724ff] hover:bg-black text-black flex gap-2 items-center justify-start "
              rightIcon={index === 1 && <TiLocationArrow />}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center h-[10vh] mx-auto w-[90%]">
        <p className="font-general text-xs md:text-base">
          <span className="font-zentry ">© Zentry</span> 2024. All rights
          reserved.
        </p>
        <a
          href="https://zentry.com/legal/privacy"
          className=" px-7 py-3 font-general clip-btn hover:text-[#5724ff] hover:bg-black text-black"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};
export default Footer;
