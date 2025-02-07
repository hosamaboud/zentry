const ClipAnimation = ({ clipRef, clipImageRef, aboutImageRef }) => (
  <div
    id="clip"
    className="overflow-hidden mt-5 relative flex justify-center items-center h-dvh w-full"
    ref={clipRef}
  >
    <div
      id="clip-image"
      className="mask-clip-path about-image"
      ref={clipImageRef}
    >
      <img
        id="about-image"
        className="h-[100%] w-[100%] object-cover"
        src="/img/about.webp"
        alt="background image"
        ref={aboutImageRef}
      />
    </div>
    <img
      src="/img/stones.webp"
      alt="stones"
      className="absolute h-[90%] w-[100%] z-20"
    />
  </div>
);

export default ClipAnimation;
