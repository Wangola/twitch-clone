import React from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import IconBar from "./IconBar";
import LiveChannels from "./LiveChannels";

function Main() {
  return (
    <div className="bg-[#efeff1] dark:bg-[#1f1f23] absolute left-[64px] xl:left-[240px]">
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  );
}

export default Main;
