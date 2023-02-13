import React from "react";

function Hero() {
  return (
    <div id="hero" className="p-2 md:p-8">
      <div className="relative overflow-hidden w-full pt-[50%]">
        <iframe
          className="absolute top-0 left-[10%] right-0 bottom-0 w-[80%] h-full"
          src="https://www.youtube.com/embed/fYZuiFDQwQw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Hero;
