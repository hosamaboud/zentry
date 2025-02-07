import { useRef, useEffect, useContext, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Logo from '../Logo';
import ProductsButton from './ProductsButton';
import NavItem from './NavItem';
import AudioToggleButton from './AudioToggleButton';
import { AudioContext } from '../../../context/AudioContext';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const { audioEnabled } = useContext(AudioContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navbarContainer = useRef(null);

  const navItems = [
    { name: 'Nexus', rightIcon: true, link: '#nexus' },
    { name: 'Vault', rightIcon: true, link: '#vault' },
    { name: 'Prologue', rightIcon: false, link: '#prologue' },
    { name: 'About', rightIcon: false, link: '#about' },
    { name: 'Contact', rightIcon: false, link: '#contact' },
  ];

  useEffect(() => {
    const element = navbarContainer.current;

    gsap.fromTo(
      element,
      { backgroundColor: 'transparent' },
      {
        backgroundColor: 'black',
        border: '1px solid #3E5879',
        color: 'white',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: '5px top',
          end: '+=200',
          scrub: true,
        },
      }
    );

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={navbarContainer}
      className="fixed rounded-lg top-2 sm:inset-x-4 h-14 z-50 inset-x-2 border-none transition-all duration-700"
      style={{
        opacity: isNavbarVisible ? 1 : 0,
        pointerEvents: isNavbarVisible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between size-full p-4">
          <div className="flex items-center justify-between md:w-[25%] w-[20%]">
            <Logo
              size="w-[50px] h-[50px]"
              style="h-[20px] w-[20px] bg-[#5724ff]"
            />
            <ProductsButton />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:flex gap-2">
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </div>
            <AudioToggleButton />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
