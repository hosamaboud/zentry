import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Logo from '../Logo';
import ProductsButton from './ProductsButton';
import NavItem from './NavItem';
import AudioToggleButton from './AudioToggleButton';

import { BsMenuButtonWideFill } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navbarContainer = useRef(null);

  const navItems = [
    { id: 1, name: 'Nexus', rightIcon: true, link: '#nexus' },
    { id: 2, name: 'Vault', rightIcon: true, link: '#vault' },
    {
      id: 3,
      name: 'Prologue',
      rightIcon: false,
      link: '#prologue',
    },
    { id: 4, name: 'About', rightIcon: false, link: '#about' },
    { id: 5, name: 'Contact', rightIcon: false, link: '#contact' },
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
      className="fixed rounded-lg top-2 sm:inset-x-4 md:inset-x-1 h-14 z-50 inset-x-2 border-none transition-all duration-700"
      style={{
        opacity: isNavbarVisible ? 1 : 0,
        pointerEvents: isNavbarVisible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center p-4 justify-between  size-full ">
          
          {/* Logo and products */}
          <div className="flex items-center md:w-[25%] w-[20%]">
            <Logo
              size="w-[50px] h-[50px]"
              style="h-[20px] w-[20px] bg-[#5724ff]"
            />
            <ProductsButton />
          </div>
          {/* Menu for desktop */}
          <div className="flex h-full items-center gap-10 md:gap-0">
            <div className="hidden md:flex ">
              {navItems.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </div>
            <AudioToggleButton />
            {/* Navbar for mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[1.5rem] text-[#DF6D14]"
            >
              <BsMenuButtonWideFill />
            </button>

            {isMenuOpen && (
              <div
                className="md:hidden absolute top-4 right-0 rounded-2xl bg-black z-50 flex flex-col"
                tabIndex={0} // tab index for close menu from Esc tab
                onKeyDown={(e) => e.key === 'Escape' && setIsMenuOpen(false)}
              >
                {/* button for close menu */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 text-[2rem] right-2 text-[#5724ff]"
                >
                  <IoIosCloseCircle />
                </button>

                {/* menu items */}
                <div className="flex flex-col gap-4 items-start m-10">
                  {navItems.map((item) => (
                    <div key={item.id} className="w-full">
                      <div
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full text-left"
                      >
                        <NavItem item={item} />
                      </div>
                      {navItems.length - 1 !== navItems.indexOf(item) && (
                        <div className="w-[90%] h-[1px] bg-[#DF6D14]"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
