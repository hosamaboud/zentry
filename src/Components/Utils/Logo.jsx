const Logo = ({ style, size }) => (
  <a
    href="#video_Frame"
    className={`${size} relative  rotate-[25deg] `}
  >
    <div
      className={` top-3
    left-2 logo-clip-path-2  absolute z-20 rotate-[-10deg] ${style}`}
    ></div>
    <div
      className={` logo-clip-path-2  absolute bottom-2 left-3 z-20 -rotate-[190deg] ${style} `}
    ></div>
  </a>
);

export default Logo;
