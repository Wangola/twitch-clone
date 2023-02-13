import React from "react";
import Remote from "../public/assests/remote.png";
import Mic from "../public/assests/mic.png";
import Headphones from "../public/assests/headphones.png";
import Trophy from "../public/assests/trophy.png";
import Paint from "../public/assests/paint.png";
import Image from "next/image";

function IconBar() {
  return (
    <div className="p-2 md:p-8">
      {/* Container */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8">
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Games</p>
          <Image src={Remote} />
        </div>
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">IRL</p>
          <Image src={Mic} />
        </div>
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Music</p>
          <Image src={Headphones} />
        </div>
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Esports</p>
          <Image src={Trophy} />
        </div>
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Creative</p>
          <Image src={Paint} />
        </div>
      </div>
    </div>
  );
}

export default IconBar;
