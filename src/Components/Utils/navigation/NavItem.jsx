import Button from "../Button";
import { TiLocationArrow } from "react-icons/ti";

const NavItem = ({ item }) => (
  <a href={item.link}>
    <Button
      title={item.name}
      srcAudio={'/audio/nav_btn.mp3'}
      containerClass={
        ' flex gap-1 items-center text-blue-50 bg-transparent font-general px-4 py-2 hover:bg-[#DF6D14] hover:text-black '
      }
      rightIcon={item.rightIcon && <TiLocationArrow />}
    />
  </a>
);

export default NavItem;
