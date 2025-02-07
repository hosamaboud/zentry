const Svg = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="flt_tag">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 19 -9"
            result="flt_tag"
          />
          <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

export default Svg;
