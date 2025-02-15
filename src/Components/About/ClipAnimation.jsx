const ClipAnimation = ({ clipRef, clipImageRef, aboutImageRef }) => (
  <div
    id="clip"
    className="h-dvh w-screen "
    ref={clipRef}
  >
    <div
      id="clip-image"
      className="mask-clip-path about-image"
      ref={clipImageRef}
    >
      <img
        loading="lazy"
        id="about-image"
        className="h-[100%] w-[100%] object-cover"
        src="/img/about.webp"
        alt="background image"
        ref={aboutImageRef}
      />
    </div>
    <img
      loading="lazy"
      src="/img/stones.webp"
      alt="stones"
      className="absolute h-[90%] w-[100%] z-20"
    />
  </div>
);

export default ClipAnimation;
